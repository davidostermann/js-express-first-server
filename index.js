var express = require('express');
var app = express();

const users = [
  {id: 0, firstName: 'Michel'},
  {id: 1, firstName: 'Osman'},
  {id: 2, firstName: 'Tandi'},
  {id: 3, firstName: 'Daniel'},
  {id: 4, firstName: 'Faustino'},
  {id: 5, firstName: 'Ijacques'}
]

app.listen(5000, function () {
  console.log('Example app listening on port 5000! : http://localhost:5000');
});
