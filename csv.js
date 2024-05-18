const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

const data = [
    {
        "title": "JERK CHICKEN",
        "price": "24,39 $",
        "description": "servi avec riz et salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%25227c7c3541-5df6-4b90-8ad2-933bdfed2ff4%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/3124af4012ab11d67fbb69880e724535/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "SANDWICHS",
        "price": "20,49 $",
        "description": "Servi avec frites, sauce et salade de chou",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%2522257c6c70-c397-41ab-815e-be95e1d9c867%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/62bcda6e1a47b983ac97cf42f4090083/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Pilon Frits",
        "price": "18,81 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%252217e063a7-bb5c-4cf6-993a-cd89529b706d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9d1224aa9a7738a67fd90b1b0161358c/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Lanière",
        "price": "17,25 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%2522a186a376-e943-4331-8b1e-096556eb9241%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/5a7c2ef49c8178077ad0dee5b05f8596/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Ailes",
        "price": "21,79 $",
        "description": "Plongez dans la saveur avec nos ailes, parfaites pour satisfaire vos envies avec une variété de sauces et d'assaisonnements savoureux.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%25220feaca48-b851-4189-95fe-84d79778f076%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/50b523d630400d1cd4889537116890f2/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Croquettes",
        "price": "17,89 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%25221cf29313-e4ba-4f14-9e54-df9a654ab9b8%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/7bed65901a4aaa97dbdb83f7324d6945/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "PATE JAMAICAN",
        "price": "4,90 $",
        "description": "Découvrez les saveurs des Caraïbes avec notre Pâté Jamaïcain, une délicieuse pâtisserie farcie de viande épicée ou de légumes, enveloppée dans une croûte dorée et feuilletée. Parfait pour une collation rapide ou un repas satisfaisant à emporter.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%2522451240f3-91e3-40bc-ab8b-32a412da6c6b%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e5cd53db332f18b7d663b2370575d3fd/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Choix du Chef",
        "price": "20,50 $",
        "description": "Repas cuisse ou poitrine au choix du chef",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%2522011f9901-a129-4ad6-a0b2-88ba991dbe7d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/dade7d87d9a526399e4ebdf81262a5a6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "A Cotes (Extra)",
        "price": "Prix établi en fonction des ajouts",
        "description": "Découvrez la meilleure sélection d'entrées et d'accompagnements dans notre restaurant de rôtisserie. Laissez-vous tenter par des viandes rôties succulentes, parfaitement assaisonnées et découpées à la perfection. Complétez votre plat principal avec notre gamme d'accompagnements délicieux, des salades croquantes aux légumes rôtis savoureux. Chaque plat est préparé avec expertise pour combler vos envies et sublimer votre expérience culinaire",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%25229a8ac56b-c2be-45fb-b55f-bf28b87a6663%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "ENFANTS",
        "price": "13,34 $",
        "description": "Servi avec frites, sauce et pain à l' exception de la mini poutine aux croquettes",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224af272a2-450d-4ad3-ae8b-393f93af1380%2522%252C%2522itemUuid%2522%253A%25221d67af39-6358-443c-b48e-dcb8c8ed8d57%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Asiettes",
        "price": "16,59 $",
        "description": "Toutes les assiettes sont servies avec tomates, navets, poivrons,\nainsi que votre choix d'accompagnement, salade et sauce.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d3ede294-37d4-4206-8499-33460c70d340%2522%252C%2522itemUuid%2522%253A%2522cda5e3d2-bc4f-47a0-9012-fcc603e4c43f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/166440b1226c2090d7a08b5585b088b0/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Pita / Fajitas",
        "price": "8,79 $",
        "description": "Toutes nos pita sont servi avec tomates, navets, poivrons, Pita /Fajitas",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d3ede294-37d4-4206-8499-33460c70d340%2522%252C%2522itemUuid%2522%253A%2522f7b63ccf-9fe1-495f-97ce-3154006cb6ba%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/fb57728e4c50d64dfc5e611872e82871/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Combos Libanais",
        "price": "20,50 $",
        "description": "Découvrez une explosion de saveurs méditerranéennes avec nos délicieux combos libanais. Chaque plat est soigneusement préparé pour offrir une expérience culinaire authentique et satisfaisante. Choisissez parmi une sélection de viandes savoureuses telles que le poulet grillé, l'agneau épicé ou le bœuf tendre, accompagnées de riz parfumé, de pommes de terre rôties et d'une salade fraîche. Que vous optiez pour notre combo au poulet, à l'agneau ou au bœuf, chaque bouchée vous transporte au cœur du Liban avec ses arômes exotiques et ses délices méditerranéens.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d3ede294-37d4-4206-8499-33460c70d340%2522%252C%2522itemUuid%2522%253A%2522c7fde4d1-7baf-474a-a2ca-751652d4d45f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/6e0495fc6a9be735c9da2455da352b5f/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Trios Libanais",
        "price": "14,33 $",
        "description": "Découvrez la délicieuse fusion de saveurs méditerranéennes avec nos Trios Libanais. Chaque wrap est soigneusement préparé pour offrir une expérience culinaire authentique et satisfaisante. Choisissez parmi une variété de délicieuses options, comme notre poulet grillé, notre agneau épicé ou notre falafel croustillant, enveloppés dans un pain pita chaud et moelleux et accompagnés de garnitures fraîches telles que la laitue, les tomates et le concombre. Savourez notre Trio Libanais pour une explosion de saveurs exotiques qui vous transporte directement au cœur du Moyen-Orient.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d3ede294-37d4-4206-8499-33460c70d340%2522%252C%2522itemUuid%2522%253A%25221664c286-0d0a-43b8-b592-42470b198ba5%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/1cf9b1470db930bef233a0072f335bc9/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Pizza",
        "price": "16,59 $",
        "description": "Each pizza is crafted with a crispy golden crust, topped with our homemade tomato sauce and melty cheese. Choose from a variety of delicious toppings, such as spicy pepperoni, fresh mushrooms, colorful peppers, and much more. Whether you're a meat lover, a veggie enthusiast, or a cheese aficionado, we have the perfect pizza to satisfy all your cravings. Indulge in our pizza for an explosion of Italian flavors that transports you straight to Italy, where every bite is an unforgettable culinary journey.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d087d0b9-5b97-4ce0-a8df-6a6b3b15c887%2522%252C%2522itemUuid%2522%253A%2522b5e2c6fc-d4c3-4b61-a7f5-d762251705c2%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/dc83789ec00cc5b6b9fa345d0171c093/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Poutine",
        "price": "11,40 $",
        "description": "Laissez-vous tenter par le classique canadien composé de frites croustillantes, de sauce onctueuse et de fromage en grains, créant une délicieuse expérience à chaque bouchée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d087d0b9-5b97-4ce0-a8df-6a6b3b15c887%2522%252C%2522itemUuid%2522%253A%2522e3ab7b7a-1f17-4337-be15-e6d8fb64bb1e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/1d1b7725b12b20b1ad83154be6a90fcd/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Jambon",
        "price": "3,75 $",
        "description": "Ajoutez une touche savoureuse à votre plat avec notre sélection d'options de jambon de qualité ! Choisissez parmi du jambon tranché finement et glacé au miel, du jambon de la Forêt-Noire fumé, ou du jambon de Virginie classique pour rehausser votre sandwich, votre salade, ou votre plateau de petit-déjeuner. Que vous ayez envie d'un délicieux croque-monsieur au jambon et au fromage ou d'une rafraîchissante salade de chef, nos extras de jambon ajouteront une saveur délicieuse à votre repas.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225c4e80c6-ffcd-4628-8e46-4d12371c221d%2522%252C%2522itemUuid%2522%253A%2522da9572c8-7e9f-4e12-99a8-6e00222ce782%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/1a34cd6c74183c7efaacdad36540265c/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Oeuf",
        "price": "2,75 $",
        "description": "Ajoutez de la protéine et de la saveur à votre repas avec notre sélection d'options d'œufs ! Choisissez parmi des œufs brouillés frais de la ferme, des œufs pochés parfaits, ou des œufs au plat pour compléter votre sandwich, votre salade ou votre burger.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225c4e80c6-ffcd-4628-8e46-4d12371c221d%2522%252C%2522itemUuid%2522%253A%252251e02fce-7590-4acb-a2e2-0be2771cdf1b%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4d72106fe0b804be34e340382034ba71/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo déjeuner du matin pour 2 personnes",
        "price": "24,99 $",
        "description": "Profitez d'un copieux repas matinal avec notre combo petit-déjeuner, comprenant des pancakes moelleux, du bacon croustillant, des œufs brouillés et du café fraîchement infusé ou du jus d'orange.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225bbbfbd4-5f58-45d0-9b6e-dfe43fd75f40%2522%252C%2522itemUuid%2522%253A%25228d5193f9-d95a-4275-a0e9-64fdff8e1721%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/c996746fe055e06e831b26d20f37efd4/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo déjeuner du matin (4-6 personnes)",
        "price": "51,79 $",
        "description": "Commencez la journée du bon pied avec notre généreux combo petit-déjeuner matinal, comprenant une variété de viennoiseries fraîchement cuites, des œufs brouillés, du bacon croustillant et votre choix entre un café chaud ou un jus d'orange rafraîchissant.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225bbbfbd4-5f58-45d0-9b6e-dfe43fd75f40%2522%252C%2522itemUuid%2522%253A%2522bc886d03-90db-40a9-b2c4-d2e12dc33fdb%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/cdb696f18f948799b4d4a8b5e884ab18/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo déjeuner classique pour 2 personnes",
        "price": "23,29 $",
        "description": "Dégustez un festin matinal traditionnel avec notre combo petit-déjeuner classique, comprenant des pancakes moelleux, du bacon croustillant, des œufs brouillés et votre choix entre un café chaud ou un jus d'orange frais.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225bbbfbd4-5f58-45d0-9b6e-dfe43fd75f40%2522%252C%2522itemUuid%2522%253A%2522f8292821-1b74-44b2-8030-af57f9c3a406%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e7afd7b3135450fb846a1e6795d124e3/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Déjeuner irrésistible pour 2",
        "price": "21,59 $",
        "description": "Offrez-vous un festin matinal délicieux avec notre déjeuner irrésistible pour deux, comprenant une variété de viennoiseries fraîchement cuites, des œufs brouillés moelleux, du bacon croustillant et votre choix entre un café chaud ou un jus d'orange rafraîchissant.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225bbbfbd4-5f58-45d0-9b6e-dfe43fd75f40%2522%252C%2522itemUuid%2522%253A%2522fa7d419e-bc99-47ae-bad9-3feceaa79c78%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9ca6b99f3b34654aece2ed6a0260e5c7/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo déjeuner classique (4-6 personnes)",
        "price": "41,19 $",
        "description": "Commencez la journée du bon pied avec notre copieux combo petit-déjeuner classique, comprenant une sélection de viennoiseries fraîchement cuites, des œufs brouillés, du bacon croustillant et votre choix entre un café chaud ou un jus d'orange rafraîchissant.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25225bbbfbd4-5f58-45d0-9b6e-dfe43fd75f40%2522%252C%2522itemUuid%2522%253A%2522df7264a4-b39c-462f-981b-9a4644d259ba%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/dec8ff5d6146f6eb4d1cd92fb8a4a854/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo Wrap Matin",
        "price": "7,41 $",
        "description": "Grillées à la perfection et préparées frais juste pour vous, nos enveloppements de petit-déjeuner grillés vont changer radicalement votre façon de prendre le petit-déjeuner.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522207b2ed1-cf59-4fbc-97cf-e7eeec80db38%2522%252C%2522itemUuid%2522%253A%2522acaa63d8-6394-4a0c-80b1-f852927e990d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/5e502d607c43520695a9c0861269c9b6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo Croissant Matin",
        "price": "9,10 $",
        "description": "Voici ce que le « bonjour » a le goût. Votre choix de saucisse, trois tranches de bacon croustillant, une omelette aux œufs assaisonnée et du fromage fondu sur un croissant. Pas un amateur de viande ? Pas de soucis, on peut retirer la saucisse ou le bacon.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522207b2ed1-cf59-4fbc-97cf-e7eeec80db38%2522%252C%2522itemUuid%2522%253A%252276073382-a1c3-4d3d-b84d-9b855524f661%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/f6493d2ac2c4ce90e31affe42addea18/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo Bagel Matin",
        "price": "9,10 $",
        "description": "Profitez d'un bagel grillé de votre choix garni d'une variété de tartinades salées ou sucrées, de légumes frais et de viandes ou fromages de qualité supérieure. Que vous préfériez une combinaison classique ou que vous souhaitiez essayer quelque chose de nouveau, notre Bagel Matin offre d'innombrables possibilités pour combler vos envies de petit-déjeuner.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522207b2ed1-cf59-4fbc-97cf-e7eeec80db38%2522%252C%2522itemUuid%2522%253A%252228d14d8d-b257-45de-b87c-bc889c08be41%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/0337e96913978c33fd031fdc859d197e/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Combo Muffin Anglais Matin",
        "price": "7,41 $",
        "description": "Voici ce que le « bonjour » a le goût. Votre choix de saucisse, trois tranches de bacon croustillant, une omelette aux œufs assaisonnée et du fromage fondu sur un muffin anglais. Pas un amateur de viande ? Pas de soucis, on peut retirer la saucisse ou le bacon.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522207b2ed1-cf59-4fbc-97cf-e7eeec80db38%2522%252C%2522itemUuid%2522%253A%2522de5d10ac-8044-4a54-8a29-eb8b676b80bf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9ca6b99f3b34654aece2ed6a0260e5c7/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Wrap Saucisse",
        "price": "8,45 $",
        "description": "Plongez dans notre savoureux Wrap à la Saucisse ! Mettant en vedette une saucisse succulente, des œufs brouillés, du fromage fondu et de la salsa épicée, le tout enveloppé dans une tortilla chaude, ce wrap satisfaisant est un favori du petit-déjeuner. Que vous commenciez votre journée ou que vous attrapiez une bouchée rapide en courant, notre Wrap à la Saucisse saura vous combler et vous donner de l'énergie.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252214acb441-7ce3-4dcf-a47e-03b030c977ac%2522%252C%2522itemUuid%2522%253A%2522198b4e97-9049-4d5f-9df2-37ab98483404%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ee884dc35a28249732dc66854ca77087/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Wrap Jambon",
        "price": "8,45 $",
        "description": "Dégustez notre délicieux Wrap au Jambon ! Garni de fines tranches de jambon, de laitue croquante, de tomates juteuses et de mayonnaise crémeuse, le tout enroulé dans une tortilla moelleuse, ce wrap savoureux est un choix délicieux pour n'importe quel repas. Que vous le savouriez pour le déjeuner ou une collation rapide, notre Wrap au Jambon saura combler vos envies",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252214acb441-7ce3-4dcf-a47e-03b030c977ac%2522%252C%2522itemUuid%2522%253A%2522968371fe-a82b-425d-8db8-ac3c43812888%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/7e4c92c316bb734090d597de1f5ecb8c/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Muffin Anglais Oeuf",
        "price": "7,41 $",
        "description": "Voici notre sandwich à l'œuf sur muffin anglais! Préparé à la perfection, ce délice classique du petit-déjeuner présente une omelette moelleuse et assaisonnée nichée entre deux moitiés de muffin anglais grillé.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d33b24b9-7d45-4a80-9cf0-c1083ccf4430%2522%252C%2522itemUuid%2522%253A%252290f0c5cf-98d6-421c-89f9-ebd60a5a93a1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/cce0144766be0822072addf8dca3629a/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Muffin Anglais Saucisse",
        "price": "8,45 $",
        "description": "Croquez dans l'équilibre parfait entre la saucisse juteuse et le muffin moelleux, offrant un début satisfaisant à votre journée. Avec notre sandwich à la saucisse sur muffin anglais ! Préparé avec soin et riche en saveurs, ce favori du petit-déjeuner présente un pâté de saucisse savoureux niché entre deux moitiés de muffin anglais grillé.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d33b24b9-7d45-4a80-9cf0-c1083ccf4430%2522%252C%2522itemUuid%2522%253A%25228648a337-5117-4f06-a76d-9dc59263d3b6%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/1aee791f0e4d9b434089bc42de85e8e3/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Muffin Anglais Bacon",
        "price": "8,45 $",
        "description": "Préparé avec soin et confectionné à la perfection, ce délice matinal présente des tranches de bacon croustillant entre deux moitiés de muffin anglais grillé. Offrez-vous une délicieuse expérience matinale.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d33b24b9-7d45-4a80-9cf0-c1083ccf4430%2522%252C%2522itemUuid%2522%253A%25229334c432-94c0-4779-b812-679807e92d8e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e0e211c97b960dc7d8ee463da306688c/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Muffin Anglais Jambon",
        "price": "8,45 $",
        "description": "Découvrez notre délicieux sandwich au jambon sur muffin anglais ! Plongez dans une harmonie délicieuse de jambon savoureux et de muffin tendre, offrant une sensation gustative qui illuminera votre matinée. Préparé avec soin et précision, ce délice du petit-déjeuner met en valeur des tranches savoureuses de jambon nichées entre deux moitiés de muffin anglais grillé.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522d33b24b9-7d45-4a80-9cf0-c1083ccf4430%2522%252C%2522itemUuid%2522%253A%25223ee923b6-3c3e-411e-bc6c-f24fd17dae07%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/b3c4c53f4f942df48102d42c085de2b6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Croissant Oeuf",
        "price": "8,70 $",
        "description": "Sandwich Croissant aux Œufs : Croissant moelleux garni d'œufs brouillés.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3b0f373-b4b0-4600-b184-00b273f40829%2522%252C%2522itemUuid%2522%253A%2522cc7e3a41-6243-497a-989e-3aa51a1edbf3%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/dbb422c8606768aaadc8f3779351d02b/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Croissant Saucisse",
        "price": "10,14 $",
        "description": "Laissez-vous tenter par notre Sandwich Petit-Déjeuner Croissant Saucisse, un délice culinaire qui promet de ravir vos papilles gustatives. Imaginez ceci : un croissant chaud et feuilleté, fraîchement sorti du four, enveloppant une savoureuse galette de saucisse. À chaque bouchée, l'arôme savoureux de la saucisse se marie à la richesse beurrée du croissant, créant une symphonie de saveurs qui éveille vos sens. C'est le mélange parfait de confort et d'indulgence pour commencer votre journée sur une note délicieuse.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3b0f373-b4b0-4600-b184-00b273f40829%2522%252C%2522itemUuid%2522%253A%252270eacf20-f21d-45c5-b388-8cdf1ead6190%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/b434a3915f9cf71b35e39dc2e8be32e3/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Croissant Bacon",
        "price": "10,14 $",
        "description": "Laissez-vous tenter par notre Croissant au Bacon pour le Petit-Déjeuner, où des couches de croissant beurré et feuilleté enveloppent des tranches croustillantes de bacon, accompagnées d'une généreuse portion d'œufs brouillés et de fromage fondu. C'est une symphonie de saveurs et de textures, garantie pour combler vos envies matinales et vous laisser désirer encore plus.\"",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3b0f373-b4b0-4600-b184-00b273f40829%2522%252C%2522itemUuid%2522%253A%2522b4c30bd8-17d8-44bb-af74-76053eb6b6c4%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/38f00e07431d310587b59552b8d8c596/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Croissant Jambon",
        "price": "10,14 $",
        "description": "Un croissant chaud et beurré, délicatement tranché et garni de jambon tendre et savoureux. Lorsque vous croquez dedans, l'arôme riche du croissant fraîchement cuit se mêle à l'essence savoureuse du jambon, créant une symphonie de saveurs qui dansent sur votre palais.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3b0f373-b4b0-4600-b184-00b273f40829%2522%252C%2522itemUuid%2522%253A%2522abd10042-b325-4e8e-879f-23432f1b2347%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/afe1b874d043ae6fd68855fc9b5cac79/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Bagel Bacon",
        "price": "10,14 $",
        "description": "Indulgez-vous avec la saveur irrésistible de notre Sandwich Déjeuner Bagel au Bacon. Un bagel grillé, garni de tranches de bacon croustillantes et de fromage fondu. À chaque bouchée, le goût fumé et savoureux du bacon danse sur votre palais, parfaitement équilibré par la chaleur réconfortante du bagel. C'est une gâterie de petit-déjeuner que vous n'oublierez pas de sitôt",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252289628a9b-1f1c-4c0e-9eed-596836a1f856%2522%252C%2522itemUuid%2522%253A%2522e9203f6c-9253-4ee1-abd9-61ef2427d572%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e07a9af571b44b18ad377d9f618ef53d/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Bagel Jambon",
        "price": "10,14 $",
        "description": "Commencez votre journée sur une note délicieuse avec notre Sandwich Déjeuner Bagel au Jambon. Un bagel grillé, garni de tranches tendres de jambon et de fromage fondu. À chaque bouchée, le goût savoureux du jambon se fond avec la richesse beurrée du bagel, créant une expérience de petit-déjeuner simplement irrésistible.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252289628a9b-1f1c-4c0e-9eed-596836a1f856%2522%252C%2522itemUuid%2522%253A%252277c58412-f7b6-4118-ab5b-98555c90cc64%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/c040c09af1cd02a611e2a0e0853ba4f8/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Grille Cheese avec patate & jus",
        "price": "7,80 $",
        "description": "Offrez à vos petits une délicieuse surprise avec notre repas Grilled Cheese pour Enfants ! Imaginez du fromage fondant entre des tranches de pain parfaitement grillées, accompagnées de frites dorées et croustillantes et de leur jus préféré. C'est un repas délicieux et satisfaisant qui les fera sourire de plaisir",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b64c608-789a-4faa-9c6c-3e471aa8c0c7%2522%252C%2522itemUuid%2522%253A%252240a214eb-daf7-4148-b456-914d75f1216c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9d0ca6cd64614e240239460b9cbf5c4c/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Sandwich Oeuf avec patate & jus",
        "price": "7,80 $",
        "description": "Offrez à vos petits une délicieuse surprise avec notre repas Sandwich Œuf pour Enfants ! Imaginez des œufs brouillés moelleux nichés entre des tranches de pain moelleux, accompagnés de frites dorées et croustillantes et de leur jus préféré. C'est un repas savoureux et nourrissant qui les fera sourire à chaque bouchée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b64c608-789a-4faa-9c6c-3e471aa8c0c7%2522%252C%2522itemUuid%2522%253A%252287a133bf-9719-4612-b0fe-98eb630bd9b9%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d047cb3bcea234789b417446f9b0ad09/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gruau avec patate & jus",
        "price": "7,80 $",
        "description": "Offrez à vos petits un petit-déjeuner nutritif et délicieux avec notre repas de gruau pour enfants ! Imaginez un gruau crémeux garni de fruits frais, accompagné de pommes de terre rissolées dorées et croustillantes et de leur jus préféré. C'est un repas nourrissant et satisfaisant qui les préparera pour la journée à venir",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b64c608-789a-4faa-9c6c-3e471aa8c0c7%2522%252C%2522itemUuid%2522%253A%25226e97d692-d375-4d68-ba67-77af4086e017%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/153268ec99fbcefd3f79c0f440a7da91/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "1/2 Bagel avec patate & jus",
        "price": "7,80 $",
        "description": "Gâtez vos petits avec notre repas Demi-Bagel pour Enfants ! Imaginez un demi-bagel moelleux et savoureux garni de leur tartinade préférée, accompagné de frites dorées et croustillantes et de leur choix de jus. C'est un repas délicieux et satisfaisant qui les gardera énergisés tout au long de la journée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b64c608-789a-4faa-9c6c-3e471aa8c0c7%2522%252C%2522itemUuid%2522%253A%25225f5841b8-19bb-4037-8951-1d8461a58f22%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/fccc1180a08bcc9feb8b26ee84068764/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "1 crepe avec patate & jus",
        "price": "7,80 $",
        "description": "Crêpe pour Enfants avec Pommes de Terre & Jus : Faites plaisir à vos petits avec notre repas Crêpe pour Enfants ! Imaginez une délicieuse crêpe fraîchement préparée, garnie de leurs garnitures préférées, accompagnée de frites dorées et croustillantes et de leur choix de jus. C'est un repas délicieux et satisfaisant qui fera danser leurs papilles gustatives !",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b64c608-789a-4faa-9c6c-3e471aa8c0c7%2522%252C%2522itemUuid%2522%253A%252266aa96f0-fc25-4ba4-9053-d1da12fe0d8f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9d76f135724235207ee7523371e587fa/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "3 Petit Crepe / 3 Small Crepe",
        "price": "6,49 $",
        "description": "Offrez-vous un délicieux assortiment de trois petites crêpes ! Chaque crêpe est préparée avec soin et garnie de votre choix de garnitures sucrées ou salées, créant une expérience délicieuse et satisfaisante, parfaite pour partager ou savourer seul.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252288971901-e72a-40fe-ac2b-0c41e6aeb4e3%2522%252C%2522itemUuid%2522%253A%2522af8813dd-5d8c-467d-8bbf-58d09603501b%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/f48cae98c23fca453c345d4e22d84db1/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Fromage Fraise / Strawberry Cheesecake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou un gâteau entier de notre Gâteau au Fromage Fraise ! Ce délicieux dessert comprend une croûte de biscuits Graham beurrée garnie d'une garniture de fromage à la crème crémeux infusée de fraises fraîches. Fini avec un glaçage à la fraise onctueux et garni de tranches de fraises fraîches, c'est l'équilibre parfait entre des saveurs crémeuses, acidulées et sucrées pour combler vos envies de dessert.\"",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%2522251b2364-5aa3-4de2-adfa-e6cd989a0615%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/3fc5227cf7d2914d68d63de108fb6961/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Fromage Amaret / Amaret Cheesecake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou savourez un gâteau entier de notre Gâteau au Fromage Amande ! Ce délicieux dessert comprend une garniture de fromage à la crème crémeux sur une croûte de biscuits Graham beurrée, infusée du goût irrésistible des amandes. Pour une touche de luxe supplémentaire, personnalisez votre gâteau au fromage avec des décorations comme des tranches d'amandes grillées ou un filet de caramel. Que vous dégustiez une part individuelle ou partagiez avec vos proches, notre Gâteau au Fromage Amande saura combler vos envies sucrées",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%25222fe988ad-e041-4aa1-bf9e-eab1b8ba2a03%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d747eb86918d1ffb9d00744ee0389e18/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Red Velvet / Red Velvet Cake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou délectez-vous d'un gâteau entier de notre Gâteau Red Velvet ! Ce dessert classique comprend des couches de gâteau Red Velvet moelleux et velouté, généreusement garnies et glacées d'un glaçage crémeux et décadent au fromage à la crème. Pour une touche d'élégance supplémentaire, personnalisez votre gâteau avec des décorations comme des pétales de rose comestibles ou des spirales de chocolat blanc. Que vous célébriez une occasion spéciale ou simplement ayez envie de quelque chose de sucré, notre Gâteau Red Velvet saura ravir vos sens.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%2522d00d019e-93a5-4154-b497-f9972f6aa0e5%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d8960137b3b0a72ebcf010c28fdd7286/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Dulce de Lèche / Dulce de Leche Cake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou délectez-vous d'un gâteau entier de notre Gâteau Dulce de Leche ! Ce délicieux dessert comprend des couches de génoise à la vanille moelleuse garnies d'une garniture crémeuse au dulce de leche riche et onctueux. Garni d'un glaçage dulce de leche luxuriant et de filets de sauce caramel, il offre un parfait équilibre de douceur et de gourmandise. Personnalisez votre gâteau avec des garnitures décoratives comme des noix caramélisées ou des copeaux de chocolat pour une touche supplémentaire de saveur et d'élégance. Que vous célébriez une occasion spéciale ou simplement satisfassiez votre dent sucrée, notre Gâteau Dulce de Leche saura vous ravir",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%2522f9905953-75bb-4f3e-8944-bdefa7b5d65c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8e40262b676842b88e0fedaa044907de/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Nutella Mascarpone / Nutella Mascarpone Cake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou savourez un gâteau entier de notre Gâteau Nutella Mascarpone ! Ce dessert divin comprend des couches de gâteau au chocolat moelleux garnies d'un mélange délicieux de pâte à tartiner Nutella et de fromage mascarpone crémeux. Garni d'une généreuse couche de glaçage Nutella et agrémenté de morceaux de noisettes, c'est une symphonie délicieuse de saveurs chocolatées et de noisettes. Sublimez votre gâteau avec des garnitures décoratives comme des spirales de chocolat ou des paillettes d'or comestibles pour une touche supplémentaire d'élégance. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gâterie décadente, notre Gâteau Nutella Mascarpone ne manquera pas de vous impressionner",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%2522636fd090-7206-49d4-8724-ed42bf603a71%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4e3549a6f727400c37d2680f7018aa06/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Fromage Carotte / Carrot Cheesecake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou savourez un gâteau entier de notre Gâteau au Fromage Carotte ! Ce délicieux dessert comprend des couches de gâteau à la carotte moelleux imprégnées d'épices chaudes, garnies d'une garniture crémeuse au fromage à la crème. Surmonté d'un glaçage velouté au fromage à la crème et garni de boucles de carotte confites, c'est un mélange parfait de saveurs sucrées et salées. Personnalisez votre gâteau avec des garnitures décoratives comme des noix hachées ou des fleurs comestibles pour une touche supplémentaire d'élégance. Que vous célébriez une occasion spéciale ou simplement vous faisiez plaisir avec une gâterie sucrée, notre Gâteau au Fromage Carotte saura combler vos envies.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%25224c9f9aaf-f367-4208-a6c0-3d2dedc9f75d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/b19b1cb218a90d516841ed018478360d/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Forest Noir",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou savourez un gâteau entier de notre Gâteau Forêt-Noire ! Ce dessert décadent comprend des couches de génoise au chocolat moelleux garnies d'une délicieuse compote de cerises et de crème fouettée onctueuse. Garni de copeaux de chocolat et agrémenté de cerises fraîches, c'est une délicieuse combinaison de chocolat riche et de cerises acidulées. Personnalisez votre gâteau avec des garnitures décoratives comme des spirales de chocolat ou des paillettes d'or comestibles pour une touche supplémentaire d'élégance. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gâterie luxueuse, notre Gâteau Forêt-Noire ne manquera pas de vous impressionner.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%25226bdff9bc-a59b-4f18-a0ff-f2edcc7f74ad%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4ec56d4dff6d2f72e4d1bed8fcbfc264/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Gâteau Citron/Lemon Cake",
        "price": "10,44 $",
        "description": "Offrez-vous une part ou savourez un gâteau entier de notre Gâteau au Citron ! Ce délicieux dessert comprend des couches de génoise au citron moelleux imprégnées de zeste de citron acidulé et garnies d'une délicieuse crème de citron zesté. Surmonté d'un glaçage velouté au citron et garni de tranches de citron, c'est une explosion rafraîchissante de saveur d'agrumes. Personnalisez votre gâteau avec des garnitures décoratives comme des écorces de citron confites ou des fleurs comestibles pour une touche supplémentaire d'élégance. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gourmandise lumineuse et zestée, notre Gâteau au Citron saura égayer votre journée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252277322cc9-d2dd-465e-82d3-65efc5b22b09%2522%252C%2522itemUuid%2522%253A%2522ce3b15af-97a1-4bad-8257-e3109172609a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/c76e59456c5d589e64719fdbba1596cd/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Eclaire Custard/Custard Eclaire",
        "price": "8,15 $",
        "description": "Offrez-vous un délicieux dessert avec notre Éclair à la Crème ! Savourez une pâtisserie légère et aérée remplie d'une crème onctueuse et crémeuse, le tout garni d'un glaçage au chocolat decadent. C'est la douceur parfaite pour combler vos envies et égayer votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%2522bfee5c36-8aca-4465-b7db-ea87ed45ec30%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/cc24a25e760449618daca41ab5c3f589/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Eclaire a la Creme/ Creme Eclaire",
        "price": "8,15 $",
        "description": "Offrez-vous un délicieux dessert avec notre Éclair à la Crème ! Savourez une pâtisserie légère et moelleuse garnie d'une onctueuse crème à la vanille, le tout recouvert d'un glaçage au chocolat riche. C'est la douceur parfaite pour combler vos envies et égayer votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%25222175dfde-a1bd-45b3-911a-bb8a262428b8%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4c2c733cd8c41e982e71c6618de18405/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Mille Feuille (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous une pâtisserie française délicate et décadente avec notre Mille Feuille ! Des couches de pâte feuilletée croustillante sont délicatement empilées avec une crème pâtissière onctueuse, créant une symphonie de textures et de saveurs. Saupoudrée de sucre glace, c'est l'accompagnement parfait pour accompagner votre repas ou satisfaire votre envie de sucré",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%2522d0a31318-9f0b-48e3-9068-e14d1e25422e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e3167e39f14606f2850d962050e7ab1f/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "OREO Cookie (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous un classique favori avec notre Biscuit OREO ! Fabriqué avec les célèbres biscuits OREO, cette gâterie indulgente comprend des couches de biscuit au chocolat riche et de crème vanillée crémeuse. Parfaitement accompagné d'une tasse de café ou dégusté en accompagnement sucré, il saura combler vos envies et ajouter une touche de douceur à votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%252251ca9a34-7754-453c-888f-19b26099fb45%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/85c476f0836e74a5b6e03d8de5823eda/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Tiramisu (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous une touche d'Italie avec notre Tiramisu ! Ce dessert classique comprend des couches de biscuits à la cuillère délicatement imbibés d'espresso, sandwichées entre une crème de mascarpone onctueuse et saupoudrées de cacao. Les saveurs parfaitement équilibrées de café, de crème et de chocolat en font l'accompagnement sucré idéal pour compléter n'importe quel repas ou combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%2522f913023e-5e4b-43b0-95a3-e5c916949faa%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Caramel salt (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous une délicieuse combinaison de sucré et salé avec notre Caramel Salé ! Cette pâtisserie exquise comprend des couches de pâte feuilletée croustillante garnies d'une garniture au caramel onctueux et saupoudrées d'une touche de sel de mer pour l'équilibre parfait des saveurs. Que vous ayez envie de quelque chose de sucré ou salé, c'est l'accompagnement idéal pour satisfaire vos papilles gustatives et rehausser votre expérience culinaire.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%252206479595-c076-49cf-90af-5452b44ff574%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Fererro Rocher(Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous du luxe avec notre Ferrero Rocher ! Cette pâtisserie exquise comprend une coque croustillante de gaufrette remplie d'une garniture crémeuse à la noisette, enveloppée dans du chocolat au lait onctueux et garnie de noisettes grillées. Chaque bouchée offre une délicieuse combinaison de textures et de saveurs, en faisant l'accompagnement sucré parfait pour rehausser n'importe quel repas ou combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%2522ffb83e54-5266-41d4-bc20-bbbf33c89ccd%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Cannoli",
        "price": "8,15 $",
        "description": "Offrez-vous une touche d'Italie avec nos Cannoli ! Ces pâtisseries traditionnelles italiennes se composent de coques croustillantes et dorées remplies d'une garniture crémeuse au fromage ricotta, sucrée avec une pointe de vanille et saupoudrée de sucre glace. Chaque bouchée offre un délicieux contraste de textures et de saveurs, en faisant l'accompagnement sucré parfait pour compléter n'importe quel repas ou combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%25226c892291-14fd-40e6-a072-fc81a0370691%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "CheeseCake Fraise (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous une tranche de paradis avec notre CheeseCake aux Fraises ! Cette pâtisserie délicieuse comprend une garniture de cheese-cake crémeux et velouté sur une croûte de biscuit Graham beurrée, surmontée d'une généreuse couche de compote de fraises fraîches. Chaque bouchée offre un équilibre parfait entre le cheese-cake riche et crémeux et les fraises acidulées et sucrées, en faisant l'accompagnement sucré idéal pour combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%25224d064d81-9c44-4ff1-97e1-9b369e6b36e3%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "OREO MOOSE (PÂTISSERIE)",
        "price": "8,15 $",
        "description": "Offrez-vous un dessert décadent avec notre Mousse Oreo ! Cette délicieuse gourmandise comprend des couches de mousse au chocolat veloutée infusée de morceaux d'Oreo écrasés, créant un équilibre parfait entre la saveur riche du chocolat et les morceaux de biscuits croustillants. Garni de crème fouettée et de miettes d'Oreo supplémentaires, c'est l'accompagnement sucré ultime pour combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%252285cd0e8f-aff3-4650-8072-1298a959786a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Cara Praline (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous une délicieuse pâtisserie avec notre Cara Praline ! Cette gourmandise exquise comprend des couches de pâte feuilletée croustillante garnies d'une crème caramel onctueuse et de morceaux de pralin croquants. Garni d'un filet de sauce caramel et saupoudré de noix hachées, c'est l'accompagnement sucré parfait pour combler vos envies de dessert",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%25220bb28c67-7e20-4bb5-b3b0-a65375074d1f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Red Velvet Cream (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous un dessert luxueux avec notre Crème Velours Rouge ! Cette pâtisserie exquise comprend des couches de gâteau rouge velours moelleux et velouté, garnies d'une garniture au fromage à la crème décadente. Surmonté d'un glaçage lisse et crémeux et garni de miettes de velours rouge, c'est l'accompagnement sucré parfait pour combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%25220f1ba20c-1891-41d2-82d8-81d27e6ade7b%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Double Choco Moose (Patisserie)",
        "price": "8,15 $",
        "description": "Offrez-vous un rêve pour les amateurs de chocolat avec notre Mousse Double Choco ! Ce dessert décadent comprend des couches de mousse au chocolat riche et de ganache au chocolat veloutée, créant une harmonie parfaite de saveurs et de textures. Garni de copeaux de chocolat et d'un filet de sauce au chocolat, c'est l'accompagnement sucré ultime pour combler vos envies de dessert.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25228fdea8dc-1d69-4e86-9247-1f69794e6ad4%2522%252C%2522itemUuid%2522%253A%2522e77f043a-2633-4b5e-aee4-9db65a4281cb%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/3f1a4c98b1e20d44ed2c3ee52a6145dc/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Tarte Fraise  / Strawberry Pie",
        "price": "7,82 $",
        "description": "Offrez-vous une part ou savourez une tarte entière de notre Tarte aux Fraises ! Ce délicieux dessert comprend une croûte feuilletée et beurrée remplie de fraises sucrées et mûres avec une touche de zeste de citron acidulé. Surmontée d'une légère poudre de sucre glace et garnie de tranches de fraises fraîches, c'est un parfait équilibre entre douceur et acidité. Personnalisez votre tarte avec des garnitures décoratives comme de la crème fouettée ou des feuilles de menthe pour une touche supplémentaire de fraîcheur. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gourmandise fruitée, notre Tarte aux Fraises saura ravir vos papilles gustatives.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252275fb65a2-fdae-4826-ad81-444427c02521%2522%252C%2522itemUuid%2522%253A%2522ad54aad6-3803-42da-922f-288ad9784ba6%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d9a55c1827d69ffb6702bf24cdb5b1a7/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Tarte Cerise / Cherry Pie",
        "price": "7,82 $",
        "description": "Offrez-vous une part ou savourez une tarte entière de notre Tarte aux Framboises ! Ce délicieux dessert comprend une croûte feuilletée et beurrée remplie de framboises juteuses et acidulées avec une touche de vanille sucrée. Surmontée d'une pincée de sucre et garnie de compote de framboises fraîches, c'est un parfait équilibre entre acidité et douceur. Personnalisez votre tarte avec des garnitures décoratives comme de la crème fouettée ou des tranches d'amandes pour une touche supplémentaire de gourmandise. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gourmandise fruitée, notre Tarte aux Framboises saura vous satisfaire.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252275fb65a2-fdae-4826-ad81-444427c02521%2522%252C%2522itemUuid%2522%253A%25220f05f92b-caea-4269-88f0-14686c285181%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9218f12cd3439a4f68f7d1ecbbb47dce/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Tarte Bleuet / Blueberry Pie",
        "price": "7,82 $",
        "description": "Offrez-vous une part ou savourez une tarte entière de notre Tarte aux Bleuets ! Ce délicieux dessert comprend une croûte feuilletée et beurrée remplie de bleuets juteux et sucrés avec une touche de zeste de citron acidulé. Surmontée d'une pincée de sucre et garnie de compote de bleuets fraîche, c'est un parfait équilibre entre douceur et acidité. Personnalisez votre tarte avec des garnitures décoratives comme de la crème fouettée ou du zeste de citron pour une touche supplémentaire de gourmandise. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gourmandise fruitée, notre Tarte aux Bleuets saura vous ravir",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252275fb65a2-fdae-4826-ad81-444427c02521%2522%252C%2522itemUuid%2522%253A%2522d7d145e3-68a2-4688-b758-531a447b44fe%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/61b3f878044ecf107d175e7dd6de5ce6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Tarte Citron / Lemon Pie",
        "price": "7,82 $",
        "description": "Offrez-vous une part ou savourez une tarte entière de notre Tarte au Citron ! Ce délicieux dessert comprend une croûte feuilletée et beurrée remplie d'une crème de citron acidulée et zestée et garnie d'une touffe de crème fouettée. Agrémentée de tranches de citron et d'une pincée de sucre glace, c'est une explosion rafraîchissante de saveur d'agrumes. Personnalisez votre tarte avec des garnitures décoratives comme des écorces de citron confites ou des feuilles de menthe fraîche pour une touche supplémentaire de fraîcheur. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gourmandise zestée, notre Tarte au Citron saura illuminer votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252275fb65a2-fdae-4826-ad81-444427c02521%2522%252C%2522itemUuid%2522%253A%2522202b0c5d-071c-4a22-94c6-096a0f762db1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8ec1501602c7be007556a7a925529a72/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Viennoise Fromage et Fraise / Viennese Cheese and Strawberry",
        "price": "6,00 $",
        "description": "Laissez-vous tenter par un délicieux mélange de saveurs avec notre Pâtisserie Fromage et Fraise Viennnoise ! Cette pâtisserie exquise comprend une pâte viennoise feuilletée et beurrée garnie d'une crème de fromage crémeuse et surmontée d'une généreuse couche de tranches de fraises fraîches. Agrémentée d'une légère pincée de sucre glace, c'est une parfaite harmonie entre le fromage acidulé et les fraises sucrées. Que vous débutiez votre journée avec un délicieux petit-déjeuner ou vous offriez une collation pour le déjeuner, notre Pâtisserie Fromage et Fraise Viennnoise saura ravir vos papilles gustatives.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522da3c857f-ec0d-4e45-aeed-275f398fca1f%2522%252C%2522itemUuid%2522%253A%25221d1558c1-6916-4f1d-b40f-fb369094a639%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/a46d267ebd3478f1a3f647deeef611d6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Viennoise Brioche et Canelle / Viennese Brioche and Cinnamon",
        "price": "6,00 $",
        "description": "Laissez-vous tenter par une délicieuse combinaison de saveurs avec notre Pâtisserie Brioche et Cannelle Viennnoise ! Cette pâtisserie exquise comprend une pâte viennoise feuilletée et beurrée infusée de tourbillons de cannelle aromatique et garnie d'une riche crème pâtissière à la brioche. Surmontée d'une pincée de sucre à la cannelle et nappée d'un glaçage sucré, c'est une parfaite harmonie entre la richesse beurrée et l'épice chaleureuse de la cannelle. Que vous ayez envie d'une douce gâterie pour le petit-déjeuner ou d'une collation réconfortante, notre Pâtisserie Brioche et Cannelle Viennnoise saura combler vos envies",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522da3c857f-ec0d-4e45-aeed-275f398fca1f%2522%252C%2522itemUuid%2522%253A%2522d8178278-fdf8-4172-933a-3d3a089898e4%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e5d2a44dfb2144e862b143e244016124/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Viennoise Chocolatine / Viennese Chocolatine",
        "price": "4,53 $",
        "description": "Laissez-vous tenter par une expérience pâtissière française classique avec notre Chocolatine Viennnoise ! Cette délicieuse pâtisserie comprend une pâte viennoise feuilletée et beurrée garnie d'une crème de chocolat riche et surmontée d'une pincée de sucre glace. Cuite à la perfection dorée, c'est un parfait équilibre entre la bonté beurrée et le chocolat décadent. Que vous débutiez votre journée avec une douce gâterie pour le petit-déjeuner ou que vous vous offriez une collation pour le déjeuner, notre Chocolatine Viennnoise saura combler vos envies de quelque chose de délicieux.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522da3c857f-ec0d-4e45-aeed-275f398fca1f%2522%252C%2522itemUuid%2522%253A%25225cff1573-1c43-4b3b-8d62-bed5c208e1b6%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4d247f3edf2b5c751146373ac06e13a5/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Choix de Muffins",
        "price": "2,60 $",
        "description": "Plongez dans un monde de délicieux muffins avec notre grande variété de saveurs ! Du classique aux bleuets au décadent aux pépites de chocolat, nous proposons quelque chose pour chaque envie. Nos muffins sont fraîchement cuits à la perfection, avec une mie moelleuse et tendre qui vous laissera en redemander. Que vous débutiez votre journée avec une douceur ou que vous satisfassiez vos envies de collation de l'après-midi, notre Sélection de Muffins saura ravir vos papilles gustatives.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522da3c857f-ec0d-4e45-aeed-275f398fca1f%2522%252C%2522itemUuid%2522%253A%2522afcc5726-b521-46f5-b65a-0c31165c1f64%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/7fc224ba24c640864f3dc4142aedfdcb/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Red Velvet / Red Velvet Macaron",
        "price": "3,59 $",
        "description": "Offrez-vous une gâterie luxueuse avec notre Macaron Red Velvet ! Cette élégante pâtisserie française comprend deux coques de meringue aux amandes garnies d'une ganache Red Velvet onctueuse. Avec sa couleur vibrante et sa riche saveur de chocolat, chaque bouchée est une fusion délicieuse de douceur et de gourmandise. Que vous célébriez une occasion spéciale ou simplement ayez envie d'un dessert délicieux, notre Macaron Red Velvet saura sublimer votre expérience gustative",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%25227d2baa9e-10c4-4e4c-9324-089a77f74a84%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8d32884e395878fb67233fb9d9351475/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Vanille / Vanilla Macaron",
        "price": "3,59 $",
        "description": "Offrez-vous une expérience délicieuse avec notre Macaron à la Vanille ! Cette exquise pâtisserie française comprend deux coques de meringue aux amandes garnies d'une ganache à la vanille onctueuse et crémeuse. Avec sa texture délicate et sa saveur classique, chaque bouchée est un délice céleste. Que vous célébriez une occasion spéciale ou simplement ayez envie d'une gâterie luxueuse, notre Macaron à la Vanille saura satisfaire votre dent sucrée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%25224ccc705a-f1ef-40c4-a043-8a7742bd4cf5%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8266ba58cb75da74c615805eb5840c1f/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Extra Noir / Extra Black Macaron",
        "price": "3,59 $",
        "description": "Plongez dans l'ultime indulgence avec notre Macaron Extra Noir ! Cette pâtisserie française luxueuse comprend deux coques de meringue aux amandes infusées d'une saveur de cacao intense, garnies d'une ganache au chocolat noir riche. Avec son apparence frappante et son goût décadent, chaque bouchée est un voyage vers une indulgence pure. Que vous vous offriez un dessert spécial ou que vous satisfassiez vos envies de chocolat, notre Macaron Extra Noir saura laisser une impression durable.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%2522f0f0d86b-5a08-4060-b520-2d14059cbbb9%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/e9143bf48f55e0e98a61cec7eb273f7f/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Chaï Latté / Chai Latte Macaron",
        "price": "3,59 $",
        "description": "Lancez-vous dans un voyage de saveurs avec notre Macaron Chaï Latté ! Cette exquise pâtisserie française comprend deux coques de meringue aux amandes infusées d'épices de chaï aromatiques, garnies d'une ganache crémeuse au latté chaï. Avec son équilibre délicat entre les épices chaudes et la douceur crémeuse, chaque bouchée est une indulgence réconfortante. Que vous soyez amateur de chaï ou simplement à la recherche d'une expérience dessert unique, notre Macaron Chaï Latté saura captiver vos papilles gustatives.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%25221b5b7133-c485-46a1-b896-b06955dfd141%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/395bcf6c85c2f5d571efc6214c1a8908/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Coquelicot / Poppy Macaron",
        "price": "3,59 $",
        "description": "Régalez-vous avec une explosion de saveur grâce à notre Macaron Coquelicot ! Cette élégante pâtisserie française comprend deux coques de meringue aux amandes délicatement parfumées aux graines de pavot, garnies d'une ganache crémeuse aux graines de pavot. Avec son goût unique et sa texture exquise, chaque bouchée est une expérience délicieuse. Que vous recherchiez une gourmandise sophistiquée ou simplement curieux de découvrir quelque chose de nouveau, notre Macaron Coquelicot saura satisfaire votre palais.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%2522b8cda1c6-2dd3-4f8b-af84-62b8fc2e0e12%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/bb567719c46d17607cb84cd06f67505a/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Pistache / Pistachio Macaron",
        "price": "3,59 $",
        "description": "Offrez-vous une expérience gustative délicieuse avec notre Macaron Pistache ! Cette exquise pâtisserie française comprend deux coques de meringue aux amandes infusées de l'essence de la pistache, garnies d'une ganache pistache crémeuse et onctueuse. Avec sa couleur verte vibrante et sa saveur de noix riche, chaque bouchée est un délice divin. Que vous soyez amateur de pistache ou simplement en quête d'un dessert luxueux, notre Macaron Pistache saura combler vos envies sucrées.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%2522acdff19c-d20e-40bf-b6f8-e8b1a23c97e9%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ca99f8828dddd1adb1bc2405208d77e1/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Macaron Framboise / Raspberry Macaron",
        "price": "3,59 $",
        "description": "Plongez dans une explosion de saveur fruitée avec notre Macaron Framboise ! Cette élégante pâtisserie française comprend deux coques de meringue aux amandes infusées de l'essence des framboises, garnies d'une ganache framboise onctueuse et délicieuse. Avec sa teinte rose vibrante et son goût acidulé-sucré, chaque bouchée est une délicieuse gâterie pour vos sens. Que vous soyez un amateur de framboises ou simplement en quête d'une touche estivale, notre Macaron Framboise saura illuminer votre journée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25221b2e5090-b543-4ea4-9a1a-71fb05cb0ba3%2522%252C%2522itemUuid%2522%253A%2522b2fd34f8-7503-4061-a5a3-cec2eafea068%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ace24b8421b96211b8787777e706bece/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Café protéiné",
        "price": "9,49 $",
        "description": "Dynamisez votre journée avec notre Café Protéiné, un délicieux mélange de café corsé infusé de protéines, offrant un coup de pouce satisfaisant et nutritif à votre routine matinale.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522cf0aac7d-4453-4080-81fc-3e5f6c33f008%2522%252C%2522itemUuid%2522%253A%2522ced2d6ad-fdb8-4f50-a1e4-f5051941948a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/29b7c437d52d2d883483c6781590a899/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Thé Énergisant",
        "price": "9,49 $",
        "description": "Revigorez vos sens avec notre Thé Énergisant, un mélange rafraîchissant d'herbes et d'épices revigorantes conçu pour vous fournir un regain d'énergie et de concentration naturel tout au long de votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522cf0aac7d-4453-4080-81fc-3e5f6c33f008%2522%252C%2522itemUuid%2522%253A%2522a7f4c6b7-064d-41e1-973d-7c067aa8885f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/f9ce0dce3db85585390005a178ef5a4f/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Thé",
        "price": "2,99 $",
        "description": "Offrez-vous un moment de détente avec notre sélection de thés fins ! Que vous préfériez la saveur robuste du thé noir, l'arôme délicat du thé vert ou les qualités apaisantes des mélanges d'herbes, nous avons quelque chose pour tous les goûts. Provenant des meilleures feuilles de thé et infusés avec expertise pour une saveur optimale, nos thés sont le compagnon parfait pour toutes les occasions.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%25224aa294aa-acaa-4d56-9f83-6d2b8f01fdd1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/dcfa8498bdea9780122c696a48ebd664/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Café Maison",
        "price": "2,50 $",
        "description": "Commencez votre journée du bon pied avec notre Café Maison ! Fabriqué à partir de grains fraîchement torréfiés, notre café offre un profil de saveur riche et aromatique qui saura éveiller vos sens. Que vous le préfériez noir, avec un peu de lait, ou sucré avec une touche de sucre, notre Café Maison est le parfait remontant pour toute heure de la journée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%2522e3610394-7259-4b17-a11b-9c47681f4567%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/893f24de6949de90bd4898091dc99cb9/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Vanille Francaise",
        "price": "3,50 $",
        "description": "Laissez-vous tenter par le goût exquis de notre Vanille Française ! Fabriquée à partir des meilleures gousses de vanille de Madagascar, notre Vanille Française est un délice crémeux et aromatique. Que vous l'appréciez en tant que gourmandise à part entière, comme une garniture décadente pour les desserts, ou comme un arôme pour vos boissons préférées, notre Vanille Française saura ajouter une touche de luxe à votre journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%25223274a616-5800-451f-969e-13024b20c359%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/a529b361833432540be1c7e70f9430e7/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Café Spécialiser",
        "price": "3,50 $",
        "description": "Rehaussez votre expérience café avec notre Café Spécialisé ! Provenant des meilleurs grains et préparé avec expertise par nos baristas qualifiés, notre Café Spécialisé offre un goût unique et exquis qui saura impressionner. Que vous ayez envie d'un espresso velouté, d'un cappuccino crémeux ou d'un latte corsé, notre menu Café Spécialisé a quelque chose pour tous les amateurs de café.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%252231ce90b9-701d-491a-9930-5974ed12f6eb%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/892b2a3bde70da74c1a1a5b25e1b0e34/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Choccolat Chaud",
        "price": "3,25 $",
        "description": "Réchauffez-vous avec notre indulgent Chocolat Chaud ! Fabriqué à partir de poudre de cacao premium et de lait crémeux et riche, notre Chocolat Chaud est une gâterie réconfortante parfaite pour les journées froides. Garni d'une cuillerée de crème fouettée ou de guimauves pour plus de douceur, il saura satisfaire vos envies de chocolat et vous laisser une sensation de confort et de satisfaction.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%25222368c675-4c0b-47bd-a795-0184bb7a88f2%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d0a1bf21c6f48625435d8b6a161b0bc2/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Chocolat Froid",
        "price": "3,75 $",
        "description": "Rafraîchissez-vous avec notre délicieux Chocolat Froid ! Fabriqué avec du cacao de qualité supérieure et du lait frais, notre Chocolat Froid est une gâterie délicieuse qui vous rafraîchira lors des journées chaudes. Servi sur glace et garni de crème fouettée ou de copeaux de chocolat pour plus de gourmandise, c'est le moyen parfait de satisfaire vos envies de chocolat de manière fraîche et rafraîchissante",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%252210a5d141-df99-49da-936e-0d4a3c2c01cf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ddc6e3ffbfa407ca6107e621476ccd9d/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Frappe Attack",
        "price": "9,99 $",
        "description": "Dynamisez votre journée avec notre Frappe Attack revigorante ! Préparée avec un mélange d'espresso, de lait et de glace, notre Frap-Attack est une boisson délicieusement glacée qui vous donnera l'énergie dont vous avez besoin. Garnie de crème fouettée et d'un filet de sirop de caramel ou de chocolat pour une touche supplémentaire, c'est le moyen parfait de stimuler votre journée et de satisfaire vos envies.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%25223d030641-97e5-4e1e-a413-010e7cb108b8%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/46d03dafe318511b1d7618ebf2dbb779/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Cappuccino",
        "price": "3,50 $",
        "description": "Laissez-vous tenter par la tradition italienne classique avec notre Cappuccino riche et crémeux ! Préparé avec un double expresso, du lait vapeur et garni d'une mousse de lait onctueuse, notre Cappuccino offre un équilibre parfait entre le goût corsé de l'espresso et la texture veloutée. Servi dans une tasse chaude, c'est le remontant idéal pour tout moment de la journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25224f8b37d4-11e8-46c2-814b-479fe349a556%2522%252C%2522itemUuid%2522%253A%2522089a9700-4717-4484-9c32-31c897a08dbd%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/f98d4dd9afe63ce4d4f582ca63aad796/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Jus (OASIS 322 ml)",
        "price": "Prix établi en fonction des ajouts",
        "description": "Jus Oasis, un délicieux mélange de fruits rafraîchissants, explosant de saveurs et riche en vitamines, parfait pour étancher votre soif.\"",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%2522eece095c-2d8f-4a77-b23d-6bbac624e62d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/35fd302b0c8bf81a174a352f298b514e/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Lait",
        "price": "3,25 $",
        "description": "Dégustez la douceur crémeuse de notre Lait ! Provenant des fermes laitières locales, notre lait est riche en calcium et en nutriments essentiels. Que vous l'associiez à vos biscuits préférés, que vous l'ajoutiez à vos céréales du matin ou que vous le savouriez simplement tel quel, notre lait est un choix sain et rafraîchissant à tout moment de la journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%2522e410d060-1ea7-4043-b2e7-58a8e7ef2308%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/9beafe73d8d41758f5becd1d3a0f318a/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Jus DOSE",
        "price": "Prix établi en fonction des ajouts",
        "description": "Revigorez votre journée avec notre Jus Dose, un mélange puissant de fruits et légumes frais emballé dans une dose pratique, offrant une explosion rapide et rafraîchissante de vitamines et de nutriments.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%2522aafdf2e2-4240-466d-a58d-41fa1c07090f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/90e6d09264afbfd1dd35c32c91170a76/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Jus RISE",
        "price": "Prix établi en fonction des ajouts",
        "description": "Commencez votre journée sur une note rafraîchissante avec notre Jus Rise, un mélange dynamique de fruits frais et de saveurs revigorantes qui éveillera vos sens et dynamisera votre matinée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%2522573fff2a-5ec5-44e3-86b2-aab2bb2db687%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/62e3948fbbd7245720095b28a59a3045/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Lait au Chocolat",
        "price": "5,20 $",
        "description": "Laissez-vous tenter par la richesse crémeuse de notre Lait au Chocolat, une boisson délicieuse qui marie la bonté du lait frais avec la saveur decadente du chocolat, créant une gâterie satisfaisante pour tous les âges.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%252282f6aa24-cd95-4075-802d-2ad3618098ba%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/261e6d3c5f31f5ef3bcbe4518bda8941/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Lait au Fraise",
        "price": "5,20 $",
        "description": "Savourez le goût sucré et rafraîchissant de notre Lait à la Fraise, une délicieuse boisson mêlant la bonté crémeuse du lait avec l'essence fruitée des fraises mûres, offrant une gâterie délicieuse à tout moment de la journée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522c71cb46d-3cd6-4283-8322-5aff36320da8%2522%252C%2522itemUuid%2522%253A%2522da8eb980-93b9-42fd-9c7a-03302b2797ab%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/fb166d04cff3ee26995916564e0ac359/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Crêpes",
        "price": "14,65 $",
        "description": "Un délice sucré ou salé, nos crêpes sont préparées avec amour et expertise. Légères, moelleuses et délicieusement garnies, elles sont une invitation à un festin pour les papilles. Que vous préfériez les classiques comme la crêpe au sucre ou que vous soyez tenté par des combinaisons plus audacieuses comme la crêpe au poulet et champignons, nous avons une option pour combler toutes les envies. Savourez nos crêpes au petit-déjeuner, au déjeuner ou au dîner, pour une expérience culinaire inoubliable à chaque bouchée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25226eb9eba3-deef-4267-8270-9eb5ef772164%2522%252C%2522itemUuid%2522%253A%252228048e3d-1cf3-4afa-9cfb-4819960e19aa%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/5cde75d353ec6b3010f836fde74de5fd/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Gauffre",
        "price": "14,65 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25226eb9eba3-deef-4267-8270-9eb5ef772164%2522%252C%2522itemUuid%2522%253A%252207519add-01a2-4a97-9883-1b9e85f76daf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/94144737cf1624ba847623751c1854d3/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Flotteur",
        "price": "7,49 $",
        "description": "Plongez dans un mélange rafraîchissant de saveurs fruitées avec nos flotteurs vibrants, offrant une explosion de douceur dans chaque gorgée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25223fd8cc67-87da-4527-ab8e-16f80256ad42%2522%252C%2522itemUuid%2522%253A%252227577f99-4b99-41ef-941d-4943d6530229%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8756419127688a90b55764394f17d0f8/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Slush",
        "price": "5,28 $",
        "description": "Rafraîchissez-vous avec nos slushs désaltérants, disponibles dans une variété de saveurs fruitées pour étancher votre soif et vous rafraîchir.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25223fd8cc67-87da-4527-ab8e-16f80256ad42%2522%252C%2522itemUuid%2522%253A%25224c815db6-ce1d-41f4-8c14-ac6d607a3ee1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/8e721821c0ce01e9976c2773853708d7/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Sundae",
        "price": "8,14 $",
        "description": "Laissez-vous tenter par une gâterie décadente avec nos irrésistibles sundae, composés de couches de crème glacée onctueuse nappées de succulents toppings chocolat, caramel et fraise.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25223fd8cc67-87da-4527-ab8e-16f80256ad42%2522%252C%2522itemUuid%2522%253A%25226aee42ed-e8e9-4292-859a-69aeb8207952%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/3b3f90c9207744b94e8f6625031b491b/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Nos Decadent Sundae",
        "price": "10,10 $",
        "description": "Laissez-vous tenter par un pur délice avec nos sundae somptueux, dévoilant des couches de crème glacée onctueuse ornées d'une multitude de garnitures irrésistibles, offrant une expérience dessert vraiment luxueuse.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25223fd8cc67-87da-4527-ab8e-16f80256ad42%2522%252C%2522itemUuid%2522%253A%25229d1ee2f8-b824-4841-9c6c-d677d0e1ba2e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/3b3f90c9207744b94e8f6625031b491b/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "NACHOS",
        "price": "14,99 $",
        "description": "Des croustilles de tortilla croustillantes garnies de fromage fondu et d'une variété d'accompagnements savoureux tels que de la viande assaisonnée, des haricots, des jalapeños, de la crème sure et de la salsa, créant une collation ou un repas savoureux et satisfaisant.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25229135806a-3b09-4464-9c3f-6261860901ae%2522%252C%2522itemUuid%2522%253A%2522787df07a-6cbe-4c48-8c44-5385d4f32488%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/51bcec0c61768f1a08882d18ab3537bc/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "TACOS",
        "price": "6,06 $",
        "description": "De délicieuses bouchées à emporter, composées de tortillas souples ou croustillantes garnies d'une variété d'ingrédients savoureux tels que de la viande assaisonnée (bœuf, poulet, porc ou poisson), des légumes frais, du fromage, de la salsa et du guacamole, offrant une explosion de saveurs et de textures à chaque bouchée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25229135806a-3b09-4464-9c3f-6261860901ae%2522%252C%2522itemUuid%2522%253A%25222de1f0d7-a735-4c96-b046-d4734b13a51c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/eb0b5583baeddf0524ae6c7cc3d1515d/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "BURRITOS",
        "price": "12,04 $",
        "description": "De généreux en-cas mexicains, des tortillas de farine moelleuses garnies d'un choix de viande assaisonnée (comme du bœuf, du poulet ou du porc), de riz, de haricots, de fromage, de crème sure, de salsa et d'autres garnitures savoureuses, le tout enveloppé dans une tortilla de farine. Ces délices à tenir à la main offrent une délicieuse combinaison de saveurs et de textures, parfaites pour tout repas.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25229135806a-3b09-4464-9c3f-6261860901ae%2522%252C%2522itemUuid%2522%253A%2522b1d90d9e-7d73-47dd-aeb8-066101d02218%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/7a4da6a11b9c487c9c3a0d406488bdf9/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "QUESADILLAS",
        "price": "14,64 $",
        "description": "Un délicieux plat mexicain composé de deux tortillas garnies de fromage fondu et d'une variété de garnitures savoureuses telles que de la viande assaisonnée (poulet, bœuf ou porc), des légumes et des haricots. Ces tortillas sont ensuite grillées ou toastées jusqu'à ce qu'elles soient croustillantes et dorées, créant ainsi une croûte extérieure satisfaisante avec un intérieur fondant et fromageux. Les quesadillas sont souvent servies avec de la salsa, du guacamole et de la crème sure pour tremper, ajoutant des couches supplémentaires de saveur à ce délicieux plat.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25229135806a-3b09-4464-9c3f-6261860901ae%2522%252C%2522itemUuid%2522%253A%2522ac7ffc7b-74e0-4c7f-983b-d7bd365cd1ec%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/cfa1f7854ec2086259fabf3be36f5534/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Syrup",
        "price": "3,93 $",
        "description": "Laissez-vous tenter par la douce nostalgie du Syrup, une délicieuse fusion de saveurs de soda classiques et de sirop d'érable riche, offrant une expérience de boisson rafraîchissante et typiquement canadienne.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25220eeb48c2-855f-49bb-984e-d70d46a6e57d%2522%252C%2522itemUuid%2522%253A%25223faf1a0a-2c20-452b-aff8-a124f8b5a66b%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/345cf1785eb7c9647a33bbe10bda80e9/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Muffin Anglais",
        "price": "2,50 $",
        "description": "Commencez bien votre journée avec nos muffins anglais fraîchement cuits ! Savourez la combinaison parfaite de texture moelleuse et de délice beurré à chaque bouchée. Que vous les préfériez nature ou garnis de votre tartinade préférée, nos muffins anglais sauront certainement combler vos envies de petit-déjeuner.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25226753122f-a01a-4d8c-a894-ef73f0de036a%2522%252C%2522itemUuid%2522%253A%252242806912-fca7-43e3-b1d3-2d7a4e269102%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/d6b7b3ea77c3081488ba4bfd18f65ef4/a19bb09692310dfd41e49a96c424b3a6.jpeg"
    },
    {
        "title": "Clean water",
        "price": "0,50 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522246bb39a-d95f-492a-9020-dab109bf3844%2522%252C%2522itemUuid%2522%253A%2522656296b0-3f12-4ad5-9853-c6e5e7d5752a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Fromage",
        "price": "15,58 $",
        "description": "Le fromage à pizza se compose souvent d'un mélange de deux fromages ou plus, comme la Mozzarella à faible teneur en humidité ou le Provolone.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25228e8e704d-61f5-45fa-a9f9-e232869f0da0%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Vegetarian",
        "price": "18,59 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25223ca94abb-476e-4878-a295-29b395333abf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Toute Garnie",
        "price": "16,90 $",
        "description": "Pizza surgelée fabriquée à la main avec des ingrédients et des garnitures de première qualité. La pizza est précuite à la perfection puis rapidement congelée et scellée sous vide afin de préserver une fraîcheur maximale.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%2522719408d8-63e7-4a16-b67b-e64c2faadf17%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Mexicaine",
        "price": "18,59 $",
        "description": "Cette pizza fusion mettra une touche de soleil dans votre journée, avec une base de salsa sur pâte pré-cuite, garnie d'haricots noirs, de poivrons multicolores, d'oignons verts, et couronnée d'un généreux fromage râpé style tex-mex, pour une expérience culinaire colorée et savoureuse!",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25222e15d04c-4b8d-4e22-8e96-a1ad49843baf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Poulet",
        "price": "18,59 $",
        "description": "Le poulet, les saucisses italiennes douces, les champignons cremini, le fromage fontina et les tranches de poivron rouge ne sont que quelques-uns des ingrédients que nous avons utilisés pour habiller cette pizza au poulet maison.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25220a9451c9-aa54-4e91-98db-45f836919013%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Pepproni",
        "price": "15,58 $",
        "description": "Le pepperoni est une variété de salami épicé à base de porc et de bœuf séchés assaisonnés de paprika et de piments. Avant la cuisson, le pepperoni est typiquement doux, légèrement fumé et rouge vif. Le pepperoni tranché est l'une des garnitures de pizza les plus populaires dans les pizzerias américaines.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%2522f86528be-990a-47fb-9c36-1117cd7788f0%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Shish Taouk",
        "price": "18,59 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%252298e0d567-2e1f-40f0-b656-49df59cfb257%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Shawarma",
        "price": "18,59 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25227fe45f2d-f582-409c-bb37-5a5ef604fa20%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pizza Bacon",
        "price": "18,59 $",
        "description": "Notre pizza au bacon merveilleusement parfumée utilise du bacon croustillant, des légumes et de la crème sure pour une gâterie spéciale.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25228589d1a8-50b3-44d8-bf2d-6b843d365136%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "10\" Pain Magique",
        "price": "19,48 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25227a338357-a1ee-42a4-9edd-0a4dd05caebf%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "10\" Pain Magique Fromage",
        "price": "22,08 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522e3f9c895-784b-4643-a53d-cf9671561431%2522%252C%2522itemUuid%2522%253A%25223ae077c4-8a2d-44f3-8cb4-ee88db66b318%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Special Familiale",
        "price": "Prix établi en fonction des ajouts",
        "description": "Special Familiale Combo 2 Pizzas + 12 ailes de poulet +2 moyennes poutines + 4 Pepsi 355 ml",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%2522fb04552f-0181-4ccb-8f1c-5dab119071ec%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Mega Special",
        "price": "Prix établi en fonction des ajouts",
        "description": "Mega Special 2 Pizzas +Frites familiales ou grande poutine + 4 Pepsi 355ml",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%25229d0d7388-0d4f-4d75-b2fe-e2ed3f39d9a3%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "PROMO PIZZA + FRITES",
        "price": "Prix établi en fonction des ajouts",
        "description": "Promo Pizza + Frites",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%2522134a8688-1ad3-4f79-a289-95b5b7dff40d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Promo Pizza + Ailes",
        "price": "Prix établi en fonction des ajouts",
        "description": "1 Promo Pizza + Ailes de Poulet +Frites",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%252269126993-9fda-496d-801a-44fe0037b352%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Festin Familial",
        "price": "Prix établi en fonction des ajouts",
        "description": "Special 2 Pizzas +4 pieces of Chicken or 10 Chicken Wings + 1 Medium Fries + 4 Pepsi + Eclaire",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%2522fe69fdc5-c855-480e-9d41-b92af30eba0a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Trio Pizza",
        "price": "Prix établi en fonction des ajouts",
        "description": "1 pizza, 1 Pepsi 355 mL, and 1 fries + Brownies.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25227a9330cd-3aa1-415b-8f1c-80b41e132891%2522%252C%2522itemUuid%2522%253A%2522fee051b9-494f-4b78-abf3-8c1b4951dc75%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Flotteur",
        "price": "7,49 $",
        "description": "Plongez dans un mélange rafraîchissant de saveurs fruitées avec nos flotteurs vibrants, offrant une explosion de douceur dans chaque gorgée",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25220c8d2bf9-2a9a-4273-9f49-d3c50e8cc573%2522%252C%2522itemUuid%2522%253A%25220215af63-7a15-4941-a7f2-ff4f070e993f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/74f1043a03a8a341455f0c4a4bdd82b4/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Slush",
        "price": "5,28 $",
        "description": "Rafraîchissez-vous avec nos slushs désaltérants, disponibles dans une variété de saveurs fruitées pour étancher votre soif et vous rafraîchir.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25220c8d2bf9-2a9a-4273-9f49-d3c50e8cc573%2522%252C%2522itemUuid%2522%253A%252278ac32ae-0b46-4e3a-999e-1411b6b3f8db%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/af352efafd1dbdc028a290b0e398bf03/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Nos Sundae",
        "price": "8,14 $",
        "description": "Laissez-vous tenter par une gâterie décadente avec nos irrésistibles sundae, composés de couches de crème glacée onctueuse nappées de succulents toppings chocolat, caramel et fraise.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25220c8d2bf9-2a9a-4273-9f49-d3c50e8cc573%2522%252C%2522itemUuid%2522%253A%2522bed2ccd3-d9d8-42fa-adb8-8aefc3b67380%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ca5987dbe7c630e46c1b174a2c459015/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Nos Decadent Sundae",
        "price": "10,10 $",
        "description": "Laissez-vous tenter par un pur délice avec nos sundae somptueux, dévoilant des couches de crème glacée onctueuse ornées d'une multitude de garnitures irrésistibles, offrant une expérience dessert vraiment luxueuse.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%25220c8d2bf9-2a9a-4273-9f49-d3c50e8cc573%2522%252C%2522itemUuid%2522%253A%2522d4007ca0-a843-454e-8de7-eaf09ed9de23%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "NACHOS",
        "price": "14,99 $",
        "description": "Des croustilles de tortilla croustillantes garnies de fromage fondu et d'une variété d'accompagnements savoureux tels que de la viande assaisonnée, des haricots, des jalapeños, de la crème sure et de la salsa, créant une collation ou un repas savoureux et satisfaisant.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522a0308abb-5bb3-415d-8260-29ce8a540ba8%2522%252C%2522itemUuid%2522%253A%25224cce8049-2641-44e9-ab83-469f89cb02f6%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4a1fca5200546000a097e8917a1cf1b0/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "TACOS",
        "price": "6,06 $",
        "description": "De délicieuses bouchées à emporter, composées de tortillas souples ou croustillantes garnies d'une variété d'ingrédients savoureux tels que de la viande assaisonnée (bœuf, poulet, porc ou poisson), des légumes frais, du fromage, de la salsa et du guacamole, offrant une explosion de saveurs et de textures à chaque bouchée.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522a0308abb-5bb3-415d-8260-29ce8a540ba8%2522%252C%2522itemUuid%2522%253A%2522ce57dd2e-968c-432b-92e1-2c9452365dd7%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/4f1548d089fc1ec0ea394108b6f3f993/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "BURRITOS",
        "price": "12,04 $",
        "description": "De généreux en-cas mexicains, des tortillas de farine moelleuses garnies d'un choix de viande assaisonnée (comme du bœuf, du poulet ou du porc), de riz, de haricots, de fromage, de crème sure, de salsa et d'autres garnitures savoureuses, le tout enveloppé dans une tortilla de farine. Ces délices à tenir à la main offrent une délicieuse combinaison de saveurs et de textures, parfaites pour tout repas",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522a0308abb-5bb3-415d-8260-29ce8a540ba8%2522%252C%2522itemUuid%2522%253A%2522d199d711-e43f-42c4-a577-ccbdc717445e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/bdfa60eddf71305a4ccd333ffa0cd791/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "QUESADILLAS",
        "price": "14,64 $",
        "description": "Un délicieux plat mexicain composé de deux tortillas garnies de fromage fondu et d'une variété de garnitures savoureuses telles que de la viande assaisonnée (poulet, bœuf ou porc), des légumes et des haricots. Ces tortillas sont ensuite grillées ou toastées jusqu'à ce qu'elles soient croustillantes et dorées, créant ainsi une croûte extérieure satisfaisante avec un intérieur fondant et fromageux. Les quesadillas sont souvent servies avec de la salsa, du guacamole et de la crème sure pour tremper, ajoutant des couches supplémentaires de saveur à ce délicieux plat.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522a0308abb-5bb3-415d-8260-29ce8a540ba8%2522%252C%2522itemUuid%2522%253A%252235066b51-5dbd-4ce7-aedc-a82c3af431a3%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/be51e475540e70ab9648afdc4c0e839e/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Pilon Frites Combo PF -3",
        "price": "17,81 $",
        "description": "Combo PF 3 MCX + 1 Small Frite + 1 Sauce",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522bb4779cc-3905-4e40-9be4-34f0bc07c3f2%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pilon Frites Combo PF - 6",
        "price": "27,95 $",
        "description": "Pilon Frites Combo 6 MCX +1 Petit Frites + 2 Sauces +1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522f2e4b04b-2314-4098-aca3-32c2da8002b1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Pilon Frites Combo PF - 10",
        "price": "39,65 $",
        "description": "Pilon Frites Combo PF 10 MCX + 1 Moyenne Frite + 3 Sauce + 1 Salade de Choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522beb78369-543f-46cc-a132-468ddb719c5f%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Laniere Combo LP- 3",
        "price": "16,25 $",
        "description": "Laniere Combo 3 MCX + 1 Petit Frite+ 2 Sauces +1 Salade de Choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%25223cf50a25-ee4d-4b72-9031-4d7c14951b8c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Laniere Combo LP -6",
        "price": "21,06 $",
        "description": "Laniere Combo 6 MCX+ 1 Petit Frite + 2 sauces +1 salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%25226bd4f449-f527-41ee-adef-d99ea5296a08%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Laniere Combo LP - 10",
        "price": "39,65 $",
        "description": "Laniere Combo LP -10 + 1 Moyenne Frite +3 Sauces + 1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522d62e2c87-06a7-4fc7-ade0-7198c3e2c229%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Ailes Combo AP- 6",
        "price": "20,78 $",
        "description": "Combo AP - 6 MCX + 1 Frite + 1 sauce + 1 salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522e0c562f3-060d-4737-b0fd-2f40acd03c95%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Ailes Combo AP- 10",
        "price": "25,98 $",
        "description": "Combo AP 10 MCX + Frites+ 2 sauces+1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522d0a1ad72-5155-4c9a-baac-1f51d5dedecb%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Ailes Combo AP- 14",
        "price": "31,19 $",
        "description": "Combo Ailes 14 MCX +Frite+ 2 sauces+ 1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522c7169670-f761-4d25-b516-9f696709f92e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Nos Ailes Combo AP- 18",
        "price": "35,08 $",
        "description": "Combo Ailes 18 + Frites + 2 sauces + 1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522f0feff16-fa36-4bc1-8053-b00e14018b8c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Croquettes  Combo CP-6",
        "price": "16,88 $",
        "description": "Croquettes Combo 6 MCX +1 Petit Frites+ 1 Sauce",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%25221fd1f779-b36f-4b0e-b74d-4b49eb7ce732%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Croquettes Combo CP- 10",
        "price": "20,78 $",
        "description": "Croquettes combo 10 MCX +1 Petit Frites +2 sauces + 1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522e218c202-f995-4b96-aaf7-916eea16ae7d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Croquettes combo CP- 14",
        "price": "25,98 $",
        "description": "Croquettes Combo 14 MCX + Moyenne Frites +2 Sauces +1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%25229fbbdbb7-e453-4d76-b3b9-090e4d4a1073%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Croquettes Combo CP- 18",
        "price": "31,18 $",
        "description": "Croquettes Combo 18 MCX + 1 Grande Frites + 2 Sauces + 1 Salade de choux",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%2522b888e97f-78db-49a9-8297-66aaeb155a32%2522%252C%2522itemUuid%2522%253A%2522c8b6ae75-bc1a-45e6-9bcc-b394fc61961d%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Assiette Shish Taouk Poulet",
        "price": "20,78 $",
        "description": "Toutes les assiettes sont servies avec tomates, navets, poivrons,\nainsi que votre choix d'accompagnement, salade et sauce.",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%252213a80fdd-e444-4712-837b-a44d1935602a%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/a929e974ff43cb5959c8d53d569e91a3/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Pita / Fajitas Shish Taouk ( POULET)",
        "price": "9,73 $",
        "description": "Toutes nos pita sont servi avec tomates, navets, poivrons, Pita /Fajitas",
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522a352e7ee-d376-4720-9515-e5429000577c%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/eac30b3225e11a525a90fcb07f921cdc/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Nos Combo Vegetarien",
        "price": "19,48 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522d2f62722-3bf2-400e-b889-e0d4aefd6eb1%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/1c2461316efad3f0002366170a0ba45a/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Nos Vegetarien Trio",
        "price": "13,32 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%252238797b0a-bd7f-4b6f-92fc-68266a270304%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": "https://tb-static.uber.com/prod/image-proc/processed_images/ab23ab10176d73c271fcd116d9c1a4f8/7f4ae9ca0446cbc23e71d8d395a98428.jpeg"
    },
    {
        "title": "Assiette Shawarma Boeuf",
        "price": "20,78 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522cafd90b3-6114-422e-8ea4-7bca1cfd4e14%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Assiette Mixte BOEUF + POULET",
        "price": "23,38 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522b165b932-da72-4d0d-8832-3541cce6af08%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Assiette Vegetarien  ( COUCOUS )",
        "price": "16,88 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522cbbde52a-cffa-4cd6-a54a-df54011f046e%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    },
    {
        "title": "Assiette Falafel ( FALAFEL )",
        "price": "15,58 $",
        "description": null,
        "productLink": "https://www.ubereats.com//ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&mod=quickView&modctx=%257B%2522storeUuid%2522%253A%2522859ce912-e413-521f-88bc-aa5a68eb9100%2522%252C%2522sectionUuid%2522%253A%25229cdebebe-a5ce-4737-95d2-5ea3e34805cf%2522%252C%2522subsectionUuid%2522%253A%252232217db6-0b5c-446b-8e2e-c79261b84c8c%2522%252C%2522itemUuid%2522%253A%2522ba01891a-0ae5-4c35-a004-510b303edff4%2522%252C%2522showSeeDetailsCTA%2522%253Atrue%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1",
        "imageUrl": null
    }
];

async function writeDataToCSV(data) {
  const csvWriter = createCsvWriter({
    path: path.join(__dirname, 'products.csv'),
    header: [
      { id: 'title', title: 'Title' },
      { id: 'price', title: 'Price' },
      { id: 'description', title: 'Description' },
      { id: 'productLink', title: 'ProductLink' },
      { id: 'imageUrl', title: 'Image URL' },
    ]
  });

  // Write records to CSV file
  try {
    await csvWriter.writeRecords(data);
    console.log('CSV file was written successfully');
  } catch (error) {
    console.error('Error writing to CSV file:', error);
  }
}

// Call the function
writeDataToCSV(data);


// function extractProductData() {
//     const productContainers = document.querySelectorAll('a.al.ek.cz.d4.r3.r4.r5');
//     const products = Array.from(productContainers).map((container, index) => {
//       const productLink = productContainers[index].getAttribute('href');
//       const titleElement = container.querySelector('.dc.dd.de.kd.ke.m4.bb span');
//       const priceElement = container.querySelector('.lx.al.ca.hf span');
//       const descriptionElement = container.querySelector('.lx.kd.kf.ke.bb.r9.ex span');
//       const imageElement = container.querySelector('img');
  
//       return {
//         title: titleElement ? titleElement.innerText.trim() : null,
//         price: priceElement ? priceElement.innerText.trim() : null,
//         description: descriptionElement ? descriptionElement.innerText.trim() : null,
//         productLink:productLink? `https://www.ubereats.com/${productLink}`: null,
//         imageUrl: imageElement ? imageElement.src : null,
//       };
//     });
  
//     console.log(products);
//     return products;
//   }
  
//   extractProductData()
