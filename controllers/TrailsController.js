const express = require(("express"));
const router = express.Router();


    router.get("/", async (req, res, next) => {

        try {
            const allTrail = await Trail.find();
            console.log(allTrail)

            res.json({
                status: 200,
                data: allTrail
            })
        }catch (err){
            res.send(err)
        }

    })

router.post("/", async (req, res) => {
    try{
        const createdTrail = await Trail.create(req.body);

        res.json({
            status: 200,
            data: createdTrail
        })
    }catch(err){
        res.send(err);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const foundTrail = await Trail.findById(req.params.id);
        res.json({
            status: 200,
            data: foundTrail
        })
    }catch (err){
        res.send(err)
    }
});

router.put("/:id", async(req, res) => {
    try {
        const updateTrail = await Trail.findByIdAndUpdate(req.params.id, req.body,{new: true} )
        res.json({
            status: 200,
            data: updateTrail
        });
    }catch(err) {
        res.send(err)
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedTrails = await Trail.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedTrails
        })
    }catch (err) {
        res.send(err)
    }
})

module.exports = router;