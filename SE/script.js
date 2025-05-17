// Base de conocimientos 
const baseConocimientos = [
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'intermedio',
            color: 'blanco',
            laminas: 'libres',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'rosadas',
            color_tallo: 'blanco'

        },
        clasificacion: 'comestible',
        especie: 'Agaricus Bisporus',
        nombre: 'Champiñón',
        grupo: 'Saprófito',
        descripcion: 'Gorro convexo de 50-90 mm, color blanco. Láminas libres y juntas, color rosado. Tallo cilíndrico blanco con anillo membranoso en posición intermedia. Olor terroso-dulce con notas de anís.',
        img: 'https://naturaleza.animalesbiologia.com/wp-content/uploads/2020/05/agaricus-campestris.jpg'

    },

    // Agaricus Brunnescens (Champiñón Portobello)
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'intermedio',
            color: 'marrón',
            laminas: 'libres',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'rosadas',
            color_tallo: 'blanco'

        },
        clasificacion: 'comestible',
        especie: 'Agaricus Brunnescens',
        nombre: 'Champiñón Portobello',
        grupo: 'Saprófito',
        descripcion: 'Gorro convexo grande (50-150 mm), color marrón. Láminas libres y juntas, rosadas que se vuelven marrón oscuro. Tallo cilíndrico blanco con anillo. Olor agradable dulce-terroso.',
        img: 'https://lacasadelassetas.com/blog/wp-content/uploads/2023/08/champinon-portobello-07.jpg'
    },

    // Amanita Muscaria (Matamoscas)
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'si tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'superior',
            color: 'rojo',
            laminas: 'libres',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'
        },
        clasificacion: 'no comestible',
        especie: 'Amanita Muscaria',
        nombre: 'Matamoscas',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo muy llamativo (80-200 mm) rojo con manchas blancas. Láminas blancas libres. Tallo blanco con anillo superior y volva en saco. Olor agradable-afrutado. ¡TOXICO!',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Amanita_muscaria_%281%29_%288692325426%29.jpg/500px-Amanita_muscaria_%281%29_%288692325426%29.jpg'
    },
    // Amanita Phalloides
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'si tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'superior',
            color: 'amarillo verdoso',
            laminas: 'libres',
            espacio_laminas: 'muy proximas',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'
        },
        clasificacion: 'no comestible',
        especie: 'Amanita Verna',
        nombre: 'Oronja verde',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo muy llamativo (80-200 mm) verdoso amarillento. Láminas blancas libres. Tallo blanco con anillo superior y volva en saco. Olor desagradable a dulce-miel ¡TOXICO!',
        img: 'https://micologica-barakaldo.org/wp-content/uploads/2019/10/Amanita-phalloides_20061015_008.jpg'
    },
        // Amanita Verna
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'si tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'superior',
            color: 'blanco',
            laminas: 'libres',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'
        },
        clasificacion: 'no comestible',
        especie: 'Amanita Verna',
        nombre: 'Amanita blanca mortal',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo muy llamativo (80-200 mm) blanco. Láminas blancas libres. Tallo blanco con anillo superior y volva en saco. Olor desagradable a dulce-miel  ¡TOXICO!',
        img: 'https://lacasadelassetas.com/blog/wp-content/uploads/2021/07/amanita-verna-la-casa-de-las-setas-03.jpg'
    },
        // Amanita Virosa
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'si tiene anillo',
            volva: 'si tiene volva',
            firmeza: 'firme',
            posicion_anillo: 'superior',
            color: 'blanco',
            laminas: 'libres',
            espacio_laminas: 'muy proximas',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'
        },
        clasificacion: 'no comestible',
        especie: 'Amanita Virosa',
        nombre: 'Ángel destructor',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo muy llamativo (80-200 mm) blanco. Láminas blancas libres. Tallo blanco con anillo superior y volva en saco. Olor desagradable a rafanoide  ¡TOXICO!',
        img: 'https://www.nybg.org/bsci/res/hall/virosa.jpg'

    },
    // Boletus Edulis (Cemita)
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            color: 'marrón',
            laminas: 'tubos',
            espacio_laminas: 'subdistantes',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'
        },
        clasificacion: 'comestible',
        especie: 'Boletus Edulis',
        nombre: 'Cemita',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo marron (70-200 mm) sin anillo. Poros blancos que se vuelven amarillo verdoso. Tallo cilindrico blanco y robusto. Olor agradable terroso con notas de avellanas.',
         img: 'https://picturemushroom.com/image-handle/image/1080/153773276781346829.jpeg?x-oss-process=image/format,webp/resize,s_300&v=1.0'

    },
    // Boletus satanas
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            color: 'crema',
            laminas: 'tubos',
            espacio_laminas: 'subdistantes',
            tallo: 'engrosado',
            color_laminas: 'rojo',
            color_tallo: 'rojo'
        },
        clasificacion: 'no comestible',
        especie: 'Boletus satanas',
        nombre: 'Hongo de Satanás',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo crema (70-200 mm) sin anillo. Poros rojos. Tallo cilíndrico rojo y robusto. Olor desagradable a carne podrida.',
         img: 'https://i.pinimg.com/736x/21/17/24/2117241bd2fcf974e85ec47f814aef4e.jpg'

    },
    // Cantharellus Cibarius (Rebozuelo)
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme-elastica',
            color: 'amarillo-anaranjado',
            laminas: 'decurrentes',
            espacio_laminas: 'distantes',
            tallo: 'cilindrico',
            color_laminas: 'amarillo',
            color_tallo: 'amarillo-anaranjado'
        },
        clasificacion: 'comestible',
        especie: 'Cantharellus Cibarius',
        nombre: 'Rebozuelo',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo amarillo-naranja (30-100 mm) sin anillo. Láminas decurrentes espaciadas del mismo color. Tallo cilíndrico amarillo. Olor afrutado con notas de melocotón.',
        img: 'https://m.media-amazon.com/images/I/51YY6mYqtHL._AC_.jpg'

    },
   

    // Cantharellus Lutescens (Angula de campo)
    {
        caracteristicas: {
            gorro: 'infundibuliforme',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'elastica',
            color: 'marrónamarillento',
            laminas: 'decurrentes',
            espacio_laminas: 'distantes',
            tallo: 'cilindrico',
            color_laminas: 'amarillo',
            color_tallo: 'amarillo brillante',
        },
        clasificacion: 'comestible',
        especie: 'Cantharellus Lutescens',
        nombre: 'Angula de campo',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro en forma infundibuliforme (20-60 mm) amarillo anaranjado. Láminas decurrentes espaciadas. Tallo cilíndrico (5-15 mm) amarillo brillante. Olor afrutado muy agradable. Comestible de gran calidad.',
         img: 'https://s1.ppllstatics.com/elcorreo/www/pre2017/multimedia/noticias/201510/22/media/cortadas/canthrellus-buena--575x323.jpg'

    },

    // Cortinarius Orellanus (Cortinariaceae)
    {
        caracteristicas: {
            gorro: 'conico',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'blanda',
            color: 'marrón rojizo',
            laminas: 'adnatas',
            espacio_laminas: 'subdistantes',
            tallo: 'cilindrico',
            color_laminas: 'marrón',
            color_tallo: 'crema',
        },
        clasificacion: 'no comestible',
        especie: 'Cortinarius Orellanus',
        nombre: 'Cortinariaceae',
        grupo: 'Saprófito',
        descripcion: 'Gorro cónico (20-50 mm) marrón rojizo con textura fibrilosa. Láminas adnatas espaciadas ocráceas. Tallo cilíndrico (5-15 mm) color crema con rojo. Velo tipo tela de araña. ¡ALTAMENTE TÓXICO!',
         img: 'https://www.fichasmicologicas.com/typo3temp/pics/f5593b525f.jpg'

    },

    // Cortinarius Trivialis (Cortinario viscoso azulado)
    {
        caracteristicas: {
            gorro: 'conico',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'elastica',
            color: 'amarillo-anaranjado',
            laminas: 'adnatas',
            espacio_laminas: 'muy proximas',
            tallo: 'cilindrico',
            color_laminas: 'crema',
            color_tallo: 'blanco',
        },
        clasificacion: 'no comestible',
        especie: 'Cortinarius Trivialis',
        nombre: 'Cortinario viscoso azulado',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro cónico (30-100 mm) viscoso, colores ocres. Láminas apretadas color crema. Tallo cilíndrico (10-25 mm)color blanco con restos de velo aracnoide. Olor terroso. No comestible.',
        img: 'https://www.mushroomexpert.com/images/nadon/nadon_cortinarius_trivialis.jpg'

    },

    // Craterellus Cornucopioides (Trompeta de los muertos)
    {
        caracteristicas: {
            gorro: 'infundibuliforme',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'fragil',
            posicion_anillo: null,
            color: 'negro',
            laminas: null,
            espacio_laminas: null,
            tallo: 'embudo',
            color_laminas: null,
            color_tallo: 'negro',
        },
        clasificacion: 'comestible',
        especie: 'Craterellus Cornucopioides',
        nombre: 'Trompeta de los muertos',
        grupo: 'Micorrizógeno',
        descripcion: 'Forma de trompeta negra (30-100 mm) con superficie lisa. Sin láminas. Tallo continuo en forma de embudo (10-30 mm). Olor agradable a ciruela pasa. Excelente comestible muy apreciado.',
        img: 'https://micoex.org/wp-content/uploads/stories/2-Craterellus-cornucopioides.jpg'

    },

    // Cyttaria Espinosae (Dihueñe) falta este
    {
        caracteristicas: {
            gorro: 'globosa',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'carnosa',
            color: 'crema',
            laminas: null,
            espacio_laminas: null,
            tallo: null,
            color_laminas: null,
            color_tallo: null,

        },
        clasificacion: 'comestible',
        especie: 'Cyttaria Espinosae',
        nombre: 'Dihueñe',
        grupo: 'Parásito',
        descripcion: 'Cuerpo fructífero globoso (20-80 mm) color crema, textura gomosa. Crece sobre árboles. Sin tallo visible. Olor apenas perceptible, dulce-afrutado. Comestible tradicional en Chile.',
        img: 'https://www.mdpi.com/jof/jof-11-00013/article_deploy/html/images/jof-11-00013-g002a-550.jpg'

    },
 { caracteristicas : 
    { 
        gorro :'cilindrico', 
        anillo : 'si tiene anillo', 
        volva : 'no tiene volva', 
        firmeza : 'tierna', 
        posicion_anillo : 'superior', 
        color : 'marrón rojizo', 
        laminas : 'decurrentes', 
        espacio_laminas : 'distantes', 
        tallo : 'cilindrico', 
        color_laminas : 'crema',
        color_tallo : 'marrón claro'
    }, 

        clasificacion : 'comestible', 
        especie : 'FlammulinaVelutipes', 
        nombre: 'Enoki', 
        grupo : 'Saprófito', 
        descripcion: 'Gorro convexo de 10-50 mm, color marrón rojizo, liso. Láminas decurrentes, espaciadas, color crema. Tallo cilíndrico marrón claro con anillo membranoso superior. Olor agradable, dulce y afrutado.',
        img: 'https://www.mushroomexpert.com/images/kuo2/flammulina_velutipes_02_thumb.jpg'

    },
        
        
    { caracteristicas : // falta este
            { 
        gorro :'cerebriforme', 
        anillo : 'no tiene anillo', 
        volva : 'no tiene volva', 
        firmeza : 'fragil', 
        posicion_anillo : null, 
        color : 'pardo-rojizo', 
        laminas : null, 
        espacio_laminas : null, 
        tallo : 'cilindrico', 
        color_laminas : null, 
        color_tallo : 'blanco'
    }, 
        clasificacion : 'no comestible', 
        especie : 'GyromitraEsculenta', 
        nombre : 'SetaCerebro-falsacolmenilla', 
        grupo : 'Saprófito', 
        descripcion: 'Gorro cerebriforme de 30-100 mm, color pardo claro o rojizo, arrugado. Tallo cilíndrico blanco o violáceo, sin anillo ni volva. Olor dulce, terroso y afrutado.',
        img: 'https://www.fichasmicologicas.com/typo3temp/pics/1da0a3c26b.jpg'

    },
        
        
         { caracteristicas : { gorro :'cilíndrico', 
        anillo : 'no tiene anillo', 
        volva : 'no tiene volva', 
        firmeza : 'quebradiza', 
        posicion_anillo : 'null', 
        color : ['marrónrojizo', 'marrónoscuro', 'marrónpurpúreo', 'negruzco'], 
        laminas : 'null', 
        espacio_laminas : 'null', 
        tallo : 'cilíndrico', color_laminas : 'null', 
        color_tallo : ['blanco', 'grisáceopálido', 'amarillopálido']}, 
        clasificación : 'false', 
        especie : 'GyromitraInfula', 
        nombre : 'OrejadeRatón', 
        grupo : 'Saprófito', 
        descripcion: 'Gorro en forma de silla de montar de 30-100 mm, color marrón rojizo, oscuro, purpúreo o negruzco, liso. Tallo cilíndrico blanco, grisáceo pálido o amarillo pálido, adherido, sin anillo ni volva. Olor terroso, afrutado o débil.' },
        
        
         { caracteristicas : { gorro :'cilíndrico', 
        anillo : 'si tiene anillo', 
        volva : 'no tiene volva', 
        firmeza : 'acuosa', 
        posicion_anillo : 'zonaanular', 
        color : ['amarillobrillante', 'naranja'], 
        laminas : 'decurrente', 
        espacio_laminas : 'espaciadas', 
        tallo : 'cilíndrico', color_laminas : 'amarillenta', 
        color_tallo : 'amarillobrillante'}, 
        clasificacion : 'true', 
        especie : 'HygrophorusHypothejus', 
        nombre : 'HeraldodelInvierno', 
        grupo : 'Micorrizógeno', 
        descripcion: 'Gorro en forma de embudo de 20-60 mm, color amarillo brillante o naranja, viscoso. Láminas decurrentes, espaciadas, color amarillenta. Tallo cilíndrico amarillo brillante con anillo viscoso en zona anular. Olor afrutado o inodoro.'},
        
        
         { 
        caracteristicas : { 
        gorro :'convexo', 
        anillo : 'no tiene anillo', 
        volva : 'no tiene volva', 
        firmeza : 'blanda', 
        posicion_anillo : null, 
        color : 'marrón', 
        laminas : 'decurrentes', 
        espacio_laminas : 'distantes', 
        tallo : 'curvado', 
        color_laminas : 'blanco', 
        color_tallo : 'blanco'
    }, 
        clasificacion : 'comestible', 
        especie : 'HygrophorusLatitabundus', 
        nombre: 'LlanegaNegra', 
        grupo : 'Micorrizógeno', 
        descripcion: 'Gorro convexo de 50-150 mm, color marrón amarillento, viscoso. Láminas decurrentes, espaciadas, color blanco a amarillento. Tallo curvado blanco con anillo membranoso superior. Olor agradable, afrutado y terroso.',
        img: 'https://www.micoaragon.es/img/cms/setas/Llanega%20negra%20(Hygrophorus%20latitabundus).jpg'

        },
        
