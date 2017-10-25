const express = require('express');
const router = express.Router();
const Post = require("../models/home");

/* GET home page. */
router.get('/', (req, res) => {
 // find and display all camps in database
  Post.find({}, (err, allPost) => {
      if(err){
          console.log(err)
      }
     res.render("home/home", {allPost: allPost});
        // currentUser : req.user});
  })
});


//ADD NEW POST ROUTE
router.get("/new_post", (req, res) => {
    // show form for adding new photos
    res.render("home/new_post")
})


// CREATE ROUTE
router.post("/", (req, res) => {
    var newPost ={
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        text  : req.body.text,
        title : req.body.title,
        // author : {
        // id: req.user._id,
        // username: req.user.username
        // createdAt: Date.now()
    }
    Post.create(newPost, (err, newlyPosted) => {
        if(err){
            console.log(err.message);
        }
        //redirect back to photo gallery page
        // req.flash("success", "New post added")
        res.redirect('/');
    })
});


//SHOW PAGE
router.get("/:id", function(req, res) {
    //find campground with provided id
    Post.findById(req.params.id, (err, foundPost) => {
        (err)? console.log(err):
            res.render("home/show", { displayPost: foundPost });
    });
});



//Edit post
router.get('/:id/edit_post', (req, res) => {
    Post.findById(req.params.id, (err, postFound) => {
        if(err){
            console.log(err.message);
        }
        res.render('home/edit_post', {editPost : postFound})
    })
})



module.exports = router;
