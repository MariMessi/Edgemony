const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://marimessi:Ab210395@cluster0.y7pmhqk.mongodb.net/libri?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (!err) {
        console.log('MongoDB connesso.')
    }
    else {
        console.log(`Problemi con la connessione:  ${err}`)
    }
});


require('./nota');
require('./libro')