
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-basics');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected!');

    // list all collections from db
    mongoose.connection.db.collections((err, collections) => {
        if (err) { console.error('error on showing collections', err); }
        if (collections.length != 0) {
            // drop collections
            collections.forEach(function(collection) {
                mongoose.connection.db.dropCollection(collection.s.name, (err, result) => {
                    if (err) console.error(err);
                    console.log(collection.s.name, "was dropped");
                });
            }, this);
        }        
    });

    // defining our schema
    var kittySchema = mongoose.Schema({
        name: String
    });

    // our kitty can meow, so we can add methods to the schema
    kittySchema.methods.speak = function () {
        var greeting = this.name 
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }

    // compiles schema into a model (Kitty)
    // a model is a class with which we construct documents
    var Kitten = mongoose.model('Kitten', kittySchema);

    // let's create a Kitten document
    var grandpa = new Kitten({ name: 'Grandpa' });
    grandpa.speak();

    var fluffy = new Kitten({ name: 'Fluffy' });
    fluffy.speak();

    // to save grandpa and fluffy to MongoDB
    grandpa.save((err, kitty) => {
        if (err) return console.error(err);
        kitty.speak();
    });

    fluffy.save((err, kitty) => {
        if (err) return console.error(err);
        kitty.speak();
    });

    // now to show all the kittens
    Kitten.find((err, kittens) => {
        if (err) return console.error(err);
        console.log(kittens);
    });

    // now to find a specific kitty
    Kitten.find({ name: new RegExp('fluffy', 'i') }, (err, fluffy) => {
        console.log(fluffy);
    })

})