//Lactarius Deliciosus
    {
        caracteristicas: {
            gorro: 'umbilicado',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            posicion_anillo: null,
            color: 'marrón anaranjado',
            laminas: 'decurrentes',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'naranja',
            color_tallo: 'naranja'

        },
        clasificacion: 'comestible',
        especie: 'Lactarius Deliciosus',
        nombre: 'Enchilado',
        grupo: 'Micorrizógeno',
        descripcion: ' hongo comestible con un característico sombrero de color naranja-zanahoria, a menudo con líneas concéntricas más oscuras. El sombrero es umbilicado, y su tamaño oscila entre 3 y 20 centímetros de ancho. Las láminas son anaranjadas. El látex que produce al cortarse es de color anaranjado y se mantiene. ',
        img: 'https://preview.redd.it/x4xeszu8nxva1.jpg?width=1080&crop=smart&auto=webp&s=f4b095f0dcad02919fdb3b881c70527e770bd287'
    
},

//Lactarius Indigo
    {
        caracteristicas: {
            gorro: 'umbilicado',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'quebradiza',
            posicion_anillo: null,
            color: 'azul indigo',
            laminas: 'decurrentes',
            espacio_laminas: 'proximas',
            tallo: 'cilindrico',
            color_laminas: 'azul indigo',
            color_tallo: 'azul indigo'

        },
        clasificacion: 'comestible',
        especie: 'Lactarius Indigo',
        nombre: 'Enchilado azul',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro convexo de 50-90 mm, color blanco. Láminas libres y juntas, color rosado. Tallo cilíndrico blanco con anillo membranoso en posición intermedia. Olor terroso-dulce con notas de anís y almendras.',
        img: 'https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/116878040_617149152270784_3410626904391273880_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeETYVwevGq4VFtdDdS8EgoftdVaqC-U-na11VqoL5T6dvCEeFJpRJo1HtgKlal5ccMzaBVLQBfTrWtN_jDcZbfK&_nc_ohc=GrHG9b9W6S8Q7kNvwEQMIxZ&_nc_oc=AdlbthCVLekmWVjWX_gjQtdDP2wrRlzHYIJtzcDam-5zcXYS_BODKCPmbk0jEMuydOv9R0FeR4KBSK382jwxsV5j&_nc_zt=23&_nc_ht=scontent.fmex31-1.fna&_nc_gid=4d0TVU7hBVapXUwhCQQpRQ&oh=00_AfJXpDD9It9SdSAocQPD60-hoS-tr26_uaKd47jRtX47eg&oe=684F39F6'
    
},

