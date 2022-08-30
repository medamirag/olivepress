const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
let clients =
[
    { id: 1, name: 'Mohamed', telephone: '2568742' },
    { id: 2, name: 'Hela', telephone: '5526454' },
    { id: 3, name: 'Montassar', telephone: '5464654' },

];

app.get('/api/v0/client/:id', (req,res) => {
    const idClient=req.params['id'];
    res.send(clients.find(ClientR=>ClientR.id==idClient));
})

app.get('/api/v0/clients', (req, res) => {
    res.send( clients )
});
data = [
    {
        code: "R02",
        type: "F",
        idClient: 2,
        contenaire: [1, 2],
        quantiteHuile: 0,
        uniteHuile: "L",
        quantiteOlive: 130,
        uniteOlive: "Kg",
        quantiteFitoura: 0,
        uniteFitoura: "Kg",
        uniteOlive: "Kg",
        quantiteMarjine: 0,
        uniteMarjine: "L",
        dateReception: new Date("01/01/2022"),
        dateExtraction: null,
        dateFacturation: null,
        fraisExtraction: 2400,
        TVA: 0.19,
        modePayement: "Espèce",

        status: 1






    },
    {
        code: "E02",
        type: "E",
        idClient: 3,
        contenaire: [1, 2],
        quantiteHuile: 50,
        uniteHuile: "L",
        quantiteOlive: 120,
        uniteOlive: "Kg",
        quantiteFitoura: 11,
        uniteFitoura: "Kg",
        uniteOlive: "Kg",
        quantiteMarjine: 8,
        uniteMarjine: "L",
        dateReception: new Date("01/01/2022"),
        dateExtraction: new Date("02/01/2022"),
        dateFacturation: null,
        fraisExtraction: 2400,
        TVA: 0.19,
        modePayement: "Espèce",

        status: 1






    },
    {
        code: "R01",
        type: "R",
        idClient: 1,
        contenaire: [1, 2],
        quantiteHuile: 0,
        uniteHuile: "L",
        quantiteOlive: 120,
        uniteOlive: "Kg",
        quantiteFitoura: 0,
        uniteFitoura: "Kg",
        uniteOlive: "Kg",
        quantiteMarjine: 0,
        uniteMarjine: "L",
        dateReception: new Date("01/01/2022"),
        dateExtraction: null,
        dateFacturation: null,
        fraisExtraction: 2400,
        TVA: 0.19,
        modePayement: "Espèce",

        status: 1






    },
    {
        code: "R03",
        type: "R",
        idClient: 1,
        contenaire: [1, 2],
        quantiteHuile: 0,
        uniteHuile: "L",
        quantiteOlive: 120,
        uniteOlive: "Kg",
        quantiteFitoura: 0,
        uniteFitoura: "Kg",
        uniteOlive: "Kg",
        quantiteMarjine: 0,
        uniteMarjine: "L",
        dateReception: new Date("01/01/2022"),
        dateExtraction: null,
        dateFacturation: null,
        fraisExtraction: 2400,
        TVA: 0.19,
        modePayement: "Espèce",

        status: 0






    },
    {
        code: "E01",
        type: "E",
        idClient: 1,
        contenaire: [1, 2],
        quantiteHuile: 50,
        uniteHuile: "L",
        quantiteOlive: 120,
        uniteOlive: "Kg",
        quantiteFitoura: 11,
        uniteFitoura: "Kg",
        uniteOlive: "Kg",
        quantiteMarjine: 8,
        uniteMarjine: "L",
        dateReception: new Date("01/01/2022"),
        dateExtraction: new Date("02/01/2022"),
        dateFacturation: null,
        fraisExtraction: 2400,
        TVA: 0.19,
        modePayement: "Espèce",

        status: true






    },
]
app.get('/api/v0/documents', (req, res) => {
    res.send(

        data
    )
});

app.get('/api/v0/documents/:idClient', (req, res) => {
    i = 0
    data2 = [
        {
            code: "E01",
            type: "E",
            idClient: 1,
            contenaire: [1, 2],
            quantiteHuile: 50,
            uniteHuile: "L",
            quantiteOlive: 120,
            uniteOlive: "Kg",
            quantiteFitoura: 11,
            uniteFitoura: "Kg",
            uniteOlive: "Kg",
            quantiteMarjine: 8,
            uniteMarjine: "L",
            dateReception: new Date("01/01/2022"),
            dateExtraction: new Date("02/01/2022"),
            dateFacturation: null,
            fraisExtraction: 2400,
            TVA: 0.19,
            modePayement: "Espèce",

            status: 1






        }
    ];
    data.forEach(el => {
        if (el.idClient == req.params["idClient"]) {


            data2[i] = el
            i++

        }
    })

    res.send(data2)

});
//**
/*
API affichage de band de reception d'un client

*/
app.get('/api/v0/documents/:idClient/:typedoc', (req, res) => {
    i = 0
    data2 = [
        {
            code: "",
            type: " ",
            idClient:0  ,
            contenaire: [0, 0],
            quantiteHuile: 0,
            uniteHuile: " ",
            quantiteOlive:  0,
            uniteOlive: " ",
            quantiteFitoura: 0,
            uniteFitoura: "Kg",
            uniteOlive: "Kg",
            quantiteMarjine: 8,
            uniteMarjine: "L",
            dateReception: new Date("01/01/2022"),
            dateExtraction: new Date("02/01/2022"),
            dateFacturation: null,
            fraisExtraction: 2400,
            TVA: 0.19,
            modePayement: "Espèce",

            status: false






        }
    ];
    let somme=0
    data.forEach(el => {
        if (el.idClient == req.params["idClient"] && (el.type == req.params["typedoc"])) {


            data2[i] = el
            i++
            
        }
          
    })
    data2.forEach(el=>somme+=el.quantiteOlive)  
           console.log("somme =",somme); 
    


    res.send([data2,{somme:somme}])

});

app.listen(3000);
