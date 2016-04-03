Depth First Tree Traversal
==========================

To traverse finite (and not too large) trees or graphs, a so called depth first
tree traversal can be adequate.

The algorithm starts with the root node and runs down the subtree on either the
left or right side first. It will stay on one side until the end of the tree
and walk the other side afterwards.

Implementation is very simple but uses a stack of the same size as the tree
depth. This renders the traversal method unsuitable for big or infinite trees
or graphs.

A simple recursive example in Javascript:

``` js

function traverse_tree(tree) {

  var results = []

  function traverse(node) {
    if (node) {
      results.push(node.value)
      traverse(node.left)
      traverse(node.right)
    }
  }

  traverse(tree.root)

  return results
}

```
