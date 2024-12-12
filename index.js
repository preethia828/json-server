const jsonServer = require('json-server')

const Mpserver=jsonServer.create()

const middleware = jsonServer.defaults()
const route=jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and waiting for 
        client request`);
    
})