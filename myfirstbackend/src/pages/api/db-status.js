import pool from "../../lib/db"

import {allowCord} from "../../lib/nocors";

async function handler(req, res) {
    if(req.method != "GET"){
        return res.status(405).json({error: "Método não permitido"})
    }

    try{
        const[result] = await pool.execute("SELECT 1");
        return res.status(200).json({status: "online", message: "Base de dados online"})
    }catch(error){
        console.error("Erro ao conectar à base de dados:", error);
        return res.status(500).json({status:"offline", erro: "Erro ao conectar a base de dados"})
    }

    export default allowCord(handler);
}