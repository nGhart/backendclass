const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const URI =
  'mongodb+srv://naaghart:naaghart@farm.4efmnfn.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((error) => {
    console.log(error);
  });

//routes
app.use('/blog', blogRouter);

app.get('/', (req, res) => {
  res.send('Hello, World');
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
