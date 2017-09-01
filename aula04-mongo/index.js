var mongoc = require('mongodb').MongoClient;

var url  = 'mongodb://localhost:27017/local'

mongoc.connect(url,(err,db)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('MongoDB conectado')

})