const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Smart-Shop')
.then(() => console.log('MongoDB connected '))
    .catch(err => console.error('Connection failed:', err));

const app = express();
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const generatedContentRoutes = require('./routes/generatedContentRoutes');
const creditTransactionRoutes = require('./routes/creditTransactionRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/api/content', generatedContentRoutes);
app.use('/transactions', creditTransactionRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Smart-Shop API is running ' });
});

app.listen(3000);
