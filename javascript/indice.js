 // Tus noticias
 const noticias = [
    {
        titulo: "Un estudio constata que mejorar el estilo de vida puede frenar el desarrollo de diabetes",
        cuerpo: "El número de personas con diabetes en España se ha incrementado en un 42% desde el 2019,según advierte la Sociedad Española de Diabetes con motivo del Día Mundial de...",
        foto: "./fotos/deporte1.jpeg",
        enlace: "https://elpais.com/salud-y-bienestar/2023-11-15/un-estudio-constata-que-mejorar-el-estilo-de-vida-puede-frenar-el-desarrollo-de-diabetes.html"
    },
    {
        titulo: "Una terapia aparcada durante un siglo se convierte en alternativa para la obesidad o la diabetes",
        cuerpo: "Los fagos, virus que infectan a bacterias, pueden ser útiles para reparar los desequilibrios en la microbiota detrás de la depresión o el colon irritable...",
        foto: "./fotos/consulta_medica5.jpeg",
        enlace: "https://elpais.com/salud-y-bienestar/2023-10-19/una-terapia-aparcada-durante-un-siglo-se-convierte-en-alternativa-para-la-obesidad-o-la-diabetes.html"
    },
    {
        titulo: "Enfoque 'antidieta': cuando la alimentación intuitiva está contraindicada",
        cuerpo: "Este tipo de planteamiento nutricional tiene sentido solo cuando no existen trastornos de la conducta alimentaria ni enfermedades como la diabetes...",
        foto: "./fotos/tabla_indice_glucemico.jpeg",
        enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2023-11-06/enfoque-antidieta-cuando-la-alimentacion-intuitiva-esta-contraindicada.html"
    },
    {
        titulo: "Sanidad alerta de un fallo en una App para diabéticos que administra insulina en exceso",
        cuerpo: "El error afecta a la aplicación mylife CamAPS FX, de la plataforma android en la versión 1.4 (172) y anteriores...",
        foto: "./fotos/simulacion.jpeg",
        enlace: "https://www.elmundo.es/ciencia-y-salud/salud/2023/09/08/64fb38f3fdddff28218b45b9.html"
    },
    {
        titulo: "DIABETES MELLITUS Y SALUD MENTAL",
        cuerpo: "La Diabetes mellitus, representa actualmente un importante problema de salud mundial al ser una enfermedad crónica, produce un deterioro progresivo de la calidad de vida de la persona que la padece...",
        foto: "./fotos/terapia.jpeg",
        enlace: "https://www.noticieromedico.com/post/diabetes-mellitus-y-salud-mental"
    },
    {
        titulo: "Ultraprocesados: no lo llamemos comida porque no lo es",
        cuerpo: "No son alimentos, sino preparaciones industriales comestibles y su consumo habitual tiene consecuencias negativas sobre la salud en el nivel físico y mental...",
        foto: "./fotos/valor_nutricional.jpeg",
        enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2023-05-23/ultraprocesados-no-lo-llamemos-comida-porque-no-lo-es.html"
    },
    {
        titulo: "EEUU registra y vigila nuevos efectos secundarios de los inyectables para adelgazar",
        cuerpo: "Pacientes que han usado Ozempic y Wegovy denuncian eventos adversos en su estómago hasta un año después de dejar la medicación..",
        foto: "./fotos/medico_paciente.jpeg",
        enlace: "https://www.elmundo.es/ciencia-y-salud/salud/2023/07/27/64c2614dfc6c835f258b45b2.html"
    },
    {
        titulo: "La diabetes ha aumentado un 42% en solo cuatro años y afecta ya a uno de cada siete adultos",
        cuerpo: "El número de personas con diabetes en España se ha incrementado en un 42% desde el 2019, según advierte la Sociedad Española de Diabetes con motivo del Día Mundial de...",
        foto: "./fotos/escena_matutina.jpeg",
        enlace: "https://www.rtve.es/noticias/20231114/diabetes-aumenta-42-desde-2019-afecta-uno-siete-adultos/2460819.shtml"
    }];



// Función para crear una noticia
function crearNoticia(noticia) {
    // Crear un nuevo div para la noticia
    const divNoticia = document.createElement('div');
    divNoticia.className = 'noticia';

    // Usar innerHTML para agregar el contenido de la noticia
    divNoticia.innerHTML = `
    <img src="${noticia.foto}" alt="${noticia.titulo}">
    <h2>${noticia.titulo}</h2>
    <p>${noticia.cuerpo}</p>
    <a href="${noticia.enlace}">Leer más</a>
`;

    return divNoticia;
}

// Obtén el contenedor de noticias
const contenedorNoticias = document.getElementById('contenedor-noticias');

// Carga inicial de noticias
let indiceNoticias = 0;
for (; indiceNoticias < 3; indiceNoticias++) {
    // Usar appendChild en lugar de innerHTML para agregar la noticia al contenedor
    contenedorNoticias.appendChild(crearNoticia(noticias[indiceNoticias]));
}

// Carga más noticias cuando el usuario se desplaza hacia abajo
window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        for (let i = 0; i < 3; i++) {
            if (indiceNoticias < noticias.length) {
                // Usar appendChild en lugar de innerHTML para agregar la noticia al contenedor
                contenedorNoticias.appendChild(crearNoticia(noticias[indiceNoticias]));
                indiceNoticias++;
            }
        }
    }

    // Hacer que las noticias aparezcan suavemente cuando estén en la ventana de visualización
    const elementosNoticia = document.querySelectorAll('.noticia'); // Cambiado a 'elementosNoticia'
    elementosNoticia.forEach(noticia => { // Cambiado a 'elementosNoticia'
        const rect = noticia.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            noticia.classList.add('visible');
        }
    });
};