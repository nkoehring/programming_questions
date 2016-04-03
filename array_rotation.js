module.exports = (function(){

  // Assumption: do not modify original array
  function array_rotation(arr, n) {

    /**
     * explanation:
     *
     * arr.slice(-n) === arr[arr.length - n], ..., arr[arr.length - 1]
     * arr.slice(0, -n) === arr[0], ..., arr[arr.length - n - 1]
     */
    return (arr.slice(-n)).concat(arr.slice(0, -n))

  }

  //console.log(array_rotation([1,2,3,4,5,6], 2))

  return array_rotation

})()

