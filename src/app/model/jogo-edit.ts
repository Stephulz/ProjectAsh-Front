export class JogoEdit{
    constructor(
        public jogoId: string,
        public nome: string,
        public desenvolvedora: string,
        public dataLancamento: string,
        public preco: string,
        public descricao: string,
        public plataforma: string,
        public quantJogadores: string,
        public compatControle: string,
        public urlImagem: string,
        public genero
      ) {  }
}