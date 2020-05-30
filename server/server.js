const path = require('path');
const express = require('express');
const app = express();

app.use(express.json({extended: false}));
app.use('/',express.static(path.resolve(__dirname + '../dist')));

// comment this out 
app.get('/index_bundle.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '../dist/index_bundle.js'));
});
// comment this out 
app.get('/', (req, res) => {
    console.log('Get request to get the index.html')
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });

  // comment this out 
// app.get('/dist/main.css', (req,res)=>{
//     res.sendFile(path.join(__dirname, '../dist/main.css'));
// });


//define routes

// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;

console.log(`Currently running in ${process.env.NODE_ENV} mode`);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));