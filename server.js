
var app = require('./config/config-custom')();

var porta = process.env.PORT || 3000;

app.listen(porta, function(){
    console.log('Example app listening on port ' + porta);
})
