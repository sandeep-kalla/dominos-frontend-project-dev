import mongoose from "mongoose";

const url = 'mongodb+srv://root:root@cluster0.d2wlybb.mongodb.net/dominos';
const dbName = 'dominos';

mongoose.connect(url, {
  dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');

  // Define a Mongoose model for your collection
  const pizzaSchema = new mongoose.Schema({ /* your schema */ });
  const Pizza = mongoose.model('Pizza', pizzaSchema);

  Pizza.find().then(data => {
    console.log(data); 
  }).catch(err => {
    console.error(err);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});