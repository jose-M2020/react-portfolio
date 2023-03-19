// 1200 x 627
export const projects = [
    {
        id: 1,
        title: 'Web Chat',
        description: 'Aplicación web que permite a los usuarios comunicarse mediante mensajes de texto en tiempo real, con integración de service worker y API de GIPHY. Emite estados de conexión, escritura y notificaciones push.',
        tools: {
            front: ['HTML', 'CSS', 'JavaScript', 'Socket.IO'],
            back: ['NodeJS', 'Socket.IO', 'MongoDB']
        },
        items: [{
            img: [
                'images/projects/webchat.png'
            ],
            url: {
                github: 'https://github.com/jose-M2020/Chat_NodeJS-SocketIO',
                demo: 'https://meetme.onrender.com'
            }
        }],
    },
    {
        id: 2,
        title: 'Repositorio escolar',
        description: 'Sistema desarrollado para el almacenamiento y difusión de proyectos realizados en universidades académicas. Permite crear repositorios públicos o privados con acceso a miembros autorizados o administrador.',
        tools: {
            front: ['HTML', 'CSS', 'Bootstrap'],
            back: ['Laravel', 'MySQL', 'Amazon S3']
        },
        items: [{
            img: [
                'images/projects/repositorio-escolar.png'
            ],
            url: {
                github: 'https://github.com/jose-M2020/repositorio-UTCGG',
                demo: 'https://repositorio-uz3fd.ondigitalocean.app'
            }
        }],
    },
    {
        id: 3,
        title: 'Sistema ecommerce',
        description: 'Sistema para la compra y venta de ropa en internet, el cual permite realizar pagos con tarjeta o PayPal.',
        tools: {
            front: ['Angular', 'CSS', 'Bootstrap'],
            back: ['NodeJS', 'Socket.IO', 'MongoDB']
        },
        items: [
            {
                name: 'Tienda',
                img: [
                    'images/projects/ecommerce-tienda.png'
                ],
                url: {
                    github: 'https://github.com/jose-M2020/ecommerceTutorial-tienda',
                    demo: 'https://shoper-store.netlify.app'
                }
            },
            {
                name: 'Admin',
                img: [
                    'images/projects/ecommerce-admin.png'
                ],
                url: {
                    github: 'https://github.com/jose-M2020/ecommerceTutorial-admin',
                    demo: 'https://controlstore.netlify.app'
                }
            }
        ],
    },
    {
        id: 4,
        title: 'YouPlay',
        description: 'Sitio web para la reproducción de videos mediante el consumo de la API de YouTube, los videos pueden estar agrupados por categorías, canal o búsqueda realizada.',
        tools: {
            front: ['React', 'Tailwind'],
            back: ['YouTube API']
        },
        items: [{
            img: [
                'images/projects/you-play.png'
            ],
            url: {
                github: 'https://github.com/jose-M2020/you-play',
                demo: 'https://you-play.netlify.app'
            }
        }],
    }
]

export const skills = {
    front: [
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
        { name: 'SASS', icon: 'https://img.icons8.com/color/48/000000/sass.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
        { name: 'BootStrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
        { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwind_css.png' },
        { name: 'Angular', icon: 'https://img.icons8.com/fluency/48/000000/angularjs.png' },
        { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    ],
    back: [
        { name: 'PHP', icon: 'https://img.icons8.com/officexs/40/000000/php-logo.png' },
        { name: 'Laravel', icon: 'https://img.icons8.com/fluency/48/000000/laravel.png' },
        { name: 'NodeJS', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
        { name: 'MySQL', icon: 'https://img.icons8.com/fluency/48/000000/mysql-logo.png' },
        { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    ]
}

export const editors = [
    {
        tabName: 'perfil.json',
        data: {
            nombre: 'Jose Manuel Silva',
            profesion: 'Desarrollador Full-stack',
            descripcion: 'Me gusta estar en constante aprendizaje para refrescar o adquirir nuevos conocimientos que me ayuden en el desarrollo de proyectos. Siempre he tenido un gran interés por la programación, crear soluciones mediante el desarrollo de software que facilite las tareas en la vida cotidiana o en áreas laborales.'
        }
    },
    {
        tabName: 'habilidades.json',
        data: skills
    }
] 

export const editorTabs = [
    'perfil.json',
    'habilidades.json'
];

export const socialMedia = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jose-silva20',
        icon: 'fa-brands fa-linkedin-in'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100081383329122',
        icon: 'fa-brands fa-facebook'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/jose-M2020',
        icon: 'fa-brands fa-github'
    },
    {
        name: 'CodePen',
        link: 'https://codepen.io/chema2020',
        icon: 'fa-brands fa-codepen'
    },
]