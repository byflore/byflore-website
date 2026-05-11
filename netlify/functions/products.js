var https = require(“https”);

exports.handler = function(event, context, callback) {
var options = {
hostname: “api.airtable.com”,
path: “/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete”,
method: “GET”,
headers: {
Authorization: “Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa”
}
};

var body = “”;

https.request(options, function(res) {
res.on(“data”, function(c) { body += c; });
res.on(“end”, function() {
try {
var data = JSON.parse(body);
var records = (data.records || []).map(function(r) {
var f = r.fields;

```
      // Extract description - handle both plain string and Airtable AI object
      var desc = "";
      if (typeof f.description === "string") {
        desc = f.description;
      } else if (f.description && f.description.value) {
        desc = f.description.value;
      }

      // Extract image URL
      var imageUrl = null;
      if (f.image && f.image.length > 0) {
        imageUrl = f.image[0].url;
      }

      return {
        id: r.id,
        name: f.name || "",
        nameEn: f.nameEn || "",
        price: f.price || "",
        oldPrice: f.oldPrice || null,
        category: (f.category || "fresh").toLowerCase(),
        description: desc.replace(/\n/g, " ").trim(),
        tag: f.tag || null,
        imageUrl: imageUrl
      };
    });

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ products: records })
    });
  } catch(e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    });
  }
});
```

}).on(“error”, function(e) {
callback(null, { statusCode: 500, body: JSON.stringify({ error: e.message }) });
}).end();
};