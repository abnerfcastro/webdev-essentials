
var current_id = 4;

// Initial database entries
var database = [
    { "_id": 1, "name": "Wayne, Bruce", "email": "wayne@email.com", "phone": "+1-202-555-0163" },
    { "_id": 2, "name": "Parker, Peter", "email": "parker@email.com", "phone": "+1-202-555-0149" },
    { "_id": 3, "name": "Romanova, Natasha", "email": "romanova@email.com", "phone": "+1-202-555-0142" }
]

var find = function(id, callback) {
    var doc = database.find(contact => contact._id == id);
    var err = null;

    if (!doc) {
        err = "Value was not found in the database.";
    }

    callback(err, doc);
}

var insert = function(object, callback) {
    
    object._id = current_id;
    current_id++;

    var err;

    // Ensure that only objects with properties (name, email, phone) is inserted
    if (object.hasOwnProperty('name') && object.hasOwnProperty('email') && object.hasOwnProperty('phone')) {
        err = null;
        database.push(object);        
    }
    else
        err = "Object could not be inserted.";

    callback(err, object);
}

var remove = function(id, callback) {

    var doc = database.find(contact => contact._id == id);
    console.log(id);
    var index = database.indexOf(doc);
    var err;

    if (index > -1) {
        database.splice(index, 1);        
    }
    else {
        err = 'Object was not found in the database.';
        doc = null;        
    }

    callback(err, doc);
}

var update = function(object, callback) {    

    var err;

    for (var contact in database) {
        if (contact._id == object._id) {
            contact.name = object.name;
            contact.email = object.email;
            contact.phone = object.phone;
            callback(err, contact);
            return;
        }
    }

    var err = 'Object was not found in the database';
    callback(err, null);

}

module.exports = {
    values: database,
    find: find,
    insert: insert,
    remove: remove,
    update: update
} 