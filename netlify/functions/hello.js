// defines a lambda function
exports.handler = async function(event) {

  let course = `KIEI 451`

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: `Hello ${course} from the back-end!` // a string of data
  }
}