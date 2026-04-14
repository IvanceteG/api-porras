const porras = [
    {
        email: "Frank@fpllefia.com",
        porra: "0-1"
    },
    {
        email: "JoelCano@fpllefia.com",
        porra: "2-1"
    },{
        email: "Ivan@fpllefia.com",
        porra: "1-1"
    },{
        email: "Ciro@fpllefia.com",
        porra: "2-1"
    },{
        email: "Aranu@fpllefia.com",
        porra: "1-3"
    },{
        email: "Edgar@fpllefia.com",
        porra: "2-2"
    },{
        email: "JoelVegas@fpllefia.com",
        porra: "1-4"
    },{
        email: "MiguelAngel@fpllefia.com",
        porra: "1-5"
    },
    {
        email: "Carlos@fpllefia.com",
        porra: "1-6"
    }
]

export function leerPorras(req, res){
    res.json({
        porra: porras,
    })
}