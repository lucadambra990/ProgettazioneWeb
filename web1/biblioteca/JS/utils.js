export function listaOggetti(dati){
    return Object.keys(dati).map(id=>({
        id,
        ...dati[id]
    }))
}