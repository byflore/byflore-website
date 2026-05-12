var h=require("https"),t="pate5XEuSM0tLC1vz.d80f1e0ea490adce86e675f8ae6c272b052b9ca320b060022343878da98eaefa";
exports.handler=function(q,c,done){
var b="";
h.request({hostname:"api.airtable.com",path:"/v0/apphfGx38pLpWBELJ/tblpYsn8L3dLZ7Ete",headers:{Authorization:"Bearer "+t}},function(r){
r.on("data",function(d){b+=d;});
r.on("end",function(){
done(null,{statusCode:200,headers:{"Access-Control-Allow-Origin":"*"},body:b});
});
}).on("error",function(e){done(null,{statusCode:500,body:e.message});}).end();
};