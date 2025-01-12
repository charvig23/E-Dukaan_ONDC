const app = require('./app');
const {connectDatabase} = require('./database');

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});