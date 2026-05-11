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
      var out = (j.records || []).map(function(r) {
        var f = r.fields;
        var img = f.image && f.image[0] ? f.image[0].url : null;
        var desc = typeof f.description === "string" ? f.description : (f.description && f.description.value ? f.description.value : "");
        return { id: r.id, name: f.name || "", nameEn: f.nameEn || "", price: f.price || "", oldPrice: f.oldPrice || null, category: (f.category || "fresh").toLowerCase(), description: desc, tag: f.tag || null, imageUrl: img };
      });
      cb(null, { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ products: out }) });
    });
  }).on("error", function(err) { cb(null, { statusCode: 500, body: err.message }); }).end();
};
