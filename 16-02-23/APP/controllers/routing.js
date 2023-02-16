// const express = require('express');
// let router = express.Router();
// const mongoose = require('mongoose');
// const Dati = mongoose.model('datiModel');

// router.get('/items', (req, res) => {
//     res.render('addDati', {
//         viewTitle: 'inserisci un item'
//     });
// });


// router.post('/items', (req, res) => {
//     if(req.body._id == '')
//     insertRecord(req, res);
//     else
//     updateRecord(req, res);
// });

// function insertRecord(req, res) {
//     let Dati = new Dati();
//     Dati.item = req.body.item;
//     Dati.description = req.body.description;
//     Dati.brand = req.body.brand;
//     Dati.price = req.body.price;
//     Dati.stock = req.body.stock;
//     Dati.save((err, doc) => {
//         if(!err)
//         res.redirect('datiList')
//         else
//         console.log(`errore di inserimento ${err}`)
//     })
// };

// function updateRecord(req, res) {
//     Dati.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
//         if (!err) { res.redirect('datiList'); }
//             else {
//                 console.log('Errore durante l\' update : ' + err);
//         }
//     });
// }

// router.get('/items/list', (req, res) => {
//     Dati.find((err, docs) => {
//         if (!err) {
//             res.render("datiList", {
//                 datilist: docs
//             });
//         }
//         else {
//             console.log(`Errore ${err}`);
//         }
//     });
// });


// router.get('/items/:id', (req, res) => {
//     Dati.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.render("addDati", {
//                 viewTitle: "Aggiornami",
//                 dati: doc
//             });
//         }
//     });
// });

// router.get('items/delete/:id', (req, res) => {
//     Dati.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) {
//             res.redirect('/datiList');
//         }
//         else {
//             console.log(`Errore ${err}`);
//         }
//     });
// });