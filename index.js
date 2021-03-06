var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

require('./server/router')(app);
require('./server/express')(app);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