//Lentinula Edodes
    {
        caracteristicas: {
            gorro: 'convexo',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            posicion_anillo: null,
            color: 'marrón',
            laminas: 'decurrentes',
            espacio_laminas: 'muy proximas',
            tallo: 'cilindrico',
            color_laminas: 'crema',
            color_tallo: 'marrón claro'

        },
        clasificacion: 'comestible',
        especie: 'Lentinula Edodes',
        nombre: 'Shiitake',
        grupo: 'Saprófito',
        descripcion: 'Gorro convexo de 50-90 mm, color márron. Láminas decurrentes y muy próximas, color crema. Tallo cilíndrico marrón claro. Olor terroso y algo ahumado.',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lentinula_edodes.jpg/500px-Lentinula_edodes.jpg'
    
},

//Lepiota Boudieri
    {
        caracteristicas: {
            gorro: 'plano',
            anillo: 'si tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'fragil',
            posicion_anillo: 'superior',
            color: 'marrón amarillento',
            laminas: 'libres',
            espacio_laminas: 'muy proximas',
            tallo: 'cilindrico',
            color_laminas: 'blanco',
            color_tallo: 'marrón claro'

        },
        clasificacion: 'no comestible',
        especie: 'Lepiota Boudieri',
        nombre: null,
        grupo: 'Saprófito',
        descripcion: 'Gorro plano, color marrón amarillento. Láminas libres y muy próximas, color blanco. Tallo cilíndrico color marrón claro con anillo membranoso en posición superior. Olor desagradable.',
        img: 'https://www.aranzadi.eus/fileadmin/images/micologia/Eskaneatuak/09_digital/lepiota_boudieri_paa_091010_5041176.jpg'
    
},

