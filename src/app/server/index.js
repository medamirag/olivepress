const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/api/v0/clients',(req,res)=>{
    res.send(
        [
            {id:1,name:'Mohamed',telephone:'2568742'},
            {id:2,name:'Hela',telephone:'5526454'},
            {id:3,name:'Montassar',telephone:'5464654'},
     
        ]
    )
});
app.listen(3000);
