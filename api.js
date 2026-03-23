import express from "express";

const app = express();
const PORT = 3000;
const arrNome = [{name: "Eduardo", company: "Sla"},
                 {name: "Pim", company: "Sla tbm"}]

app.get("/", (req, res) => {
    res.json(arrNome);
});

app.listen(PORT, () => console.log(`O servidor está executando na porta 3000 ${PORT}`));