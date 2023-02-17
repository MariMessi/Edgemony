const express = require('express');
let router = express.Router();
const Book = require('../models/libro')

const mongoose = require('mongoose');
const Nota = mongoose.model('notaModel');


router.get('/', (req, res) => {
    res.render("addupdate", {
        viewTitle: "Inserisci una nota"
    });
});

/** Richiamo con il metodo post una funzione
 * di salvataggio (CREATE) oppure di modifica (UPDATE)
*/
router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});



function insertRecord(req, res) {
    //creo un collegamento con lo schema di mongoose
    let nota = new Nota();
    nota.name = req.body.name;
    console.log(req.body.name)
    nota.surname = req.body.surname;
    nota.email = req.body.email;
    nota.mobile = req.body.mobile;
    nota.address = req.body.address;
    nota.text = req.body.text;
    nota.age = req.body.age
    console.log(req.body.age)
    //salvo i dati dall'oggetto nota
    nota.save((err, doc) => {
        if (!err)
            res.redirect('list');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('list'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Nota.find((err, docs) => {
        if (!err) {
            res.render("list", {
                notalist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

//metodo get che imposta il bottone per modificare e in base
//all'id trasferisce i dati al form predestinato
router.get('/:id', (req, res) => {
    Nota.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addupdate", {
                viewTitle: "Aggiornamento",
                nota: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Nota.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});





router.get('/books', async(req, res) => {
    try{
        const Book = await Book.find()
        res.json(book)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/books/:id', (req, res) => {

        res.json(res.libro)
})


router.post('/books', async(req, res) => {
    const libro = new Book({
        title: req.body.title,
        author: req.body.author
})
    try{
        const newBook = await libro.save()
        res.status(201).json(newBook)
    }catch(err){
       res.status(400).json({message: err.message})
    }
})


async function getBook(req, res, next) {
    let libro
    try{
        libro = await Book.findById(req.params.id)
        if(libro == null){
            returnres.status(404).json({message: "Libro inesistente"})
        }
    }catch(err){
      return res.status(500).json({message: err.message})
    }
    res.libro = libro
    next()
}


router.put('books/:id', getBook, async(req, res) => {
    if(req.body.title != null){
        res.libro.title = req.body.title
    }
    if(req.body.author != null){
        res.libro.author = req.body.author
    }
    try{
        const bookUpdate = await res.libro.save()
        res.json(bookUpdate)
        }
        catch(err){
            return res.status(500).json({message: err.message})
    }
})




module.exports = router;