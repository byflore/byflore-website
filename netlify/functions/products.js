var https = require("https");
exports.handler = function(event, context, callback) {
  var options = {
    hostname: "api.airtable.com",
    path: "/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",
    method: "GET",
    headers: {
      Authorization: "Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa"
    }
  };
  var body = "";
  https.request(options, function(res) {
    res.on("data", function(c) { body += c; });
    res.on("end", function() {
      callback(null, {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: body
      });
    });
  }).on("error", function(e) {
    callback(null, { statusCode: 500, body: e.message });
  }).end();
};