//Morchella Elata
    {
        caracteristicas: {
            gorro: 'conico',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'elastica',
            posicion_anillo: null,
            color: 'marrón oscuro',
            laminas: null,
            espacio_laminas: null,
            tallo: 'cilindrico',
            color_laminas: null,
            color_tallo: 'crema'

        },
        clasificacion: 'comestible',
        especie: 'Morchella Elata',
        nombre: 'Morilla Colmenilla negra',
        grupo: 'Saprófito',
        descripcion: 'un sombrero en forma de colmena con nervaduras y hoyuelos color marrón, y un pie cilíndrico o ligeramente curvado, color crema, es elastico, olor  ligeramente dulce o afrutado y debe ser cocinada antes de consumir.',
        img: 'https://granadanatural.com/imagenes/hongos_fichas/morchela-elata--wl13206b-25032011.jpg'
    
},

//Morchella Esculenta
    {
        caracteristicas: {
            gorro: 'conico',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'fragil',
            posicion_anillo: null,
            color: 'ocre amarillento',
            laminas: null,
            espacio_laminas: null,
            tallo: 'cilindrico',
            color_laminas: null,
            color_tallo: 'crema'

        },
        clasificacion: 'comestible',
        especie: 'Morchella Esculenta',
        nombre: 'Colmenilla',
        grupo: 'Saprófito',
        descripcion: 'Su sombrero es de forma cónica , con una superficie que parece un panal o colmena, formada por hoyuelos. El tallo o estípite es color crema, y es cilindrico, con olor terroso a nuez.',
        img: 'https://www.fichasmicologicas.com/typo3temp/pics/f4f7a721fb.jpg'
    
},

