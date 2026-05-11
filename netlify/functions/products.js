const https = require(“https”);

exports.handler = function(event, context, callback) {
const token = “pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa”;
const base = “apphfGx38pLpWBELJ”;
const table = “tblpYsn8L3dLZ7Ete”;

const options = {
hostname: “api.airtable.com”,
path: “/v0/” + base + “/” + table,
method: “GET”,
headers: {
“Authorization”: “Bearer “ + token
}
};

var body = “”;

https.request(options, function(res) {
res.on(“data”, function(chunk) {
body += chunk;
});
res.on(“end”, function() {
callback(null, {
statusCode: 200,
headers: {
“Access-Control-Allow-Origin”: “*”,
“Content-Type”: “application/json”
},
body: body
});
});
}).on(“error”, function(err) {
callback(null, {
statusCode: 500,
body: JSON.stringify({ error: err.message })
});
}).end();
};
