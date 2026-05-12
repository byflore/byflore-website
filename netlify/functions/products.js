var https = require("https");
exports.handler = function(a, b, cb) {
  var body = "";
  var req = https.request({
    hostname: "api.airtable.com",
    path: "/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",
    headers: {
      Authorization: "Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa"
    }
  }, function(res) {
    res.on("data", function(chunk) {
      body = body + chunk;
    });
    res.on("end", function() {
      cb(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: body
      });
    });
  });
  req.on("error", function(e) {
    cb(null, {
      statusCode: 500,
      body: e.message
    });
  });
  req.end();
};


