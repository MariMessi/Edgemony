const MongoClient = require('mongodb').MongoClient
let url = 'mongodb+srv://<account>:<password>@cluster0.y7pmhqk.mongodb.net/school?retryWrites=true'

//connetto il database
MongoClient.connect(url)
.then((db) => {
    accountDb = db
    collection = accountDb.db('mongo')
    console.log('Database connesso')
})
.catch((err) => {
    console.log('err')
})



//creo la collezione students
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err
//     let dbase = db.db('school')
//     dbase.createCollection("students", function(err, res) {
//         if (err) throw err
//         console.log("Collection creata")
//         db.close()
//     })
// })


//inserisco i dati
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('students').insertOne({"nome": "Henna ", "cognome": "But", "matricola": "67446", "corsi": "lingua francese, lingua inglese, letteratura italiana, linguistica generale","esami da sostenere": "linguistica generale" }, (err, res) => {
//         if(err) throw err 
//         console.log(`Record inseriti`)
//         db.close()
//     })
// })


// MongoClient.connect(url , (err, db) =>{
//     if (err) throw err;
//     let dbase = db.db("school")

//     let myObj = [
//         {
//             nome: "Hedda ",
//             cognome: "Butler",
//             matricola: "67896", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere: "linguistica generale"
    
//         },
//         {
//             nome: "Gail",
//             cognome: "Cardenas",
//             matricola: "24323", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             nome: "Suki",
//             cognome: "Solomon",
//             matricola: "46504", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
    
//         },
//         {
//             nome: "Christen",
//             cognome: "Sanchez",
//             matricola: "53236", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Nora",
//             cognome: "Henson",
//             matricola: "83000", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere: "linguistica generale"
//         },
//         {
//             nome: "Rogan",
//             cognome: "Perez",
//             matricola: "99260", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             nome: "Vanna",
//             cognome: "Carlson",
//             matricola: "93606", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
//         },
//         {
//             nome: "Reed",
//             cognome: "Wolf",
//             matricola: "39553", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Brock",
//             cognome: "Harris",
//             matricola: "96041", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere: "linguistica generale"
//         },
//         {
//             nome: "Norman",
//             cognome: "Kline",
//             matricola: "41975", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             name: "Clarke",
//             cognome: "Mckenzie",
//             matricola: "26604", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
//         },
//         {
//             nome: "Hunter",
//             cognome: "Craig",
//             matricola: "27954", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Lee",
//             cognome: "Moran",
//             matricola: "48473", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere:"linguistica generale"
//         },
//         {
//             nome: "Brett",
//             cognome: "Cannon",
//             matricola: "13288", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             nome: "Graham",
//             cognome: "Holder",
//             matricola: "26677", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
//         },
//         {
//             nome: "Kenyon",
//             cognome: "Morton",
//             matricola: "34129", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Reed",
//             cognome: "Clarke",
//             matricola: "76038", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere: "linguistica generale"
//         },
//         {
//             nome: "Dale",
//             cognome: "Thornton",
//             matricola: "98444", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             nome: "Denton",
//             cognome: "Solomon",
//             matricola: "79679", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
//         },
//         {
//             nome: "Nathan",
//             cognome: "Duffy",
//             matricola: "29889", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Channing",
//             cognome: "Riddle",
//             matricola: "36725", 
//             corsi: "lingua francese, lingua inglese, letteratura italiana, linguistica generale",
//             esami_da_sostenere: "linguistica generale"
//         },
//         {
//             nome: "Kennan",
//             cognome: "Schmidt",
//             matricola: "66603", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         },
//         {
//             nome: "Daquan",
//             cognome: "Horn",
//             matricola: "37236", 
//             corsi: "filologia romanza, filologia germanica, letteratura inglese",
//             esami_da_sostenere: "filologia germanica"
//         },
//         {
//             nome: "Lani",
//             cognome: "Pickett",
//             matricola: "10262", 
//             corsi: "storia contemporanea, geografia, laboratorio di informatica",
//             esami_da_sostenere: "laboratorio di informatica"
//         },
//         {
//             nome: "Hyatt",
//             cognome: "Espinoza",
//             matricola: "76588", 
//             corsi: "numismatica medievale, storia della cultura francese",
//             esami_da_sostenere: "numismatica medievale"
//         }
//     ]

//     dbase.collection('students').insertMany(myObj, (err, res) =>{

//         if (err) throw err
//         console.log(`Numero di record inseriti: ${res.insertedCount}`)
//         db.close()
//     })
// })


//seleziono un dato
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('students').findOne({}, (err, res) => {
//         if(err) throw err 
//         console.log(res.nome)
//         db.close()
//     })
// })

//seleziono tutti i dati 
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('students').find({}).toArray(function (err, res) {
//         if(err) throw err 
//         console.log(res)
//         db.close()
//     })
// })

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err
//     let dbase = db.db("school")
//     let query = {esami_da_sostenere: "laboratorio di informatica"}
//     dbase.collection('students').find(query).toArray(function (err, res) {
//         if (err) throw err;
//         console.log(res)
//         db.close();
//     })
// })

//modifico un dato
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err
//     let dbase = db.db("school")

//     let query = {nome: "Gail"}
//     let newValue = {$set: {matricola: 06060}}
//     dbase.collection('students').updateOne(query, newValue ,function(err, res) {
//         if (err) throw err
//         console.log(`record(s) aggiornati` )
//         db.close()
//     })
// })


//Elimino un elemento 
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school")

//     let query = {esami_da_sostenere: "linguistica generale"}
//     dbase.collection('students').deleteMany(query, function(err, obj) {
//         if (err) throw err;
//         console.log(`${obj.result} records cancellati` )
//         db.close();
//     })
// })

//creo la collezione courses
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err
//     let dbase = db.db('school')
//     dbase.createCollection('courses', (err, res) => {
//         if(err) throw err
//         console.log('collezione courses creata')
//         db.close()
//     })
// })


//inserisco i dati
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('courses').insertOne({nome_del_corso:"Numismatica medievale", materia : "Numismatica" , docente : "Gisela Chang"}, (err, res) => {
//         if(err) throw err 
//         console.log(`Record inseriti`)
//         db.close()
//     })
// })

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('courses').insertOne({nome_del_corso: "Linguistica Generale", materia : "Linguistica", docente : "Martin Rocha"}, (err, res) => {
//         if(err) throw err 
//         console.log(`Record inseriti`)
//         db.close()
//     })
// })


// MongoClient.connect(url , (err, db) =>{
//     if (err) throw err;
//     let dbase = db.db("school")

//     let myObj = [{
//             nome_del_corso: "letteratura Inglese",
//             materia : "Inglese", 
//             docente : "Iris Ramirez"
//          }, 
//          {
//             nome_del_corso: "Filologia Romanza",
//             materia : "Filologia", 
//             docente : "Suki Harrington"
//          }, 
//          {
//             nome_del_corso: "Storia della cultura francese" ,
//             materia : "Francese", 
//             docente : "Keegan Hickman"
//          }, 
//          {
//             nome_del_corso: "Storia Contemporanea",
//             materia : "Storia" , 
//             docente : "Piper Burris"
//          }, 
//          {       
//             nome_del_corso: "Laboratorio di informatica",
//             materia : "Informatica", 
//             docente : "Cruz Deleon"
//         }, 
//          {
//             nome_del_corso: "Filologia Germanica",
//             materia : "Filologia", 
//             docente : "Ray Chang"
//          }, 
//          {
//             nome_del_corso: "Lingua inglese",
//             materia : "Inglese", 
//             docente : "Baker Gregory"
//          },
//          {
//             nome_del_corso: "Letteratura Italiana",
//             materia : "Italiano", 
//             docente : "Aimee Greer"
//          }, 
//          {
//             nome_del_corso: "Lingua Francese",
//             materia : "Francese", 
//             docente : "Judah Huff"
//          }, 
//          {
//             nome_del_corso: "Geografia",
//             materia : "Geografia", 
//             docente : "Linda Michael"
//          }]
 

//     dbase.collection('courses').insertMany(myObj, (err, res) =>{

//         if (err) throw err
//         console.log(`Numero di record inseriti: ${res.insertedCount}`)
//         db.close()
//     })
// })


//seleziono un dato
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('courses').findOne({}, (err, res) => {
//         if(err) throw err 
//         console.log(res.docente)
//         db.close()
//     })
// })

// seleziono tutti i dati 
// MongoClient.connect(url, (err, db) => {
//     if(err) throw err 
//     let dbase = db.db('school')

//     dbase.collection('courses').find({}).toArray(function (err, res) {
//         if(err) throw err 
//         console.log(res)
//         db.close()
//     })
// })

//seleziono solo una materia

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err
//     let dbase = db.db("school")
//     let query = {materia : "Inglese"}
//     dbase.collection('courses').find(query).toArray(function (err, res) {
//         if (err) throw err;
//         console.log(res)
//         db.close();
//     })
// })

//modifico un dato
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err
//     let dbase = db.db("school")

//     let query = {docente : "Suki Harrington"}
//     let newValue = {$set: {materia : "Italiano"}}
//     dbase.collection('courses').updateOne(query, newValue ,function(err, res) {
//         if (err) throw err
//         console.log(`record(s) aggiornati` )
//         db.close()
//     })
// })


//Elimino un elemento 
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school")

//     let query = {nome_del_corso: "Filologia Germanica"}
//     dbase.collection('courses').deleteMany(query, function(err, obj) {
//         if (err) throw err;
//         console.log(`${obj.result} records cancellati` )
//         db.close();
//     })
// })


