var mongoose = require("mongoose");

//   function timeStamp() {
//     var n = new Date();
//   return Math.round(n.getTime() / 1000);
// }

// Campground  schema
var Talktalk = mongoose.Schema({

    image1 : {
         type : String
    },
    image2 : {
         type : String
    },
    image3 : {
         type : String
    },
    title : {
         type : String
    },
    //
    // image:{
    //    type: String
    //   },
    text:{
        type: String,
         index: true,
         required : true
    },
    // author: {
    //     id:{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     username : String
    // },
    createdAt:{
        type: Date,
        // default : Date.now
        default : new Date()

        // default :  function timeStamp() {
        //     var n = new Date();
        //   return Math.round(n.getTime() / 1000);
        // }

        // var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth()+1; //January is 0!
        // var yyyy = today.getFullYear();
        //
        // if(dd<10) {
        //     dd = '0'+dd
        // }
        //
        // if(mm<10) {
        //     mm = '0'+mm
        // }
        //
        // today = mm + '/' + dd + '/' + yyyy;
        // document.write(today);




    }
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Comment"
    // }]
});

module.exports = mongoose.model("Post", Talktalk);


// // Day Schema
// var daySchema = mongoose.Schema({
//   name:{
//     type: String,
//     required: true,
//   },
//   createdAt:{
//     type: Date,
//     default: Date.now
//   }
// });
