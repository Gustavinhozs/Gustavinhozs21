class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

 
 // divListaProduto.insertAdjacentHTML('afterbegin', '');
 class Produto {
    constructor (nome, dataCadastro, descricao, preco){
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }
  mostrarProdutos (){
    return this.nome + this.dataCadastro + this.descricao + this.preco ;
  }
  }
  
  const produto = new Produto("Cloud 9", "15-05-2013", "Organização de e-sports, Cloud 9 (C9)", "R$ 10000000000");
  console.log(produto.mostrarProdutos())
  

  
  class ProdutosDestaque extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque){
      super(nome, dataCadastro, descricao, preco, imagemDestaque)
      this.imagemDestaque = imagemDestaque;
    }



    mostrarProdutosDestaque (){
        return `
        <h1 class = "Vasco" >${this.nome}</h1>
        <h4> ${this.dataCadastro}</h4>
        <img src="${this.imagemDestaque}" style="height: 350px"/>
        <p> ${this.descricao}</p>
        <p> ${this.preco}</p>
        ` 
       // return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
     }
  }   



  const produtosDestaque = new ProdutosDestaque("Cloud 9", "15-05-2013", "Organização de e-sports, Cloud 9 (C9)", "R$ 10000000000", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cloud9_logo_c._2023.svg/1200px-Cloud9_logo_c._2023.svg.png");
  //console.log(produtosDestaque.mostrarProdutosDestaque())
  
  
  const produtos = document.getElementById("produto-destaque")
  produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
  



  
  class ProdutosLista extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque, name, descri, price, name1, descri1, price2, name3, descri3, price3){
      super(nome, dataCadastro, descricao, preco, imagemDestaque, name, descri, price, name1, descri1, price2, name3, descri3, price3)
      this.imagemDestaque = imagemDestaque;
      this.name = name;
      this.descri = descri;
      this.price = price;
      this.name1 = name1;
      this.descri1 = descri1;
      this.price2 = price2;
      this.name3 = name3;
      this.descri3 = descri3;
      this.price3 = price3;
    }




  mostrarProdutos() {
    return `
      


      <div class="list">
    <div class="grid-container">
      <div class="col">
      <h4>${this.name}</h4>
      <p>${this.descri}</p>
      <p>${this.price}</p>
      </div>
      <div class="col">
      <h4>${this.name1}</h4>
      <p>${this.descri1}</p>
      <p>${this.price2}</p>
      </div>
      <div class="col">
      <h4>${this.name3}</h4>
      <p>${this.descri3}</p>
      <p>${this.price3}</p>
      </div>
    </div>
  </div>
    `;
  }
  }



  
  const produtosLIsta = new ProdutosLista("Imperial Esports", "25-01-2021", "Imperial Esports", "R$40000", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cloud9_logo_c._2023.svg/1200px-Cloud9_logo_c._2023.svg.png", "Imperial Esports", "Equipe de Esports - Imperial Esports", "R$ 400000", "FaZe Clan", "Equipe de Esports - FaZe Clan", "R$ 200000000", "Team Liquid", "Equipe de Esports - Team Liquid", "R$ 22000000");
  



  const listaProdutos = document.getElementById("lista-produtos")
  listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarProdutos());



  
  //const listaProdutos = document.getElementById("lista-produtos")
  //divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());