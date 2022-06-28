function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] === undefined) graph[from] = [to];
    else graph[from].push(to);
  }
  for (let [from, to] of edges.map((e) => e.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

module.exports = buildGraph;
