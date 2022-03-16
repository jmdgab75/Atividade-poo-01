class Pessoa {
 constructor ( nome, datadenascimento, anodenascimento, altura) {
 this.nome = nome;
 this.datadenascimento = datadenascimento;
 this.anodenascimento = anodenascimento;
 this.altura = altura;
 }

 mostrarAtributos();
  console.log(this.nome)
  console.log(this.datadenascimento)
  console.log(this.anodenascimento)
  console.log(this.altura)

   
   calcularIdade () {
 return 2022 - this.ano_de_nascimento;
  
idade() {
 return this.calcularIdade();
 }
}

let calcularIdade_1() = new calcularIdade (1970, 2022);
 console.log(calculaIdade_1.calcualrIdade())
   pessoa.mostrarAtributos();
let pessoa = new Pessoa('Jurema', '12/04', '1970', '176');