const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const notesRouter =require('./Notes/notesRouter')
const Note = require('./Notes/notes')



const server = express();
server.use(cors());
server.use(express.json());
server.use('/notes', notesRouter)

mongoose
.connect('mongodb://JacobLeonLyerla:server1122@ds237770.mlab.com:37770/jlldb')
mongoose.connection.once('open',()=>{
    console.log('connected to db')
})
.catch(err=>{
    console.log('Could not connect to mongodb',err)
})

// mongoose
//   .connect('mongodb://localhost/notesdb')
//   .then(mongo => {
//     console.log('connected to database');
//   })
//   .catch(err => {
//     console.log('Error connecting to database', err);
//   });




server.get('/', (req, res) => {
  res.status(200).json({ api: `api running on port ${port}` });
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));