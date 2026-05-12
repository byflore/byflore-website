var https = require("https");

exports.handler = function(event, context, callback) {

  var options = {
    hostname: "api.airtable.com",
    path: "/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      "Content-Type": "application/json"
    }
  };

  var body = "";

  var req = https.request(options, function(res) {

    res.on("data", function(chunk) {
      body += chunk;
    });

    res.on("end", function() {

      callback(null, {
        statusCode: res.statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: body
      });

    });

  });

  req.on("error", function(err) {

    callback(null, {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: err.message
      })
    });

  });

  req.end();

};
