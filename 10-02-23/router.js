const express= require ('express')
const router = express.Router()
router.use(express.static('./views'))

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.get('/views/about.hbs', (req, res) =>{
    res.send('about')
})

module.exports = router