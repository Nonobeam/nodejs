const express = require('express');
const path = require('path')
const morgan = require('morgan');
// const pug = require('pug')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));//see the response of website 

//Template egine
// var html = pug.renderFile('index.html', merge(options, locals));

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

// app.get('/', (req, res) =>{
//   res.send('Firstpage')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});