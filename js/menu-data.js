export const menuElementos ={
    alimentos:{
        Desayunos:{
            Huevos: [
                {
                    id:1,
                    nombre: "Omelette de jamón y queso Monterrey Jack",
                    description: "2 huevos batidos, rellenos de champiñones, tomate cherry y queso Monterrey Jack acompañados de salsa a elegir (roja o verde) frijoles refritos y totoposte de la región",
                    precio: 90.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "/assets/ommelette.jpg",
                    opciones:{
                        salsas: ["roja","verde"]
                    }
                },
                {
                    id:2,
                    nombre: "Huevos clasicos",
                    description: "2 huevos revueltos con jamón de pavo acompañados de frijoles fritos platanos y totoposte de la región",
                    precio: 80.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos2.png"
                },
                {
                    id:3,
                    nombre: "Huevos beef",
                    description: "2 huevos revueltos con salchicha de res acompañados de frijoles fritos platanos y totoposte de la región",
                    precio: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos.png"
                },
                {
                    id:4,
                    nombre: "Huevos a la Mexicana",
                    description: "2 huevos revueltos con tomate, cebolla y chile serrano acompañados de frijoles fritos platanos y totoposte de la región",
                    precio: 80.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos.png"
                },
                {
                    id:5,
                    nombre: "Huevos Jabali",
                    description: "2 huevos revueltos con longaniza de la región  acompañados de frijoles fritos platanos y totoposte de la región",
                    precio: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos.png"
                },
                {
                    id:6,
                    nombre: "Huevos clasicos",
                    description: "2 huevos revueltos con jamón de pavo acompañados de frijoles fritos platanos y totoposte de la región",
                    precio: 85.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos.png"
                },
                {
                    id:7,
                    nombre: "Huevos Motuleños",
                    description: "2 huevos estrellados sobre una cama de tortilla, queso y jamón, bañados con salsa a elegir (verde o roja) y chicharos, acompañados de frijoles fritos y platanos fritos.",
                    precio: 100.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "../assets/huevos.png",
                    opciones:{
                        salsas: ["roja","verde"]
                    }
                },
            ],
            Chilaquiles:[
                {
                    id:8,
                    nombre: "Chilaquiles rojos o verdes",
                    description: "Tortilla frita bañada con la salsa de su preferencia, crema, queso Monterrey Jack, aguacate y cebolla curtida.",
                    precio: 100.00,
                    horario: "7:30 AM - 1:30PM",
                    imagen: "/assets/chilaquiles.png",
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
                    nombre: "Jamon Serrano",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de aguacate, queso crema Tomate cherry, hojas verdes y aderezo de la casa",
                    precio: 90.00,
                    imagen: "/assets/toastjamon.png"
                },
                {
                   id:10,
                    nombre: "Salmon Ahumado",
                    description: "2 rebanadas de masa madre con semillas montado en una cama de huacamole, queso crema tomate cherry, hojas verdes y aderezo de la casa.",
                    precio: 100.00,
                    imagen: "/assets/toastsalmon.png"
                },
                {
                   id:11,
                    nombre: "Huevos estrellados",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de aguacate, queso crema Tomate cherry, hojas verdes y aderezo de la casa",
                    precio: 90.00,
                    imagen: "/assets/toasthuevo.png"
                },
                {
                   id:12,
                    nombre: "Dulces",
                    description: "2 rebanadas de pan de masa madre con semillas Montado en una cama de queso crema con coulis de frutas(durazno, fresa, maracuya, piña o moras)",
                    precio: 75.00,
                    imagen: "/assets/dulces.png"
                },

            ],
            Bagels:[
                {
                   id:13,
                    nombre: "Jamon Serrano",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    precio: 85.00,
                    imagen: "/assets/dulces.png"
                },
                {
                   id:14,
                    nombre: "Slamon ahumado",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    precio: 95.00,
                    imagen: "/assets/bagelsalmon.png"
                },
                {
                   id:15,
                    nombre: "Huevos estrellados",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    precio: 85.00,
                    imagen: "/assets/bagelhuevo.png"
                },
                {
                   id:16,
                    nombre: "Clasico",
                    description: "1 pieza de bagels de parmesano, montado en una cama de guacamole, queso crema, hojas verdes y aderezo de la casa.",
                    precio: 80.00,
                    imagen: "/assets/dulces.png"
                },
                
            ],
            Dogopizza:[
                {
                    id:17,
                    nombre: "Champiñon",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    precio: 75.00,
                    imagen: "/assets/hotdogcham.png"
                },
                {
                    id:18,
                    nombre: "Hawaiano",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    precio: 75.00,
                    imagen: "/assets/hot.png"
                },
                {
                    id:19,
                    nombre: "Pepperoni",
                    description: "Combinación de hotdog con nuestra salsa para pizza, cubierto de queso Monterrey Jack y aderezo de la casa",
                    precio: 75.00,
                    imagen: "/assets/hot.png"
                },
            ],
            Ensalada:[
                {
                    id:20,
                    nombre: "Espresso",
                    description: "Mezcla de espinaca baby, bolitas de queso crema, arandanos deshidratados, nueces, trozoa de durazno y aderezo de miel con mostaza.",
                    precio: 75.00,
                    imagen: "/assets/Ensalada.png"
                },
            ]
        }
    }
}
