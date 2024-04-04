function augmentingPath(graph, start, end) {
    if (start == end) { //if start and end are the same, then retrun that node in a list
        return [start];
    }
    let path = [];
    
    for (let [node, connections] of Object.entries(graph)) {
        for (let [node, connections] of Object.entries(graph)) {
            path.push(node);
            if (node == end)
                return path;
        }
    } 
    console.log(path);
    return [];
}


let graph = {'foo': {'boo': 7, 'd': 4}, //graph from code.test.js
             'boo': {'e': 3},
             'd': {'bar': 4},
             'e': {'foo': 1},
             'bar': {'foo': 2}};
             
console.log(augmentingPath(graph, 'foo', 'bar'));