//Pleurotus Osteatrus
    {
        caracteristicas: {
            gorro: 'ostra',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'dura',
            posicion_anillo: null,
            color: 'gris',
            laminas: 'decurrentes',
            espacio_laminas: 'muy proximas',
            tallo: 'excentrico',
            color_laminas: 'blanco',
            color_tallo: 'blanco'

        },
        clasificacion: 'comestible',
        especie: 'Pleurotus Osteatrus',
        nombre: 'Hongo ostra',
        grupo: 'Saprófito',
        descripcion: 'tiene un sombrero en forma de ostra, que puede alcanzar entre 5 y 15 cm de diámetro. Su color varía desde grises u ocre grisáceos hasta gris plateado. Tiene láminas decurrentes olor suave o similar al anís.',
        img: 'https://lacasadelassetas.com/blog/wp-content/uploads/2019/01/18-seta-de-ostra-pleurotus-ostreatus-lacasadelassetas.jpg'
    
},

//Pleurotus Spp
    {
        caracteristicas: {
            gorro: 'ostra',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'carnosa',
            posicion_anillo: null,
            color: 'marrón claro',
            laminas: 'decurrentes',
            espacio_laminas: 'muy proximas',
            tallo: 'excentrico',
            color_laminas: 'crema',
            color_tallo: 'blanco'

        },
        clasificacion: 'comestible',
        especie: 'Pleurotus Spp',
        nombre: 'Seta',
        grupo: 'Saprófito',
        descripcion: 'Gorro Forma de concha o ostra, con tamaño que varía entre especies y puede ser de 5 a 20 cm de diámetro, tallo excéntrico color blanco, Láminas: Delgadas, decurrentes y de color crema, olor a tierra o nueces.',
        img: 'https://shop.mushroommountain.com/cdn/shop/files/Brown_Oyster.jpg?v=1735592290&width=990'
    
},


    {    // Ramaria Botrytis
        caracteristicas: {
            gorro: 'ramificada',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            color: 'rojo',
            laminas: null,
            espacio_laminas: null,
            tallo: 'coral',
            color_laminas: null,
            color_tallo: 'blanco'
        },
        clasificacion: 'comestible',
        especie: 'Ramaria Botrytis',
        nombre: 'Hongo Coral',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro en forma de ramificacion (50-200 mm) color rojo. Tallo excéntrico blanco. Olor agradable afrutado.',
        img: 'https://micoex.org/wp-content/uploads/stories/Ramaria-botrytis11.jpg'
    
    },
        {    // Ramaria Flava
        caracteristicas: {
            gorro: 'ramificada',
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'firme',
            color: 'amarillo',
            laminas: null,
            espacio_laminas: null,
            tallo: 'coral',
            color_laminas: null,
            color_tallo: 'amarillo'
        },
        clasificacion: 'comestible',
        especie: 'Ramaria Flava',
        nombre: 'Manecillas',
        grupo: 'Micorrizógeno',
        descripcion: 'Gorro en forma de ramificacion (50-200 mm) color amarillo. Tallo excéntrico blanco. Olor agradable floral.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ramaria_flava_a1_%287%29.JPG/1200px-Ramaria_flava_a1_%287%29.JPG?20140830092426'
    
    },
        { // Ustilago Maydis
        caracteristicas: {
            gorro: null,
            anillo: 'no tiene anillo',
            volva: 'no tiene volva',
            firmeza: 'blanda',
            color: 'gris',
            laminas: null,
            espacio_laminas: null,
            tallo: null,
            color_laminas: null,
            color_tallo: null
        },
        clasificacion: 'comestible',
        especie: 'Ustilago Maydis',
        nombre: 'Huitlacoche',
        grupo: 'Parásito',
        descripcion: 'no tiene gorro, pero tiene un aspecto de una masa negra y comestible es color gris. Olor terroso.',
        img: 'https://panorama-agro.com/wp-content/uploads/2015/02/Ustilago-maydis-Howard-F.-Schwartz-Colorado-State-University-Bugwood.org_-1600x1082.jpg'
    
    },
];

