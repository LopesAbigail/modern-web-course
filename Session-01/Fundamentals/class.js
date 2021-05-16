class MenschenMain {
    constructor(name) {
        this.name = name
    }

    sprechen() {
        console.log(`Meine Name ist ${this.name}`)
    }
}

const menschenEins = new MenschenMain('Hannah')
menschenEins.sprechen()

const erschaffenMenschen = nameZwei => {
    return {
        sprechen: () => console.log(`Meine Name ist ${nameZwei}`)
    }
}

// deterministico
const menschenZwei = erschaffenMenschen('Jonas')
menschenZwei.sprechen()