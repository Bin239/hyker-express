const express = require(("express"));
const router = express.Router();

const Comment = require ("../models/comment")

    router.get("/", async (req, res, next) => {

        try {
            const allComments = await Comment.find();

            res.json({
                status: 200,
                data: allComments
            })
        }catch (err){
            res.send(err)
        }

    })

router.post("/", async (req, res) => {
    try{
        const createdComment = await Comment.create(req.body);

        res.json({
            status: 200,
            data: createdComment
        })
    }catch(err){
        res.send(err);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const foundComment = await Comment.findById(req.params.id);
        res.json({
            status: 200,
            data: foundComment
        })
    }catch (err){
        res.send(err)
    }
});

router.put("/:id", async(req, res) => {
    try {
        const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body,{new: true} )
        res.json({
            status: 200,
            data: updateComment
        });
    }catch(err) {
        res.send(err)
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedComment
        })
    }catch (err) {
        res.send(err)
    }
})

module.exports = router;