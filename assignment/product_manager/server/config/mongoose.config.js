//connect to mongodb using mongoose 
const mongoose = require('mongoose');
const db_name = "march-db-cluster";

mongoose.connect(`mongodb+srv://root:root@${db_name}.h81fq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
