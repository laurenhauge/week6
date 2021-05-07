// defines a lambda function
exports.handler = async function(event) {

  // an Array of to-dos
  let todos = [`change baby Shi's diaper`, `walk the dogs`, `sleep`
  ]

  // write the Array of to-dos to the *back-end* console
  

  // turn the Array into a String
  let todosAsString = JSON.stringify(todos)
  

  // write the "stringified" Array to the *back-end* console
  console.log(todosAsString)

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: todosAsString // a string of data
  }
}