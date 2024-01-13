function elementsByTagname(node, name) {
    // goal: find all descendent nodes with a name matching the name arg
    // build a results array
    let results = [];
    // keep a queue array
    let queue = [];
    // keep a current node
    let currentNode = node;
    let nodeName = null;
    queue.push(currentNode.children);
    // loop through children nodes
    while (queue.length) {
        nodeName = currentNode.nodeName;
        if (nodeName === name) {
        }
    }
}
