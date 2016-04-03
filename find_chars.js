module.exports = (function() {

  // O(N*M)
  function find_chars(s1, s2) {

    var result = ""

    for(var i = 0; i < s1.length; i++) {
      var c = s1[i]
      if (s2.indexOf(c) >= 0) result += c
    }

    return result
  }

  // O(N+M)
  function find_chars2(s1, s2) {

    var dict = {}
    var result = ""

    for(var i = 0; i < s2.length; i++) {
      var c = s2[i]
      dict[c] = 1
    }

    for(var i = 0; i < s1.length; i++) { 
      var c = s1[i]
      if (dict[c]) result += c
    }

    return result

  }

  /* Manual testing:
     ==============

  console.log("abc", find_chars("abcdef", "abc"))
  console.log("abc", find_chars("abc", "abcdef"))
  console.log("–", find_chars("abc", "def"))
  console.log("ux", find_chars("linux", "tux"))

  console.log("------------------------------")

  console.log("abc", find_chars2("abcdef", "abc"))
  console.log("abc", find_chars2("abc", "abcdef"))
  console.log("–", find_chars2("abc", "def"))
  console.log("ux", find_chars2("linux", "tux"))
 */

  return {
    exponential: find_chars,
    linear: find_chars2
  }

})()
