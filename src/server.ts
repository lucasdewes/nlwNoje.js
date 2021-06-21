import express from "express";

const app = express();

/*  Os mais utilizados
get     => Buscar informação
post    => Inserir informação (criar)
put     => Alterar uma informação
delete  => Remover
patch   => Alterar uma informação específica
*/

app.get("/test", (request, response) => {
    //Request   => Entrando
    //Response  => saindo
    return response.send("Olá nlw");
});

app.post("/test-post", (request, response) => {
    return response.send("test do post");
});

//http://localhost:3000
app.listen(3000, () => console.log("server is running"));
