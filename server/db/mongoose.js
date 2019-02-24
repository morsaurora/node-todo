var mongoose =  require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mors:Milan_99_Italy@ds349045.mlab.com:49045/mongo-todo' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};