//Renderizado de listas

const vm = new Vue({
    el: '#app',
    data: {
        departamentos: [
            {
                id: 1,
                location: {
                    state: 'Amazonas', 
                    city: ["Leticia","El encanto","La Chorrera","La Pedrera","Miritiparaná","Puerto Alegría","Puerto Arica","Puerto Nariño","Puerto Santader"]
                }
               
            },
            {
                id: 2,
                location: {
                    state: 'Atlántico', 
                    city: ["Baranoa","Baranoa","Barranquilla","Campo de la Cruz","Candelaría","Galapa","San Juan de Acosta","Luruaco","Malambo","Manatí","Palmar de Varela","Piojo","Polo Nuevo","Ponedera","Puerto Colombia","Repelón","Sabanagrande","Sabanalarga","Santa Lucía","Santo Tomás","Soledad","Suan","Tubara","Usiacurí"]
                }
               
            },
            {
                id: 3,
                location: {
                    state: 'Caquetá', 
                    city: ["Albania","Belén de los Andaquíes","Cartagena del Chaira","Curillo","El Doncello","El Paujil","Florencia","La Montañita","Milan","Morelia","Puerto Rico","San José de Fragua","San Vicente del Caguán","Solano","Solita","Valparaíso"]
                }
               
            },
            {
                id: 4,
                location: {
                    state: 'Cesar', 
                    city: ["Aguachica","Agustín Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguaná","Curumaní","El Copey","El Paso","Gamarra","González","La Gloria","La Jagua","Ibirico","Manaure","Pailitas","Pelaya","Pueblo Bello","Río de Oro","Robles la Paz","San Alberto","San Diego","San Martín","Tamalameque","Valledupar"],
                }
                
            },
            {
                id: 5,
                location: {
                    state: 'Chocó', 
                    city: ["Acandi","Alto Baudo","Atrato","Bagado","Bahía Solano","Belén de bajirá","Bajo Baudo","Bojayá","Cantón de San Pablo","Carmen del Darién","Certeguí","Condoto","El Carmen","Istmina","Jurado","Litoral del San Juan","Lloró","Medio Atrato","Medio Baudo","Medio San Juan","Novita","Nuquí","Quibdó","Río Iro","Río Quito","Riosucio","San José del Palmar","Sipí","Tado","Unguía","Unión Panamericana"]
                }
            },
            {
                id: 6,
                location: {
                    state: 'Cordoba', 
                    city: ["Ayapel","Buenavista","Canalete","Cerete","Chima","Chinu","Ciénaga de Oro","Cotorra","La Apartada","Lorica","Los Córdobas","Momil","Moñitos","Montelibano","Montería","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Purísima","Sahagun","San Andrés","Sotavento","San Antero","San Bernardo Viento","San Carlos","San Pelayo","Tierralta","Tuchin","Valencia"]
                }
               
            },
            {
                id: 7,
                location: {
                    state: 'Guainia', 
                    city: ["Inírida","Barranco Minas","Cacahual","La Guadalupe","Mapiripana","Morichal","Pana Pana","Puerto Colombia","San Felipe"]
                }
               
            },
            {
                id: 8,
                location: {
                    state: 'Guaviare', 
                    city: ["Calamar","El Retorno","Miraflores","San José del Guaviare"],
                }
                
            },
            {
                id: 9,
                location:{
                    state: 'Huila', 
                    city: ["Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","Elias","Garzón","Gigante","Guadalupe","Hobo","Íquira","Isnos","La Argentina","La Plata","Nataga","Neiva","Oporapa","Paicol","Palermo","Palestina","Pital","Pitalito","Rivera","Saladoblanco","San Agustín","Santa María","Suaza","Tarqui","Tello","Teruel","Tesalia","Timana","Villavieja","Yaguará"]
                }
              
            },
            {
                id: 10,
                location: {
                    state: 'La Guajira', 
                    city: ["Riohacha","Albania","Barranca","Dibulla","Distracción","El Molino","Fonseca","La Jagua del Pilar","Maicao","Manaure","San Juan del Cesar","Urumita","Villa Nueva"]
                }
            },
            {
                id: 11,
                location: {
                    state: 'Putumayo', 
                    city: ["Colón","Mocoa","Orito","Puerto Asís","Puerto Caicedo","Puerto Guzman","Leguizamo","San Francisco","San Miguel","Santiago","Sibundoy","Valle del Guamuez","Villagarzón"]
                }
            },
            {
                id: 12,
                location: {
                    state: 'Quindío', 
                    city: ["Armenia","Buenavista","Calarca","Circasia","Córdoba","Filandia","Genova","La Tebaida","Montenegro","Pijao","Quimbaya","Salento"]
                }
            },
            {
                id: 13,
                location: {
                    state: 'San Andrés y Providencia', 
                    city: ["Providencia","San Andrés y Providencia"]
                }
            },
            {
                id: 14,
                location: {
                    state: 'Sucre', 
                    city: ["Buenavista","Caimito","Chalán","Colosó","Coveñas","Corozal","El Roble","Galeras","Guaranda","La Unión","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampués","San Benito Abad","San Juan de Betulia","San Marcos","San Onofre","San Pedro","Sincé","Sincelejo","Sucre","Tolú","Toluviejo"]
                }
            },
            {
                id: 15,
                location: {
                    state: 'Tolima', 
                    city: ["Alpujarra","Alvarado","Ambalema","Anzoátegui","Ataco","Cajamarca","Carmen de Apicalá","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falán","Flandes","Fresno","Guamo","Guayabal","Herveo","Honda","Ibagué","Icononzo","Lérida","Líbano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificación","Rioblanco","Roncesvalles","Rovira","Saldaña","San Antonio","San Luis","Santa Isabel","Suárez","Valle de San Juan","Venadillo","Villahermosa","Villarrica"]
                }
            },
            {
                id: 16,
                location: {
                    state: 'Vaupés', 
                    city: ["Cacarú","Mitú","Papunaua","Pacoa","Taraira","Yavaraté"]
                }
            },
            {
                id: 17,
                location: {
                    state: 'Vichada', 
                    city: ["Cumaribó","La Primavera","Puerto Carreño","Santa Rosalia"]
                }
            }
        ]
    }
});