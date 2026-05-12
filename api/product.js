var https = require(“https”);
module.exports = function(req, res) {
var body = “”;
var request = https.request({
hostname: “api.airtable.com”,
path: “/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete”,
headers: {
Authorization: “Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa”
}
}, function(response) {
response.on(“data”, function(chunk) {
body = body + chunk;
});
response.on(“end”, function() {
res.setHeader(“Access-Control-Allow-Origin”, “*”);
res.setHeader(“Content-Type”, “application/json”);
res.status(200).send(body);
});
});
request.on(“error”, function(e) {
res.status(500).send(e.message);
});
request.end();
};
