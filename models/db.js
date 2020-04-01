
const mongodb = require('mongodb');
const client = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'S11G2';
const options = { useUnifiedTopology: true };
const database = {

    // function to create a database
    createDatabase: function() {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            console.log('Database created!');
            db.close();
        });
    },

    // function to create collection `collection`
    createCollection: function(collection) {
        client.connect(url, options, function(err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.createCollection(collection, function (err, res) {
                if(err) throw err;
                console.log('Collection ' + collection + ' created');
                db.close();
            });
        });
    },

    // function to insert document `doc` to collection `collection`
    insertOne: function(collection, doc) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).insertOne(doc, function (err, res) {
                if(err) throw err;
                console.log('1 document inserted');
                db.close();
            });
        });
    },

    // function to insert array of documents `docs` to collection `collection`
    insertMany: function(collection, docs) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).insertMany(docs, function (err, res) {
                if(err) throw err;
                console.log('Documents inserted: ' + res.insertedCount);
                db.close();
            });
        });
    },

    // function to search for a single document in the collection `collection`
    // based on the contents of object `query`
    // callback function is called when the database has finished the execution of findOne() function
    findOne: function(collection, query, callback) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).findOne(query, function (err, result) {
                if(err) throw err;
                db.close();
                return callback(result);
            });
        });
    },

    // function to search for multiple documents in the collection `collection`
    // based on the contents of object `query`
    // callback function is called when the database has finished the execution of findMany() function
    findMany: function(collection, query, sort=null, projection=null, callback) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).find(query, {projection: projection})
            .sort(sort).toArray(function (err, result) {
                if(err) throw err;
                db.close();
                return callback(result);
            });
        });
    },

    // function to delete a documents in the collection `collection`
    // based on the object `filter`
    deleteOne: function(collection, filter) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).deleteOne(filter, function (err, res) {
                if(err) throw err;
                console.log('1 document deleted');
                db.close();
            });
        });
    },

    // function to delete multiple documents in the collection `collection`
    // based on the object `filter`
    deleteMany: function(collection, filter) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).deleteMany(filter, function(err, res) {
                if(err) throw err;
                console.log('Documents deleted: ' + res.deletedCount);
                db.close();
            });
        });
    },

    // function to drop the collection `collection`
    dropCollection: function(collection) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).drop(function (err, res) {
                if(err) throw err;
                console.log('Collection ' + collection + ' deleted');
                db.close();
            });
        });
    },

    // function to update the value defined in the object `update`
    // on a single document in the collection `collection`
    // based on the object `filter`
    updateOne: function(collection, filter, update) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).updateOne(filter, update, function (err, res) {
                if(err) throw err;
                console.log('1 document updated');
                db.close();
            });
        });
    },

    // function to update the value defined in the object `update`
    // on multiple documents in the collection `collection`
    // based on the object `filter`
    updateMany: function(collection, filter, update) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).updateMany(filter, update, function (err, res) {
                if(err) throw err;
                console.log('Documents updated: ' + res.modifiedCount);
                db.close();
            });
        });
    }
}

module.exports = database;
