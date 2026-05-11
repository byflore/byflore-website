const https = require(‘https’);

exports.handler = async function(event, context) {
const AIRTABLE_TOKEN = “pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa”;
const AIRTABLE_BASE  = “apphfGx38pLpWBELJ”;
const AIRTABLE_TABLE = “tblpYsn8L3dLZ7Ete”;

return new Promise((resolve) => {
const options = {
hostname: ‘api.airtable.com’,
path: `/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
method: ‘GET’,
headers: {
‘Authorization’: `Bearer ${AIRTABLE_TOKEN}`,
‘Content-Type’: ‘application/json’
}
};

```
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    resolve({
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    });
  });
});

req.on('error', (e) => {
  resolve({
    statusCode: 500,
    body: JSON.stringify({ error: e.message })
  });
});

req.end();
```

});
};
