var mongoose =  require('mongoose');

mongoose.Promise = global.Promise;

var conn_str = undefined;

if(process.env.prod) {
    conn_str = 'mongodb://mors:Milan_99_Italy@ds349045.mlab.com:49045/mongo-todo';
}
else {
    conn_str = 'mongodb://localhost:27017/TodoApp';
}
mongoose.connect(conn_str);

module.exports = {mongoose};