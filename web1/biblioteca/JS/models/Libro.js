export class Libro{
    #disponibile
    constructor(id=null,titolo,autore,categoria){
        this.id=id
        this.titolo=titolo
        this.autore=autore
        this.categoria=categoria
        this.#disponibile=true
    }

    get disponibile(){
        return this.#disponibile
    }

    set disponibile(bool){
        this.#disponibile=bool
    }
}
