const app = require('./app')

//Server listening on Port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\nExpress departing now from port 3000!\n`))
