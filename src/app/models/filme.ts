export class Filme {
    
    constructor(nome: string, ano: string, diretor: string, genero: string, descricao: string, poster: string, atores: string) {
        this.nome = nome;
        this.ano = ano;
        this.diretor = diretor;
        this.genero = genero;
        this.descricao = descricao;
        this.poster = poster;
        this.atores = atores;
    }
    public nome: string;
    public ano: string;
    public diretor: string;
    public genero: string;
    public descricao: string;
    public poster: string;
    public atores: string;

         
    public static empty(): Filme {
            return {
                nome: '',
                ano: '',
                diretor: '',
                genero: '',
                descricao: '',
                poster: '',
                atores: '',
            }
        }
    }

