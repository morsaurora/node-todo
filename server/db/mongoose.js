var mongoose =  require('mongoose');

mongoose.Promise = global.Promise;

var conn_str = undefined;

if(process.env.prod) {
    console.log('connected to heroku');
    conn_str = 'mongodb://mors:Milan_99_Italy@ds349045.mlab.com:49045/mongo-todo';
}
else {
    console.log('connected to localhost');
    conn_str = 'mongodb://localhost:27017/TodoApp';
}
mongoose.connect(conn_str);

module.exports = {mongoose};