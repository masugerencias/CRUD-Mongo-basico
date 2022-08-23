
    const mongo = require('mongodb');
    const MongoClient = mongo.MongoClient;

    const mydb = "Empresa";
    const coleccion = "Clientes";

    const url = "mongodb://localhost:27017/";

    const myobj = { "nombre": "Juan", "direccion": "C/Sol 2" };



/* 
    
    //Creacion de una BD 
    MongoClient.connect(url+mydb, function(err, db) {//tiene un metodoque se llama conect. Abre una conexxion con mongo y en concreto con su base de datos: el puerto + bbdd. 
        if (err) throw err; //if si no existe, lo crea. Si existe, la usa. si no existe, crea la bd que es empresa en este caso. Si err vale NULL es que no hay error. Cuando lanza el error no sigue el programa, si no hay error:bd creada y cierra bd.
        console.log("Base de datos creada");//desde el if hasta  close es una funcion de callback.
        db.close();//al terminar debo cerrarla, porque sino el otro no puede ver cambios...
        });//al terminar cualquier operacion hay que cerrar la conexion.
    
        //Creacion de una coleccion dentro de una BD: lo mismo que arriba pero mas ampliado.
        MongoClient.connect(url, function(err, db) { 
        if (err) throw err;
        var dbo = db.db(mydb);//esto es para puf no lo he pillado
        dbo.createCollection(coleccion, function(err, res) { //dentro de DBO creo una bariable qe se llame?
            if (err) throw err;
            console.log("Colección creada");
            db.close(); //dbes la conexion avierta.
        });
        });
     */





/* 
    //Insertar dentro de una coleccion de una BD
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        
        dbo.collection(coleccion).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Documento insertado");
            db.close();
        });
        });
     */
/* 
BUSQUEDAS
         //Obtener datos del primer elemento dentro de una coleccion
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).findOne({}, function(err, result) { //aqui solo se busca uno
            if (err) throw err;
            console.log(result.nombre);
            db.close();
        });
        });  */


 /*         //Ver todos 
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result[1].nombre); //esto devuelve un ARRAY por la linea anterior.
            db.close();
        });
        });
 */


  /*        //Query simple  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { "direccion": "C/Alcalá 1" }; //esto seria lo que antes tenemos en filter. Pero en una variable.
        dbo.collection(coleccion).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    }); */


/*     //Sort por un criterio (campo)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var mysort = { "nombre": 1 }; //esto es un criterio de ordenacion por NOMBRE
        dbo.collection(coleccion).find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    }); 
 */
/* 
       //Busquedas paginadas
       MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    });
 */

    /*     //Borrar   un doc de una coleccion
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { "direccion": 'C/Alcalá 1' };
            dbo.collection(coleccion).deleteOne(myquery, function(err, obj) { //delete one 
            if (err) throw err;
            console.log("Documento borrado");
            db.close();
            });
        }); */



  /*          //Borrar coleccion
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) console.log("Coleccion borrada");
            db.close();
        });
      }); */



      
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var myquery = { "direccion": "C/Alcalá 3" };
        var newvalues = { $set: {"nombre": "Pedro SL", "direccion": "C/Serrano" } };//$set es para que entienda que tiene que añadir o spbreeescribir ES OBLIGATORIO..
        dbo.collection(coleccion).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("Documento actualizado");
        db.close();
        });
    });
