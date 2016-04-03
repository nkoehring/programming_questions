function random_duplicates_generator(len) {

  var output = [],
      counter = 0,
      keep, // keep the current number?
      omit  // omit the next number?

  while(len-- > 0) {  // in case some jester sets len to 0

    keep = (Math.random() >= 0.5)
    omit = (Math.random() >= 0.5)

    if (!keep) {
      counter++
      if (omit) {
        counter++
      }
    }

    output.push(counter)

  }

  return output

}

module.exports = {
  random_duplicates: random_duplicates_generator
}
