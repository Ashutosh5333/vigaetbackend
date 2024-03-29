const app = require('./app')
const dotenv = require('dotenv');
dotenv.config({path:'config/config.env'})

const Coonectdatabase = require('./config/db.connect')

 const port = process.env.PORT || 8080;

 process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

const server = app.listen(port,async () =>{
   await Coonectdatabase();
   console.log(`Server Runing on port ${port}`)

})


process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhabled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});