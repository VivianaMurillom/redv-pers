
let menstruacion=[
    {
        "id":1,
        "titulo":"Fases de la menstruación",
        "presentacion":"Página web",
        "enlace":"https://helloclue.com/es/articulos/ciclo-a-z/el-ciclo-menstrual-mas-que-solo-tu-periodo"
    },
    {
        "id":2,
        "titulo":"¿Sabes qué pasa durante la menstruación?",
        "presentacion":"Video",
        "enlace":"https://youtu.be/c1ZFUAMuypI"
    },
    {
        "id":3,
        "titulo":"El ciclo menstrual",
        "presentacion":"Video",
        "enlace":"https://www.youtube.com/watch?v=fYXMk6qvRvU"
    }
]

let education=[
    {
        "id":1,
        "titulo":"Política de Sexualidad, Derechos Sexuales y Derechos Reproductivos",
        "presentacion":"Documento PDF virtual",
        "enlace":"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/LIBRO%20POLITICA%20SEXUAL%20SEPT%2010.pdf"
    },
    {
        "id":2,
        "titulo":"Educación Integral para la Sexualidad (EIS)",
        "presentacion":"Página web",
        "enlace":"https://prep-colombia.org/eis/"
    },
    {
        "id":3,
        "titulo":"Orientaciones técnicas internacionales sobre educación en sexualidad",
        "presentacion":"Documento PDF virtual",
        "enlace":"https://prep-colombia.org/wp-content/uploads/2020/06/orientaciones.pdf"
    },
    {
        "id":4,
        "titulo":"Cápsula educativa sobre Educación Integral para la Sexualidad",
        "presentacion":"Video",
        "enlace":"https://youtu.be/koVAv2-Jce0"
    }
]

let noGame=[
    {
        "id":1,
        "titulo":"Capitulo 1",
        "presentacion":"Video",
        "enlace":"https://youtu.be/NMPm8jAko24"
    },
    {
        "id":2,
        "titulo":"Capitulo 2",
        "presentacion":"Video",
        "enlace":"https://youtu.be/MYZXL7oCuxQ"
    },
    {
        "id":3,
        "titulo":"Capitulo 3",
        "presentacion":"Video",
        "enlace":"https://youtu.be/6vTsdLz871s"
    }
]

export function getAllMenstruacion(){
    return menstruacion;
}

export function getAllEducation(){
    return education;
}

export function getAllNoGame(){
    return noGame;
}