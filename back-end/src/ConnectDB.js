const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://gp:gpgpgp@cluster0.c95b5.mongodb.net/mixi?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});
