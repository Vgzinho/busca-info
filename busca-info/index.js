
function verificaInfo() {
    /*criei aqui uma função que primeiramente que pega os seletores especificos onde contem as informações que precisamos e, retornamos os textos contidos dentro deles,removendo algumas poluições que podem existir no texto e guardamos o resultado em suas devidas variáveis */
    var infoProduto = document.querySelector(".medium-8").textContent.trim().replace(/\n/g, "");

    var infoNutriProduto = document.querySelector("#attributes_grid").textContent.trim().replace(/\n/, "");

    /* ↓ aqui fazemos a condicional caso as variáveis não retornarem informações ↓*/
    if (infoProduto && infoNutriProduto === "") {
        console.log("Não encontrei nenhuma informação. :(");
    }
    /* retornamos nossos objetos ↓↓*/
    return { infoProduto, infoNutriProduto };
};
/* ↓ aqui chamamos e guardamos o retorno da nossa função*/
const infoProdutos = verificaInfo();

/* e por fim retornamos nossas informações no console  */
console.log(infoProdutos.infoProduto);
console.log(infoProdutos.infoNutriProduto);