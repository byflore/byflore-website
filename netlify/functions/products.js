var https = require(“https”);

exports.handler = function(e, c, cb) {
var b = “”;
https.request({
hostname: “api.airtable.com”,
path: “/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete”,
headers: { Authorization: “Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa” }
}, function(r) {
r.on(“data”, function(d) { b += d; });
r.on(“end”, function() {
var j = JSON.parse(b);
var out = (j.records || []).map(function(r) {
var f = r.fields;
var imgs = f.image ? f.image.map(function(i){ return i.url; }) : [];
var desc = typeof f.description === “string” ? f.description : (f.description && f.description.value ? f.description.value : “”);
var colors = f.colors ? f.colors.split(”,”).map(function(c){ return c.trim(); }) : [];
return {
id: r.id,
name: f.name || “”,
nameEn: f.nameEn || “”,
price: f.price || “”,
oldPrice: f.oldPrice || null,
category: (f.category || “fresh”).toLowerCase(),
description: desc.replace(/\n/g, “ “).trim(),
tag: f.tag || null,
imageUrl: imgs[0] || null,
images: imgs,
colors: colors
};
});
cb(null, {
statusCode: 200,
headers: { “Access-Control-Allow-Origin”: “*”, “Content-Type”: “application/json” },
body: JSON.stringify({ products: out })
});
});
}).on(“error”, function(err) { cb(null, { statusCode: 500, body: err.message }); }).end();
};