// Motor de inferencia: busca en la base de conocimientos una regla que coincida exactamente con las características proporcionadas.
// Si encuentra una coincidencia, retorna la regla (especie de hongo); si no, retorna null.
function inferencia(caracteristicas) {
    for (const regla of baseConocimientos) {
        const coincide = Object.keys(regla.caracteristicas).every(key => {
            const valorRegla = regla.caracteristicas[key];
            const valorUsr = caracteristicas[key];
            // Si en la regla es null, no comparar, es un comodín
            if (valorRegla === null || valorRegla === undefined) return true;
            // Si es array en la regla, permite coincidencia múltiple
            if (Array.isArray(valorRegla)) {
                return valorRegla.includes(valorUsr);
            }
            // Si el usuario deja campo vacío, solo coincide con null
            if (valorUsr === "" || valorUsr === undefined) return false;
            // Comparación normal (case insensitive)
            return (valorRegla + "").toLowerCase() === (valorUsr + "").toLowerCase();
        });
        if (coincide) return regla;
    }
    return null;
}

// Manejador del formulario de identificación de hongos
// Se ejecuta cuando el usuario envía el formulario para identificar un hongo
document.getElementById('hongoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtiene los valores de las características ingresadas por el usuario en el formulario
    const caracteristicas = {
        gorro: document.getElementById('gorro').value,
        anillo: document.getElementById('anillo').value,
        volva: document.getElementById('volva').value,
        firmeza: document.getElementById('firmeza').value,
        posicion_anillo: document.getElementById('posicion_anillo').value,
        color: document.getElementById('color').value,
        laminas: document.getElementById('laminas').value,
        espacio_laminas: document.getElementById('espacio_laminas').value,
        tallo: document.getElementById('tallo').value,
        color_laminas: document.getElementById('color_laminas').value,
        color_tallo: document.getElementById('color_tallo').value,
    };

    // Llama al motor de inferencia para buscar una coincidencia en la base de conocimientos
    const resultado = inferencia(caracteristicas);
    
    if (resultado) {
        // Si se encuentra una especie, muestra la información en la interfaz
        document.getElementById('resultado').textContent = '';
        document.getElementById('especie').textContent = resultado.especie || '';
        document.getElementById('nombre').textContent = resultado.nombre || '';
        document.getElementById('grupo').textContent = resultado.grupo || '';
        document.getElementById('caracteristicas').textContent = resultado.descripcion || '';
        document.getElementById('comestibilidad').textContent = `Comestibilidad: ${resultado.clasificacion }`;
        document.getElementById('especie-info').classList.remove('caracteristicas_esp');
         document.getElementById('imagen').src = resultado.img;
    } else {
        // Si no se encuentra, muestra un mensaje de error
        document.getElementById('resultado').textContent = 'No se encontró una clasificación para este hongo.';
        document.getElementById('especie-info').classList.add('caracteristicas_esp');
    }
});

// Manejador del formulario para agregar nuevas reglas (adquisición de conocimiento)
// Permite al usuario añadir una nueva especie de hongo a la base de conocimientos
document.getElementById('reglaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtiene los valores ingresados por el usuario
    const caracteristicasInput = document.getElementById('caracteristicas').value;
    const especie = document.getElementById('especie').value;
    const nombre = document.getElementById('nombre').value;
    const grupo = document.getElementById('grupo').value;
    const descripcion = document.getElementById('descripcion').value;
    const comestibilidad = document.getElementById('comestibilidad').value;
    const img = document.getElementById('imagen').value;
o



});