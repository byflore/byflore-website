const https = require("https");
exports.handler = async () => {
  const data = await new Promise((resolve, reject) => {
    let body = "";
    https.get({
      hostname: "api.airtable.com",
      path: "/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",
      headers: { "Authorization": "Bearer pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa" }
    }, r => {
      r.on("data", d => body += d);
      r.on("end", () => resolve(body));
    }).on("error", reject);
  });
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: data
  };
};

