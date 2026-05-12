var https = require("https");
exports.handler = function(e, c, cb) {
  var b = "";
  https.request({
    hostname: "api.airtable.com",
    path: "/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",
    headers: { Authorization: "Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa" }
  }, function(r) {
    r.on("data", function(d) { b += d; });
    r.on("end", function() {
      var j = JSON.parse(b);
      var out = (j.records || []).map(function(rec) {
        var f = rec.fields;
        var imgs = f.image ? f.image.map(function(​​​​​​​​​​​​​​​​
