
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');var Promise = require('promise');
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;

// Usamos el método connect para conectarnos a nuestra base de datos

mongoose.connect('mongodb+srv://ecleptos:ecleptoskamila@cluster0-aavfl.mongodb.net/test?retryWrites=true&w=majority')
 
.then(() => {
 
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
console.log('La conexión a MongoDB se ha realizado correctamente!!');
})
.catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    userName :String,
    password :String
});
var user = mongoose.model( 'User', userSchema);

var user = mongoose.model('User' ,userSchema);

var myUser =user ({
    userName : 'carlos',
    password : "gonzalez"
})

myUser.save((err) => {
    if (err) {
        console.log('algo salio mal' + err);
    } else {
        console.log('todo ok');
    }
});
