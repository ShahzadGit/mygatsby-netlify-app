var random = require('random-name');

exports.handler = async (event, context) => {
  try {
    console.log(random());
    let name = random.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${name}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}




// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
/* const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'EveryOne'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello Once Again ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

*/