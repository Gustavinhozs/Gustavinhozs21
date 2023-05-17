class Produto{
    constructor(nome, dataDeCadastro, preco, descricao){
        this.nome = nome;
        this.dataDeCadastro = dataDeCadastro;
        this.preco = preco;
        this.descricao = descricao;


    }


    mostrarProduto(){
        return this.nome + this.dataDeCadastro + this.preco + this.descricao
    }
}

const produto = new Produto("vasco", "2017-05-25", "Clube De Regatas Vasco da Gama", "100000000")
console.log(produto.mostrarProduto())


class ProdutoDestaque extends Produto{
    constructor(nome, dataDeCadastro, descricao, preco, imagemDestaque){
        super(nome, dataDeCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
    }
    
    mostrarProdutoDestaque(){
        return this.nome + this.dataDeCadastro + this.descricao + this.preco + this.imagemDestaque
    }
}