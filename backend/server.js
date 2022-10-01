const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware');

connectDB();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

//serve frontend
if(process.env === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req,res) => 
        res.sendFile(
            path.resolve(
                '__dirname',
                'frontend',
                'build',
                'index.html'
            )
        )
    )
}else{
    app.get('/', (req,res) =>{
        res.send('Set to production')
    })
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

