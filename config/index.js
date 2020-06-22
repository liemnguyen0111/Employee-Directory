  
module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/eddb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})