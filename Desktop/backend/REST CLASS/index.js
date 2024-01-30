const express = require("express");
const app = express();
const port = 8080;
const path =require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, ()=>{
    console.log(`the app is listening at port no ${port}`);
})

let post =[
    {username:"abhi", 
     para:"i am abhinagare currently I am persuing BE and actively looking for a job"
},
{
    username:"bhau",
    para:"hello I am Bhau and I am an commedian"
}
];

app.get("/posts", (req, res)=>{ 
    res.render("index.ejs",{post});
});

app.get("/posts/new",(req, res)=>{
    res.render("new.ejs")
})

