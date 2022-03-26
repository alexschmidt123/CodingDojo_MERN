//connect to mongodb using mongoose 
const mongoose = require('mongoose');
const db_name = "ninjas_db_march";

mongoose.connect(`mongodb+srv://root:root@march-db-cluster.o94lh.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
