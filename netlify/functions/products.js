// netlify/functions/products.js
// 把这个文件放在你的 GitHub repository 里的 netlify/functions/ 文件夹

exports.handler = async function(event, context) {
const AIRTABLE_TOKEN = “pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa”;
const AIRTABLE_BASE  = “apphfGx38pLpWBELJ”;
const AIRTABLE_TABLE = “tblpYsn8L3dLZ7Ete”;

try {
const response = await fetch(
`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
{ headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` } }
);
const data = await response.json();

```
return {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
};
```

} catch(e) {
return {
statusCode: 500,
body: JSON.stringify({ error: e.message })
};
}
};
