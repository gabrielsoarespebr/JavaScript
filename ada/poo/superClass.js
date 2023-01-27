/*
Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe. Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".

Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.

Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".

Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.

Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.

Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como, por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona" e se for impar "Terminei! Falta só testar".

Suba tudo no git para apresentar na próxima aula :)
*/
class Animal {
    // Propriedades publicas
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    apresentar(tipo = "") {
        console.log(`Oi! Eu sou um Animal ${tipo}`);
    }
};

const baleia = new Animal("Orca", 40);
baleia.apresentar();

class Mamifero extends Animal {
    // Propriedade publica
    habitat;
    // Propriedade privada
    #lactando;

    constructor(nome, idade, habitat, lactando) {
        super(nome, idade);
        this.habitat = habitat;
        this.#lactando = lactando;
    };

    apresentar() {
        super.apresentar("Mamifero");
    }

    getLactando() {
        console.log(this.#lactando);
    };

    setLactando(booleano) {
        this.#lactando = booleano;
    }
};

const morcego = new Mamifero("Morcegao", 100, "aereo", false);
morcego.apresentar();

class Ave extends Animal {
    // Propriedades publicas
    cor;
    voa;

    constructor(nome, idade, cor, voa) {
        super(nome, idade);
        this.cor = cor;
        this.voa = voa;
    }

    apresentar() {
        super.apresentar("Ave");
    }

    getCor() {
        console.log(cor);
    }

    setCor(cor) {
        this.cor = cor;
    }
};

const pinguim = new Ave("Pingu", 3, "preto", false);
pinguim.apresentar();

class Peixe extends Animal {
    perigoso;

    constructor(nome, idade, perigoso) {
        super(nome, idade);
        this.perigoso = perigoso;
    }

    apresentar() {
        super.apresentar("Peixe");
    }

    getPerigoso() {
        console.log(this.perigoso);
    }

    setPerigoso(booleano) {
        this.perigoso = booleano;
    }
};

const peixe = new Peixe("Nemo", 10, false);
peixe.apresentar();

class Humano extends Mamifero {
    // Propriedades privadas
    #gestante;
    #confiavel;

    constructor(nome, idade, habitat, lactando, gestante, confiavel) {
        super(nome, idade, habitat, lactando);
        this.#gestante = gestante;
        this.#confiavel = confiavel;
    };

    apresentar() {
        super.apresentar("Humano");
    }
};

const gravidaTaubate = new Humano("Gravida de Taubate", 38, "terrestre", false, false, true);
gravidaTaubate.apresentar();

class Cachorro extends Mamifero {
    raca;
    adestrado;
    #castrado;

    constructor(nome, idade, habitat, lactando, raca, adestrado, castrado) {
        super(nome, idade, habitat, lactando);
        this.raca = raca;
        this.adestrado = adestrado;
        this.#castrado = castrado;
    };

    apresentar() {
        super.apresentar("Cachorro");
    };

    getAdestrado() {
        console.log(this.adestrado);
    };
    setAdestrado(booleano) {
        this.adestrado = booleano;
    };

    getCastrado() {
        console.log(this.#castrado);
    };
    setCastrado(booleano) {
        this.#castrado = booleano;
    }
};

const cachorro = new Cachorro("Apolo", 7, "terrestre", false, "Vira lata", false, true);
cachorro.apresentar();

class Desenvolvedor extends Humano {
    regimeTrabalhista;
    modalidade;

    constructor(nome, idade, habitat, lactando, gestante, confiavel, regimeTrabalhista, modalidade) {
        super(nome, idade, habitat, lactando, gestante, confiavel);
        this.regimeTrabalhista = regimeTrabalhista;
        this.modalidade = modalidade;
    };

    apresentar() {
        super.apresentar("Desenvolvedor");
    };

    getRegimeTrabalhista() {
        console.log(this.regimeTrabalhista);
    };
    setRegimeTrabalhista(regime) {
        this.regimeTrabalhista = regime;
    };

    getModalidade() {
        console.log(this.modalidade);
    };
    setModalidade(modalidade) {
        this.modalidade = modalidade;
    }
};

class FrontEnd extends Desenvolvedor {
    framework;

    constructor(nome, idade, habitat, lactando, gestante, confiavel, regimeTrabalhista, modalidade, framework) {
        super(nome, idade, habitat, lactando, gestante, confiavel, regimeTrabalhista, modalidade);
        this.framework = framework;
    };

    apresentar() {
        super.apresentar("FrontEnd");
    };

    getFramework() {
        console.log(this.framework);
    };
    setFramework(framework) {
        this.framework = framework;
    }
};

class BackEnd extends Desenvolvedor {
    progLanguage;

    constructor(nome, idade, habitat, lactando, gestante, confiavel, regimeTrabalhista, modalidade, progLanguage) {
        super(nome, idade, habitat, lactando, gestante, confiavel, regimeTrabalhista, modalidade);
        this.progLanguage = progLanguage;
    };

    apresentar() {
        super.apresentar("BackEnd");
    };

    getProgLanguage() {
        console.log(this.progLanguage);
    };
    setPramework(progLanguage) {
        this.progLanguage = progLanguage;
    };

    darDesculpa() {
        const aleatorio = Math.floor(Math.random() * 10);
        const desculpa = (aleatorio % 2 === 0) ? "Na minha máquina funciona" : "Terminei! Falta só testar";
        console.log(desculpa);
    }
};

const backend = new BackEnd("Diogo", 25, "terrestre", false, false, true, "CLT", "presencial", "Java");
backend.darDesculpa();

class Medico extends Humano {
    especialidade;

    constructor(nome, idade, habitat, lactando, gestante, confiavel, especialidade) {
        super(nome, idade, habitat, lactando, gestante, confiavel);
        this.especialidade = especialidade;
    };

    apresentar() {
        super.apresentar("Medico");
    };

    getEspecialidade() {
        console.log(this.regimeTrabalhista);
    };
    setEspecialidade(especialidade) {
        this.especialidade = especialidade;
    }
};

const medico = new Medico("Dr. Rey", 40, "terrestre", false, false, true, "Cirurgião plástico");
medico.apresentar();

class Advogado extends Humano {
    ramo;

    constructor(nome, idade, habitat, lactando, gestante, confiavel, ramo) {
        super(nome, idade, habitat, lactando, gestante, confiavel);
        this.ramo = ramo;
    };

    apresentar() {
        super.apresentar("Advogado");
    };

    getRamo() {
        console.log(this.ramo);
    };
    setRamo(ramo) {
        this.ramo = ramo;
    }
};

const advogado = new Advogado("Dra. Deolane", 38, "terrestre", false, false, false, "Direito Penal");
advogado.apresentar();