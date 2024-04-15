const router = require('express').Router()
const house= require('../models/houseModel')
const cors = require('cors')

// router.get('/', (req, res) => {
//     res.send("Hello")
// })
router.use(cors())

router.post('/api/getHome', async(req, res) => {
    const { address } =req.body;
    try{
        const homeFound = await house.find({
            address: { $regex: address, $options: 'i' }
        })
        // console.log(homeFound)
        // console.log('/api/getHome Called')
        res.status(200).json(homeFound)
    }
    catch(err) {
        console.log(err)
        res.status(404).json({msg:"no rooms available at this location"})
    }
})

router.get('/api/getAllHomes', async(req, res) => {
    // const { address } =req.body;
    try{
        const homeFound = await house.find()
        // console.log('/api/getAllHomes Called')
        res.status(200).json(homeFound)
    }
    catch(err) {
        // console.log(err)
        res.status(404).json({msg:"no rooms available at this location"})
    }
})


router.post('/api/addHome', async (req, res) => {
    const {address, bedrooms, bathrooms, squareFeet, occupants, rent} = req.body;
    try {
        const addedHouse = await house.create({
            address, bedrooms, bathrooms, squareFeet, occupants, rent
        })
        // console.log(addedHouse)
        res.status(200).json({msg:"House Added Successfully ..."})
    } catch (error) {
        // console.log(error)
        res.status(500).json({err: error})
    }
})

module.exports = router