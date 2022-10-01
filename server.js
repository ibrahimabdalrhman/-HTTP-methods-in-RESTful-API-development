const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
// console.log(app.get('env'));

const port=process.env.port||3000
// start server
app.listen(3000, () => { console.log(`app running in port ${port} ...`) });