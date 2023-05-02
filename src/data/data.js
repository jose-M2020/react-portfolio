// 1200 x 627
export const projects = [
    {
        id: 1,
        title: 'Web Chat',
        status: 'completed',
        description: [
          'El sistema de chat en línea en tiempo real es una aplicación web que permite a los usuarios comunicarse en tiempo real, pueden ver el estado de conexión y escritura de los usuarios que se han registrado, así como recibir notificaciones push en su dispositivo móvil o de escritorio. Con la integración de la API de GIPHY, los usuarios pueden buscar y compartir imágenes animadas para expresarse de manera divertida y creativa.'
        ],
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
        status: 'completed',
        description: [
          'Sistema desarrollado diseñado para el almacenamiento y difusión de proyectos académicos de una universidad. Con la capacidad de crear repositorios públicos o privados, este sistema permite a los miembros autorizados acceder a proyectos y recursos académicos específicos.',
          'El sistema cuenta con roles de alumno, docente y administrador, cada uno con autorizaciones específicas que garantizan la seguridad y privacidad de los datos. Los alumnos pueden subir imágenes o archivos y crear proyectos nuevos, así como gestionar y editar sus propios proyectos y datos personales. Los docentes tienen la capacidad de agregar y editar los datos de los alumnos, así como de realizar las mismas acciones que los alumnos. El administrador tiene todas las funcionalidades de los otros roles, además de poder eliminar usuarios y gestionar los permisos y funcionalidades para cada rol.',
          'El repositorio escolar es fácil de usar y cuenta con una interfaz intuitiva que permite a los usuarios navegar y buscar proyectos fácilmente. Además, los proyectos se pueden filtrar por carrera, tipo de proyectos, nivel académico y fecha para facilitar su búsqueda y visualización. Los proyectos pueden ser compartidos con otros miembros autorizados o ser públicos, lo que permite una mayor difusión y colaboración entre los usuarios.',
        ],
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
        status: 'completed',
        description: [
          'Tienda virtual de ropa con una amplia variedad de prendas de vestir para hombres y mujeres, con una interfaz intuitivo y fácil de navegar. Cuenta con la integración de métodos de pago mediante tarjeta de crédito (gestionado por Mercado Pago), transferencia y PayPal. Equipado con todas las funcionalidades básicas necesarias para una experiencia de compra en línea excepcional.',
          'Entre las características de la tienda en línea incluye la opción de agregar productos al carrito, permitiendo a los clientes agregar varios artículos a su lista de compra y pagar por todo en una sola transacción. También permite la opción de utilizar cupones para descuentos y promociones especiales, así como la capacidad de visualizar productos y valoraciones de otros clientes.',
          'También incluye una sección de pedidos, donde los clientes pueden ver y rastrear el estado de sus pedidos anteriores, así como ver su historial de compras. Los usuarios pueden guardar múltiples direcciones de envío para acelerar el proceso de la compra.',
          'Además, cuenta con una sección de reseñas, permitiendo a los clientes compartir sus experiencias.',
          'Finalmente, el sistema incluye un panel de control para el administrador, que proporciona una visión general de la tienda en línea, el cual permite la gestión de los pedidos, los envíos y el inventario. Integra acciones de agregar, editar y eliminar productos, así como controlar el stock y la disponibilidad de los productos. También permite gestionar los pedidos, los envíos y cupones, y ver estadísticas sobre las ventas y el rendimiento de la tienda.',
        ],
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
        status: 'completed',
        description: [
          'Sitio web cuyo propósito consiste en la reproducción de videos mediante el consumo de la API de YouTube para acceder a una amplia gama de contenido, incluyendo videos populares, listas de reproducción y canales. El sitio web está diseñado para permitir a los usuarios buscar, explorar y ver una amplia variedad de videos, organizados en categorías y canales para facilitar la navegación.',
          'Los usuarios pueden buscar videos utilizando una función de búsqueda integrada en el sitio web, y los resultados de búsqueda se muestran en una lista. Además, los videos se pueden agrupar por categoría, lo que permite a los usuarios explorar y descubrir nuevos contenidos basados en sus intereses.',
        ],
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
    },
    {
        id: 5,
        title: 'Administrador de proyectos',
        status: 'in progress',
        description: [
          'El sistema de administración de proyectos de TI es una herramienta para mejorar la gestión de proyectos. Dicha plataforma permite a los usuarios crear nuevos proyectos, editar y administrar la información del proyecto, y agregar miembros del equipo para colaborar.',
          'La herramienta ofrece una vista de tablero Kanban para la gestión de tareas, lo que permite a los usuarios visualizar el progreso de cada tarea en tiempo real. Los usuarios pueden mover las tareas entre diferentes columnas, agregar fecha de vencimiento, asignar prioridad, agregar descripción mediante un editor de texto y asignar tareas a miembros específicos del equipo.',
          'El sistema cuenta con una función de edición de datos que permite a los usuarios actualizar la información del proyecto, como el nombre, la descripción y la fecha de finalización. También pueden agregar y eliminar miembros del equipo según sea necesario. Además, se puede ver una vista general del proyecto, que proporciona información sobre el progreso, el tiempo estimado y el tiempo real utilizado para cada tarea.',
          'Para mejorar la experiencia de usuario, el sistema cuenta con una opción de modo oscuro y claro. Los usuarios pueden elegir su preferencia de color según su comodidad. También pueden crear, editar y eliminar usuarios según sea necesario.',
        ],
        tools: {
            front: ['React', 'MUI'],
            back: ['GraphQL', 'MongoDB']
        },
        items: [{
            img: [
                // 'images/projects/you-play.png'
            ],
            url: {
                github: 'https://github.com/jose-M2020/you-play',
                demo: 'https://tech-manage.vercel.app/projects'
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