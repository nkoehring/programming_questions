module.exports = (function() {

  function traverse(node, results) {
    if (node) {
      results.push(node.value)
      traverse(node.left, results)
      traverse(node.right, results)
    }
  }

  function traverse_tree(tree) {
    var results = []
    traverse(tree.root, results)
    return results
  }

  return traverse_tree

})()

