var mongoc = require('mongodb').MongoClient;

var url  = 'mongodb://localhost:27017/local'

mongoc.connect(url,(err,db)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('MongoDB conectado')
    inserir(db,(result)=>{ console.log(result) })
})


var inserir = (db,callback)=>{
    db.collection('teste').insertMany([
        {nome:'ana'},
        {nome:'pedro'},
        {nome:'jonsnow'},
    ],(err,result)=>{
        if(err){
            console.log(err)         
        }   
        callback(result)
    })
}