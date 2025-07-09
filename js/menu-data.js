export const menuElementos ={
    alimentos:{
        Desayunos:{
            Huevos: [
                {
                    id:1,
                    name: "Omelette de jamón y queso Monterrey Jack",
                    description: "2 huevos batidos, rellenos de champiñones, tomate cherry y queso Monterrey Jack acompañados de salsa a elegir (roja o verde) frijoles refritos y totoposte de la región",
                    price: 90.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "/assets/ommelette.jpg",
                    opciones:{
                        salsas: ["roja","verde"]
                    }
                },
                {
                    id:2,
                    name: "Huevos clasicos",
                    description: "2 huevos revueltos con jamón de pavo acompañados de frijoles fritos platanos y totoposte de la región",
                    price: 80.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos2.png"
                },
                {
                    id:3,
                    name: "Huevos beef",
                    description: "2 huevos revueltos con salchicha de res acompañados de frijoles fritos platanos y totoposte de la región",
                    price: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos.png"
                },
                {
                    id:4,
                    name: "Huevos a la Mexicana",
                    description: "2 huevos revueltos con tomate, cebolla y chile serrano acompañados de frijoles fritos platanos y totoposte de la región",
                    price: 80.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos.png"
                },
                {
                    id:5,
                    name: "Huevos Jabali",
                    description: "2 huevos revueltos con longaniza de la región  acompañados de frijoles fritos platanos y totoposte de la región",
                    price: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos.png"
                },
                {
                    id:6,
                    name: "Huevos clasicos",
                    description: "2 huevos revueltos con jamón de pavo acompañados de frijoles fritos platanos y totoposte de la región",
                    price: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos.png"
                },
                {
                    id:7,
                    name: "Huevos Motuleños",
                    description: "2 huevos estrellados sobre una cama de tortilla, queso y jamón, bañados con salsa a elegir (verde o roja) y chicharos, acompañados de frijoles fritos y platanos fritos.",
                    price: 100.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "../assets/huevos.png",
                    opciones:{
                        salsas: ["roja","verde"]
                    }
                },
            ],
            Chilaquiles:[
                {
                    id:8,
                    name: "Chilaquiles rojos o verdes",
                    description: "Tortilla frita bañada con la salsa de su preferencia, crema, queso Monterrey Jack, aguacate y cebolla curtida.",
                    price: 100.00,
                    horario: "7:30 AM - 1:30PM",
                    image: "/assets/chilaquiles.png",
                    proteinas: {
                        "Huevo": 15.00,
                        "pollo": 20.00,
                        "Sirloin": 20.00,
                        "Chicharron": 30.00
                    }, 
                    opciones:{
                        salsas: ["roja","verde"]
                    }
                }
            ]
        },
        Especiales:{
            Toast:[
                {
                   id:9,
                    name: "Jamon Serrano",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de aguacate, queso crema Tomate cherry, hojas verdes y aderezo de la casa",
                    price: 90.00,
                    image: "/assets/toastjamon.png"
                },
                {
                   id:10,
                    name: "Salmon Ahumado",
                    description: "2 rebanadas de masa madre con semillas montado en una cama de huacamole, queso crema tomate cherry, hojas verdes y aderezo de la casa.",
                    price: 100.00,
                    image: "/assets/toastsalmon.png"
                },
                {
                   id:11,
                    name: "Huevos estrellados",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de aguacate, queso crema Tomate cherry, hojas verdes y aderezo de la casa",
                    price: 90.00,
                    image: "/assets/toasthuevo.png"
                },
                {
                   id:12,
                    name: "Dulces",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de queso crema con coulis de frutas(durazno, fresa, maracuya, piña o moras)",
                    price: 75.00,
                    image: "/assets/dulces.png"
                },

            ],
            Bagels:[
                {
                   id:13,
                    name: "Jamon Serrano",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    price: 85.00,
                    image: "/assets/dulces.png"
                },
                {
                   id:14,
                    name: "Slamon ahumado",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    price: 95.00,
                    image: "/assets/bagelsalmon.png"
                },
                {
                   id:15,
                    name: "Huevos estrellados",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    price: 85.00,
                    image: "/assets/bagelhuevo.png"
                },
                {
                   id:16,
                    name: "Clasico",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    price: 80.00,
                    image: "/assets/dulces.png"
                },
                
            ],
            Dogopizza:[
                {
                    id:17,
                    name: "Champiñon",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    price: 75.00,
                    image: "/assets/hotdogcham.png"
                },
                {
                    id:18,
                    name: "Hawaiano",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    price: 75.00,
                    image: "/assets/hot.png"
                },
                {
                    id:19,
                    name: "Pepperoni",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    price: 75.00,
                    image: "/assets/hot.png"
                },
            ],
            Ensalada:[
                {
                    id:20,
                    name: "Espresso",
                    description: "Mezcla de espinaca baby, bolitas de queso crema, arandanos deshidratados, nueces, trozoa de durazno y aderezo de miel con mostaza.",
                    price: 75.00,
                    image: "/assets/Ensalada.png"
                },
            ]
        }
    }
}


