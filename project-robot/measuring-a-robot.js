/* 
all the other code beside the routeBot & goalOriented bot is to setup the environment for the bots and the comparator function to work properly, the focus in all of this code is to be on the comparator function at the end.

=======< GOAL >=======
the goal of this answer is to measure the average of steps taken by two different robots on the same steps;
*/
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

// mail route for the route robot
const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

// function to build our road graph
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == undefined) graph[from] = [to];
    else graph[from].push(to);
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

// ROAD GRAPH
const roadGraph = buildGraph(roads);

// VILLAGE STATE CLASS
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  // THIS MOVES OUR ROBOT AND CHANGES THE STATE OF THE VILLAGE
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) return this;
    else {
      let parcels = this.parcels
        .map((parcel) => {
          if (parcel.place != this.place) return parcel;
          return { place: destination, address: parcel.address };
        })
        .filter((parcel) => parcel.place != parcel.address);
      return new VillageState(destination, parcels);
    }
  }

  // THIS GENERATES A SPECIFIED NUMBER OF PARCELS OR 5 BY DEFAULT
  static random(parcelCount = 5) {
    let parcels = [];

    function randomPick(array) {
      let choice = Math.floor(Math.random() * array.length);
      return array[choice];
    }

    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
  }
}

// route finder function for the goal oriented robot
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

// RUN ROBOT
function runBot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

// MAIL ROUTE ROBOT
function routeBot(state, memory) {
  if (memory.length == 0) memory = mailRoute;
  return { direction: memory[0], memory: memory.slice(1) };
}

// GOAL ORIENTED ROBOT
function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// COMPARE ROBOTS
function compareBots(bot1, memory1, bot2, memory2) {
  let taskState;
  let total1 = 0,
    total2 = 0;
  for (let i = 0; i < 100; i++) {
    taskState = VillageState.random();
    total1 += runBot(taskState, bot1, memory1);
    total2 += runBot(taskState, bot2, memory2);
  }
  console.log(`Robot 1 averaged ${total1 / 100} steps per task`);
  console.log(`Robot 2 averaged ${total2 / 100} steps per task`);
}

compareBots(routeBot, [], goalOrientedRobot, []);
