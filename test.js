var assert = require("assert"),
    modules = {
      array_compaction: require("./array_compaction"),
      array_rotation: require("./array_rotation"),
      find_chars_exp: require("./find_chars").exponential,
      find_chars_linear: require("./find_chars").linear,
      least_common_multiple: require("./least_common_multiple"),
      tree_traversal: require("./tree_traversal")
    }


// poor mans unit test module
function test(name, args, expectation, inPlace) {

  var func = modules[name],
      check = assert.equal,
      result

  if (inPlace) {
    result = args[0]
    func(result)
  } else {
    result = func.apply(null, args)
  }

  if (typeof expectation === "object")
    check = assert.deepEqual

  try {
    check(result, expectation)
  } catch(e) {

    console.warn("\n" + name + " test failed!")
    console.warn("Returned value:", e.actual)
    console.warn("Expected value:", e.expected)

  }

}


test("array_compaction", [[1,3,7,7,8,9,9,9,10]], [1,3,7,8,9,10], true)
test("array_rotation", [[1,2,3,4,5,6], 2], [5,6,1,2,3,4])
test("array_rotation", [[1,3,7,7,8,9,9,9,10], 4], [9,9,9,10,1,3,7,7,8])
test("find_chars_exp", ["abcdef", "abc"], "abc")
test("find_chars_exp", ["abc", "abcdef"], "abc")
test("find_chars_exp", ["abc", "def"], "")
test("find_chars_linear", ["abcdef", "abc"], "abc")
test("find_chars_linear", ["abc", "abcdef"], "abc")
test("find_chars_linear", ["abc", "def"], "")
test("least_common_multiple", [[17, 15, 23]], 5865)
test("tree_traversal", [{
    root: {
      value: "root",
      left:  { value: "A", left: { value: "B" } },
      right: { value: "C", left: { value: "D" }, right: { value: "E" } }
    }
  }],
  ["root", "A", "B", "C", "D", "E"]
)
