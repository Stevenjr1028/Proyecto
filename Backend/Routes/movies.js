const { Router } = require("express");
const router = Router();
//npm i underscore
const _ =require("underscore");

const movies = require("../sample.json")
console.log(movies);

router.get("/",(req, res)=>{
    res.json(movies);
});

router.post("/", (req, res)=>{
    const {tittle,director,year}=req.body;
    if (tittle && director && year){
        const id =movies.length + 1
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies)

    }else {
        res.status(500).json({error: "There was an error"})

    }
    
}
)

router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {tittle,director,year}=req.body;
    if (tittle && director && year) {
        _.each(movies, (movie, i)=>{
            if (movie.id == id) {
                movie.tittle = tittle;
                movie.director = director;
                movie.year= year;
            }

        });
        res.json(movies);
    }else {
        res.status(500).json({error: "There was an error"})
    }

})

router.delete("/:id",(req, res)=>{
    const {id} = req.params;
    _.each(movies,(movie, i)=> {
        if (movie.id == id){
            movies.splice(i,1);
        }
    }
    );
    res.send(movies);
}
)

module.exports = router;