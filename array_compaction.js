module.exports = (function(){

  // thank you Javascript. Array compaction should be relatively cheap, because
  // array keys are actually object keys.
  // http://stackoverflow.com/questions/11514308/big-o-of-javascript-arrays#11535121
  function array_compaction(inputArray) {

    var i = 0,
        value

    do {

      value = inputArray[i]

      // current value equals the one before?
      if (value === inputArray[i-1]) {
        inputArray.splice(i, 1)
      } else {
        i++
      }

    } while (value !== undefined)

  }


  /* Manual testing:
     ==============
   
  random_duplicates_generator = require("./tools").random_duplicates_generator
  
  var testArrays = [
        random_duplicates_generator(5),
        random_duplicates_generator(15),
        random_duplicates_generator(25),
        [1,3,7,7,8,9,9,9,10]
      ]


  testArrays.forEach(function(arr) {
    console.log("original:   ", arr)
    array_compaction(arr)
    console.log("transformed:", arr)
  })
  */

  return array_compaction

})()
