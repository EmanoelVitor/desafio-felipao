class heroi{
    constructor(nome,idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        if(this.tipo === "mago"){
            ataque = "magia"
        }

        else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }

        else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }

        else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
let heroi1 = new heroi ("Vitor", 100, "mago")
let heroi2 = new heroi ("Vitor", 100, "guerreiro")
let heroi3 = new heroi ("Vitor", 100, "monge")
let heroi4 = new heroi ("Vitor", 100, "ninja")


heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