export const menuElementosX = {
//!!!!!!!!!!!!!!!!!!!!!!!!!!! BEBIDAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
bebida:{
    especiales:{
        shots:[
            {id:60,name:"Affogato",description:"Helado doble de vainilla con un shot de espresso.",price:70,image:"/assets/logo-verde.png"},
            {id:61,name:"Affogato especial",description:"Helado doble con un shot de espresso y un shot de Baileys",price:80,image:"/assets/logo-verde.png"},
            {id:62,name:"Calimocho",description:"Vino espumo lambrusco, Coca-Cola y rodajas de limón",price:70,image:"/assets/logo-verde.png"},
            {id:63,name:"Carajillo",description:"Mezcla de licor especiado con espresso doble.",price:70,image:"/assets/logo-verde.png"},
            {id:64,name:"Carajillo especial",description:"Mezcla de licor especiado con espresso doble y con un shot de Baileys.",price:80,image:"/assets/logo-verde.png"},
            {id:65,name:"Tinto de verano",description:"Vino espumo lambrusco, shot de limón, agua mineral y Gingerale",price:70,image:"/assets/logo-verde.png"},
        ]
    },
    extras:{
        productosExtras:[
            {id:21,name:"Palomitas",description:"Una bebida recomendada por la casa",price:25,image:"/assets/logo-verde.png"},
            {id:66,name:"Agua",description:"Una bebida recomendada por la casa",price:16,image:"/assets/logo-verde.png"},
            {id:67,name:"Amper, agua de coco",description:"Una bebida recomendada por la casa",price:37,image:"/assets/logo-verde.png"},
            {id:68,name:"Cambio de leche",description:"Una bebida recomendada por la casa",price:12,image:"/assets/logo-verde.png"},
            {id:69,name:"Jugos",description:"Una bebida recomendada por la casa",price:18,image:"/assets/logo-verde.png"},
            {id:70,name:"Powerade",description:"Una bebida recomendada por la casa",price:30,image:"/assets/logo-verde.png"},
            {id:71,name:"Refresco, agua mineral",description:"Una bebida recomendada por la casa",price:25,image:"/assets/logo-verde.png"},
            {id:72,name:"Shot extra café",description:"Una bebida recomendada por la casa",price:15,image:"/assets/logo-verde.png"},
        ]
    },
    calientes:{
        bebidasCalientes:[
            {id:22,name:"Americano",description:"Una bebida recomendada por la casa",price:45,image:"/assets/logo-verde.png"},
            {id:23,name:"Chocolate",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:24,name:"Dirty chai latte",description:"Una bebida recomendada por la casa",price:70,image:"/assets/logo-verde.png"},
            {id:25,name:"Español latte",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:26,name:"Espresso",description:"Una bebida recomendada por la casa",price:30,image:"/assets/logo-verde.png"},
            {id:27,name:"Espresso doble cortado",description:"Una bebida recomendada por la casa",price:40,image:"/assets/logo-verde.png"},
            {id:28,name:"Filtrado de especialidad",description:"Método de extracción: V60, Chemex o prensa francesa.",price:70,image:"/assets/logo-verde.png"},
            {id:29,name:"Latte",description:"Una bebida recomendada por la casa",price:60,image:"/assets/logo-verde.png"},
            {id:30,name:"Latte con sabor",description:"Mocca, cajeta, crema irlandesa, vainilla, caramelo.",price:65,image:"/assets/logo-verde.png"},
            {id:31,name:"Matcha latte",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:32,name:"Taro latte",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:33,name:"Tizana",description:"Una bebida recomendada por la casa",price:55,image:"/assets/logo-verde.png"},
        ]
    },
    frias:{
        frozen:[
            {id:44,name:"Chai vainilla frozen",description:"Una bebida recomendada por la casa",price:85,image:"/assets/logo-verde.png"},
            {id:45,name:"Fresa yogurt",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:46,name:"Frutos rojos yogurt",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:47,name:"Maracoco yogurt",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:48,name:"Maracuyá yogurt",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:49,name:"Matcha Frozen",description:"Una bebida recomendada por la casa",price:85,image:"/assets/logo-verde.png"},
            {id:50,name:"Taro frozen",description:"Una bebida recomendada por la casa",price:85,image:"/assets/logo-verde.png"},
            {id:51,name:"Zarzamora yogurt",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
        ],
        refresh:[
            {id:56,name:"Fresa refresh",description:"Base a elegir: limonada, agua mineral o leche.",price:55,image:"/assets/logo-verde.png"},
            {id:57,name:"Mango refresh",description:"Base a elegir: limonada, agua mineral o leche.",price:55,image:"/assets/logo-verde.png"},
            {id:58,name:"Manzana verde refresh",description:"Base a elegir: limonada, agua mineral o leche.",price:55,image:"/assets/logo-verde.png"},
            {id:59,name:"Moras refresh",description:"Base a elegir: limonada, agua mineral o leche.",price:55,image:"/assets/logo-verde.png"},
        ],
        bebidasFrias:[
            {id:34,name:"Americano frío",description:"Una bebida recomendada por la casa",price:50,image:"/assets/logo-verde.png"},
            {id:35,name:"Español latte frío",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:36,name:"Late frío con sabor",description:"Mocca, cajeta, crema irlandesa, vainilla, caramelo.",price:65,image:"/assets/logo-verde.png"},
            {id:37,name:"Latte frío",description:"Una bebida recomendada por la casa",price:60,image:"/assets/logo-verde.png"},
            {id:38,name:"Matcha / coco latte frío",description:"Una bebida recomendada por la casa",price:80,image:"/assets/logo-verde.png"},
            {id:39,name:"Matcha / fresa latte frío",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:40,name:"Matcha latte frío",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
            {id:41,name:"Taro / coco latte frío",description:"Una bebida recomendada por la casa",price:80,image:"/assets/logo-verde.png"},
            {id:42,name:"Taro / fresa latte frío",description:"Una bebida recomendada por la casa",price:75,image:"/assets/logo-verde.png"},
            {id:43,name:"Taro latte frío",description:"Una bebida recomendada por la casa",price:65,image:"/assets/logo-verde.png"},
        ],
        preWorkout:[
            {id:52,name:"Cold brew Gingerale",description:"Una bebida recomendada por la casa",price:70,image:"/assets/logo-verde.png"},
            {id:53,name:"Cold brew latte",description:"Una bebida recomendada por la casa",price:70,image:"/assets/logo-verde.png"},
            {id:54,name:"Cold brew Sunrise",description:"Una bebida recomendada por la casa",price:70,image:"/assets/logo-verde.png"},
            {id:55,name:"Monster americano",description:"Una bebida recomendada por la casa",price:70,image:"/assets/logo-verde.png"},
        ]
    }
},
//!!!!!!!!!!!!!!!!!!!!!!!!!!! COMIDA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
comida:{
    desayunos:{
    chilaquiles:[
        {id:1,name:"Rojos o verdes",description:"Tortilla frita bañada con salsa de su preferencia, crema, queso Monterrey Jack, aguacate y cebolla curtida. Proteína a elegir: huevo, pollo, sirloin o chicharrón",price:80,image:"/assets/chilaquiles.png"},
    ],
    huevos:[
        {id:2,name:"Huevos a la mexicana",description:"Un par de huevos revueltos con tomate, cebolla y chile serrano. Acompañados de frijoles fritos, plátanos y totospote de la región",price:80,image:"/assets/huevos2.png"},
        {id:3,name:"Huevos Beef",description:"Un par de huevos revueltos con salchicha de res. Acompañados de frijoles fritos, plátanos y totoposte de la región.",price:85,image:"/assets/huevos.png"},
        {id:4,name:"Huevos clásicos",description:"Un par de huevos revueltos con jamón de pavo. Acompañados de frijoles fritos, plátanos y totoposte de la región.",price:80,image:"/assets/huevos.png"},
        {id:5,name:"Huevos jabalí",description:"Un par de huevos revueltos con longaniza de la región. Acompañados de frijoles fritos, plátanos y totoposte de la región.",price:85,image:"/assets/huevos2.png"},
        {id:6,name:"Huevos motuleños",description:"Un par de huevos estrellados sobre una cama de tortilla, queso y jamón, bañados con salsa a elegir (verde o roja) y chícharos. Acompañados de frijoles fritos, plátano frito.",price:100,image:"/assets/huevos2.png"},
        {id:7,name:"Omelette de espinacas",description:"Un par de huevos batidos, rellenos de champiñones, tomate cherry y queso Monterrey Jack. Acompañados de salsa a elegir (roja o verde), frijoles refritos y totoposte de la región.",price:90,image:"/assets/ommelette.jpg"},
        {id:8,name:"Omelette de jamón y queso Monterrey Jack",description:"Un par de huevos acompañados de salsa a elegir (roja o verde). Frijoles refritos y totoposte de la región.",price:90,image:"/assets/ommelette.jpg"},
    ]
    },
    especiales:{
    bagels:[
        {id:9,name:"Clásico",description:"Una pieza de bagels de parmesano con dos rebanadas de jamón, queso Monterrey Jack, hojas verdes y aderezo de la casa.",price:80,image:"/assets/bagelhuevo.png"},
        {id:10,name:"Huevos estrellados",description:"Una pieza de bagels de parmesano. Montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",price:85,image:"/assets/bagelhuevo.png"},
        {id:11,name:"Jamón serrano",description:"Una pieza de bagels de parmesano. Montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",price:85,image:"/assets/bagelhuevo.png"},
        {id:12,name:"Salmón ahumado",description:"Una pieza de bagels de parmesano. Montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",price:95,image:"/assets/bagelsalmon.png"},
    ],
    dogopizza:[
        {id:13,name:"Champiñón",description:"Combinación de hotdog con nuestra salsa para pizza. Cubierto de queso Monterrey Jack y aderezo de la casa.",price:75,image:"/assets/hotdogcham.png"},
        {id:14,name:"Hawaiano",description:"Combinación de hotdog con nuestra salsa para pizza. Cubierto de queso Monterrey Jack y aderezo de la casa.",price:75,image:"/assets/hot.png"},
        {id:15,name:"Pepperoni",description:"Combinación de hotdog con nuestra salsa para pizza. Cubierto de queso Monterrey Jack y aderezo de la casa.",price:75,image:"/assets/hot.png"},
    ],
    ensalada:[
        {id:16,name:"Espresso",description:"Mezcla de espinaca baby, bolitas de queso crema, arándanos deshidratados, nueces, trozos de durazno y aderezo de miel con mostaza.",price:85,image:"/assets/Ensalada.png"},
    ],
    toast:[
        {id:17,name:"Dulces",description:"Un par de rebenadas de pan de masa madre con semillas. Montado sobre una cama de queso crema con coulis de frutas (durazno, fresa, maracuyá, piña o moras).",price:75,image:"/assets/dulces.png"},
        {id:18,name:"Huevos estrellados",description:"Un par de rebanadas de masa madre con semillas. Montado en una cama de guacamole, queso crema, tomate cherry, hojas verdes y aderezo de la casa.",price:90,image:"/assets/toasthuevo.png"},
        {id:19,name:"Jamón serrano",description:"Un par de rebanadas de masa madre con semillas. Montado en una cama de guacamole, queso crema, tomate cherry, hojas verdes y aderezo de la casa.",price:90,image:"/assets/toastjamon.png"},
        {id:20,name:"Salmón ahumado",description:"Un par de rebanadas de masa madre con semillas. Montado en una cama de guacamole, queso crema, tomate cherry, hojas verdes y aderezo de la casa.",price:100,image:"/assets/toastsalmon.png"},
    ]},
    },
//!!!!!!!!!!!!!!!!!!!!!!!!!!! EXTRAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
extras:{
    productosExtras:[
        {id:21,name:"Palomitas",description:"Una bebida recomendada por la casa",price:25,image:"/assets/logo-verde.png"},
        {id:66,name:"Agua",description:"Una bebida recomendada por la casa",price:16,image:"/assets/logo-verde.png"},
        {id:67,name:"Amper, agua de coco",description:"Una bebida recomendada por la casa",price:37,image:"/assets/logo-verde.png"},
        {id:68,name:"Cambio de leche",description:"Una bebida recomendada por la casa",price:12,image:"/assets/logo-verde.png"},
        {id:69,name:"Jugos",description:"Una bebida recomendada por la casa",price:18,image:"/assets/logo-verde.png"},
        {id:70,name:"Powerade",description:"Una bebida recomendada por la casa",price:30,image:"/assets/logo-verde.png"},
        {id:71,name:"Refresco, agua mineral",description:"Una bebida recomendada por la casa",price:25,image:"/assets/logo-verde.png"},
        {id:72,name:"Shot extra café",description:"Una bebida recomendada por la casa",price:15,image:"/assets/logo-verde.png"},
    ]
}
}
