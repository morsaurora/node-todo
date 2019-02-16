const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c61168cb9159a44c7fa76eb')
    }, {
        $inc: {
            age: -1
        },
        $set: {
            name: 'Bipul'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
})