// //Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.

function displayMovies(movies:string[]){
    console.log("My Favourite Movies As:-");
    for (const iterator of movies) {
        console.log(iterator);
        
    }
    
}
let movies=["Toy Story","Finding Nemo","The Lion King","Frozen","Harry Potter series (2001-2011)","Shrek","The Princess Bride"];
displayMovies(movies);
//Author-HUMA MOHSIN