//1. add morgan
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const vinylsController = require('./controllers/vinyls')
const app = express()
 
app.use(cors())
app.use(morgan('combined'))
//enable middleware for express to read for postman extended false means
app.use(express.urlencoded({extended: false}))

//3. POST / vinyls (moved to controller file )
//4. set up route (/vinyls)
app.use('/vinyls', vinylsController)

//2. set up server
app.listen('3000', () => {
    console.log('Server running on port 3000')
})
