const db = require("../config/db");

async function createVenda({venda_id, produtos}){

    await db.query(
        "INSERT INTO itens_venda (venda_id, produtos) VALUES (?, ?)",
        [venda_id, produtos]
    );
}

async function deleteVenda({id, estabelecimento_id}) {
    
    const [result] = await db.query(
        "DELETE FROM itens_venda WHERE id = ? AND estabelecimento_id = ?",
        [id, estabelecimento_id]
    );
}