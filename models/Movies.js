import mongoose from "mongoose";

//creating Schemas
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
});

const movieModel = mongoose.model("Movie", movieSchema);

//getting all the data
const allDoc = async () => {
  try {
    const result = await movieModel.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//finding specific data 
//iterating over all the documents
const getDoc =async()=>{
    try {
        const result =await movieModel.find()
        result.forEach((movie)=>{
            console.log(movie.name);
        })
    } catch (error) {
        console.log(error);
    }
}

//Creating Document using the schemas
const createDoc = async () => {
  try {
    const M1 = new movieModel({
      name: "hello",
      ratings: 4,
      money: 8686,
      genre: ["action", "thrll"],
      isActive: true,
    });
    const result = await M1.save();
    console.log(result);
  } catch (error) {}
};

//retriving single document using id
// const singleDoc =async()=>{
//     try {
//         const result =await movieModel.findById("66e337a022f7a308510ce2ab")
//         console.log(result);
//     } catch (error) {
//         console.log("Not Exists");
//     }
// }

//for specific field using id
// const singleDoc =async()=>{
//     try {
//         const result =await movieModel.findById("66e337a022f7a308510ce2ab","name")
//         console.log(result);
//     } catch (error) {
//         console.log("Not Exists");
//     }
// }

//for finding the specific document using the fields only
const singleDoc =async()=>{
    try {
        const result =await movieModel.find({name:"amar"})
        console.log(result);
    } catch (error) {
        console.log("Not Exists");
    }
}

const countDoc =async()=>{
    try {
        const result =await movieModel.find().countDocuments()
        console.log(result);
    } catch (error) {
        console.log("Not Exists");
    }
}

const sortDoc =async()=>{
    try {
        const result =await movieModel.find().sort({name : 1})//-1 for ascending order
        console.log(result);
    } catch (error) {
        console.log("Not Exists");
    }
}


//update the info in the database
const updateDocs =async()=>{
  try {

    //updateone(filter,Changes)
      const result =await movieModel.updateOne({_id : "66e3376248c5c567bc2c186d5"}, {name : "Amar"})
      console.log(result);
  } catch (error) {
      console.log("Not Exists");
  }
}

const updateManyDocs =async()=>{
  try {

    //updateone(filter,Changes)
      const result =await movieModel.updateMany({ratings : 4}, {name : "Amar"})
      console.log(result);
  } catch (error) {
      console.log("Not Exists");
  }
}

const deleteDocs =async()=>{
  try {

    //use deleteone for deleting one with any fields or use deletemany for deleting many items same as the update
      const result =await movieModel.findByIdAndDelete("66e3376248c5c567bc2c186d")
      console.log(result);
  } catch (error) {
      console.log("Not Exists");
  }
}

export { createDoc, allDoc,getDoc,singleDoc,countDoc, sortDoc,updateDocs,updateManyDocs ,deleteDocs};
