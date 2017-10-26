var mongoose = require("mongoose"),
    Post = require("./models/home");
    // Comment = require("./models/comment");

var data = [{
        image1: "images/1.jpg",
        image2 :"gibbrrrish",
        text: "Students will learn necessary competencies maintenance of basic personal computer hardware and operating systems. In order to receive CompTIA A+ certification a candidate must pass two exams.",
        title : "The life we live is ruled by three things.............................love, life and death..........my heart sing"
    },
    {
        image1: "images/1.jpg",
        image2 :"gibbrrrish",
        text: "Students will learn necessary competencies maintenance of basic personal computer hardware and operating systems. In order to receive CompTIA A+ certification a candidate must pass two exams.",
        title : "Nothings really dead..................depends on how you look at it"
    },
    {
        image1: "images/1.jpg",
        image2 :"gibbrrrish",
        text: "Students will learn necessary competencies maintenance of basic personal computer hardware and operating systems. In order to receive CompTIA A+ certification a candidate must pass two exams.",
        title : "What is your why?"
    }
];


function seedDB() {
    //remove all campgrounds
    Post.remove({}, function(err) {
        (err) ? console.log(err): console.log("Yeah removal worked!");

        //add few campgrounds
        data.forEach((seed) => {
            Post.create(seed, (err, post) => {
                // (err)? console.log(err): console.log("New camp added");
                if (err) {
                    console.log(err)
                } else {
                            // campground.comment.push(comment);
                            // Post.unshift(post);
                            post.save();
                            console.log("New post added");
                        }
                    });
            });
        });
}


var newPost = new Post ({
  image1 : "images/1.jpg",
  text : " so whats wrong with you why wont you connect",
  title : "Seeding db"
});

newPost.save( (err, post) => {
  (err)? console.log("error mehnnnn") : console.log (`new post added` + post)
})

module.exports = seedDB;
