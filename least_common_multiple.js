module.exports = (function() {

  function lcm(x,y) {

    var m1 = x,
        m2 = y

    while (m1 !== m2) {

      // oh wow, quick idea and it actually works like a charm!
      if (m1 < m2) m1 += x
      if (m2 < m1) m2 += y

    }

    return m1

  }

  // good news: least common multiples are associative
  // that means lcm( lcm(x,y), z ) == lcm( x, lcm(y,z) ) == lcm(x,y,z)
  function lcm_list(arr) {

    var lastLcm = lcm( arr.pop(), arr.pop() )

    while (arr.length)
      lastLcm = lcm( lastLcm, arr.pop() )

    return lastLcm

  }

  /* Manual testing:
     ==============
   
  console.log("50400 =", lcm_list([144, 160, 175]))
  console.log(" 5865 =", lcm_list([17, 15, 23]))
  */

  return lcm_list

})()
