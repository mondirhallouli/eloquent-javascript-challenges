/* 
these are the bindings from the robot project in chapter 7:
- roads
- buildGraph
- roadGraph
- villageState
- runRobot
- randomPick
- randomRobot
- mailRoute
- routeRobot
- findRoute
- goalOrientedRobot
__________________________________________________

if I were to create this project as a modular program here's how I would do it:

- MODULE 1(data)
  - roads
  - mailRoute
  - roadGraph
  => this makes sense to me because these bindings refer to the data we rely on to create most of the other ones, and this way we can pull the necessary data wherever we need it.
  => DEPENDENCIES: buildGraph(M2)

- MODULE 2
  - buildGraph
  => this is a function that creates a graph data structure from a roads array, it's better to isolate it in it's own module and use it wherever we need to.

- MODULE 3
  - VillageState
  => it's better to isolate the state class and import it whenever we need to create an instance of it.

- MODULE 4
  - runRobot
  => this is an independent function that is used to run the robot and updating the state; so we can also isolate it in it's own module
  => DEPENDENCIES: VillageState(M3), (a robot program...)

- MODULE 5
  - randomPick
  - randomRobot
  => this is the random robot module;

- MODULE 6
  - routeRobot
  => DEPENDENCIES: mailRoute(M1)

- MODULE 7
  - findRoute
  - goalOrientedRobot
  => DEPENDENCIES: VillageState(M3)
*/
