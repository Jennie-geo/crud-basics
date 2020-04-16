
const findDocument = function(db, callback){
    let movies = {
        //find the first movie in the collection.
        data1: collection.findOne().toArray().then(movie => console.log("First movie: ", movie)),
        // Find the movies with rating 7.
       data2: collection.find({"rating": 7}).toArray((error, data) => {
        if (error) console.log(error)
        console.log("movies with rating 7: ", data)
      }),
          // Finds the movie titles
        data3: collection.find({}, { projection: {_id: 0,movie: 1 }}).toArray((error, data) => {
          if (error) console.log(error)
            console.log("Movie Titles: ", data)
        })
  
      }
  
        callback(movies)
  
      }
  
  module.exports = findDocument