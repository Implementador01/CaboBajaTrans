// Exportar el tipo Zona
export type Zona = "zona1" | "zona2" | "zona3" | "zona4" | "zona5";

// Mapeo de direcciones a zonas
export const mapeoZonas: { [direccion: string]: Zona | 'especial' } = {

    //Aeropuertos
"Aeropuerto de San Jose": "zona5",
"Aeropuerto de Los Cabos": "zona5",

 // Precios especiales
"Agave Hotel and Cantina, Buena Vista": "especial",
"Rancho Pescadero": "especial",
"Baja Surf Casitas": "especial",
"El Cardonal Golf Course": "especial",
"Santorini Palace, El Pescadero": "especial",
"Tequila Ranch": "especial",

  // Zona 1
 "Agave Kitchen": "zona1",
"Art Walk San Jose del Cabo": "zona1",
"Baja Brewing San Jose del Cabo": "zona1",
"Alegranza": "zona1",
"Barceló Grand Faro Los Cabos": "zona1",
"Cabo Azul Resort": "zona1",
"Cabo Azul, a Hilton Vacation Club": "zona1",
"Campo de Golf Fonatur": "zona1",
"Cardinal Living San Jose del Cabo": "zona1",
"Chambao san jose": "zona1",
"Chamuyo Restaurant San Jose": "zona1",
"Club Campestre San Jose Del Cabo": "zona1",
"Coral Baja": "zona1",
"Dalton Gin Bar": "zona1",
"Drift Hotel San Jose": "zona1",
"El Conquistador Condos": "zona1",
"El Encanto Inn & Suites": "zona1",
"El Zalate": "zona1",
"Flamboyan Hotel and Residences": "zona1",
"Grand Decameron Los Cabos, A Trademark All Inclusive Resort": "zona1",
"Habanero's Gastro Grill": "zona1",
"Hotel Casa Costa Azul": "zona1",
"Hotel Casa Natalia": "zona1",
"Hotel Colli": "zona1",
"Hotel Posada Terranova": "zona1",
"Hyatt Place Los Cabos": "zona1",
"Hyatt Ziva Los Cabos": "zona1",
"Jardin Secreto Cabo": "zona1",
"Jazmin's Restaurant": "zona1",
"Krystal Grand Los Cabos": "zona1",
"La Jolla": "zona1",
"La Lupita Taco and Mezcal San Jose del Cabo": "zona1",
"Las Mañanitas": "zona1",
"Las Olas Condominiums": "zona1",
"Los Tres Gallos San Jose del Cabo": "zona1",
"Marina San Jose del Cabo": "zona1",
"Marisol Boutique Hotel": "zona1",
"Mi Casa Restaurant San Jose del Cabo": "zona1",
"Mirador Condos San Jose del Cabo": "zona1",
"Mykonos Bay Resort": "zona1",
"Nido at Viceroy Los Cabos": "zona1",
"Palmilla": "zona1",
"Palmilla Golf Club": "zona1",
"Royal Decameron Los Cabos": "zona1",
"Royal Solaris Los Cabos": "zona1",
"San Jose del Cabo": "zona1",
"Posada Real Los Cabos": "zona1",
"Puerta Cabo Village": "zona1",
"Soleado Beach & Spa Resort": "zona1",
"Campo de Golf_Fonatur": "zona1",
"Secrets Puerto Los Cabos Golf & Spa Resort": "zona1",
"Tamarindos Mexican Farm to Table": "zona1",
"Viceroy Hotel": "zona1",
"Vidanta Los Cabos": "zona1",
"Ventanas de Cortes": "zona1",
"Ventanas del Cabo": "zona1",
"Ventanas del Mar": "zona1",
"Ventanas Residences": "zona1",
"Villa Alegria, Cabo Bello": "zona1",
"Villa Captiva, Palmilla": "zona1",
"The Break": "zona1",
"Villa de la Playa, Costa Brava": "zona1",
"The Westin Resort & Spa": "zona1",
"The Break, San Jose del Cabo": "zona1",
"Villa Salina del Mar": "zona1",
"Villa Salina del Mar #5": "zona1",

  
  // Zona 2
"7 Seas Seafood Grille": "zona2",
"Acre Baja": "zona2",
"Acre Resort": "zona2",
"Alebrije At Las Ventanas": "zona2",
"Aqua Restaurant at Palmilla": "zona2",
"Arbol at Las Ventanas al Paraíso": "zona2",
"Cabo Bello": "zona2",
"Carbon Cabron": "zona2",
"Cabo Colorado": "zona2",
"Casa Alegria Cabo del Sol": "zona2",
"Casa Cielo in Punta Bella": "zona2",
"Casa Crescent, Palmilla": "zona2",
"Casa del Mar Golf Resort & Spa": "zona2",
"Casa Edwards Too, Punta Bella": "zona2",
"Casa Estrella de Mar, Punta Bella": "zona2",
"Casa Kay, Puerto Los Cabos": "zona2",
"Casa Las Rocas, Costa Brava": "zona2",
"Casa Maat at JW Marriott Los Cabos Beach Resort & Spa": "zona2",
"Casa Mariposa in Punta Bella": "zona2",
"Casa Mateo Corridor": "zona2",
"Casa Naah Payil, Cabo del Sol": "zona2",
"Casa Oliver, Puerto Los Cabos": "zona2",
"Casa Paraiso inspirato Los Cabos": "zona2",
"Casa Rio de Luna, Rancho Cerro Colorado": "zona2",
"Casa Stamm Cabo del Sol": "zona2",
"Casa Sunny Days, Blue Sea": "zona2",
"Casa Tortuga Cabo del Sol": "zona2",
"Cerro Colorado": "zona2",
"Chileno Bay Golf & Beach Club": "zona2",
"Club Regina Los Cabos": "zona2",
"CoLiVilla Costa Azul": "zona2",
"Comal at Chileno Bay": "zona2",
"Costa Brava Corridor": "zona2",
"Dreams Los Cabos Suites Golf Resort & Spa": "zona2",
"El Dorado Golf and Beach Club": "zona2",
"El Merkado": "zona2",
"El Peñon #5, Cabo del Sol": "zona2",
"Fiesta Americana Vacation Club at Cabo del Sol": "zona2",
"Flora Farms": "zona2",
"Four Seasons Resort at Cabo del Sol": "zona2",
"Fundadores": "zona2",
"Garza Blanca Resort and Spa": "zona2",
"Grand Velas Boutique Los Cabos": "zona2",
"Grand Velas Los Cabos": "zona2",
"Hampton Inn and Suites": "zona2",
"Hilton Casa Dorada": "zona2",
"Hilton Los Cabos Beach & Golf Resort": "zona2",
"Hotel El Ganzo": "zona2",
"Hotel Grand Regina": "zona2",
"JW Marriott Los Cabos Beach Resort & Spa": "zona2",
"La Marina Inn": "zona2",
"La Pacifica Los Cabos by Hilton Grand Vacations": "zona2",
"La Vista #17 at Querencia": "zona2",
"Las Residencias Golf & Beach Club": "zona2",
"Las Ventanas al Paraiso": "zona2",
"Le Blanc Spa Resort Los Cabos": "zona2",
"Maravilla Los Cabos": "zona2",
"Marina Puerto Los Cabos": "zona2",
"Marquis Los Cabos": "zona2",
"Montage Los Cabos": "zona2",
"Nick San Palmilla": "zona2",
"One & Only Palmilla": "zona2",
"Paradisus Los Cabos": "zona2",
"Paraiso Residences": "zona2",
"Park Royal Los Cabos": "zona2",
"Puerto Los Cabos Golf Course": "zona2",
"Querencia": "zona2",
"Solaz Los Cabos": "zona2",
"Cabo Surf Hotel and Spa": "zona2",
"Cardinal Living San Jose_del Cabo": "zona2",
"Casa Crescent Palmilla": "zona2",
"Ruth's Chris Steak House Los Cabos": "zona2",
"Secrets Puerto Los Cabos Golf & Spa_Resort": "zona2",
"Semillon at Puerto Raiz": "zona2",
"Ventanas, Fase 2B Casa #71": "zona2",
"Villa La Valencia Beach Resort and Spa": "zona2",
"The Club At Solaz": "zona2",
"Villa La Roca #102, Casa del Mar": "zona2",
"Villa María de Las Pilas": "zona2",
"Villa Nirvana, Caleta Palmilla": "zona2",
"Villa Paraiso, Punta Bella": "zona2",
"Villas del Mar at Palmilla": "zona2",
"Villa Vegas Dave 3, Punta Bella": "zona2",


  // Zona 3
"1 Homes Preview Cabo": "zona3",
"605 Tower Downtown Cabo Vacational Rental": "zona3",
"Agua Salada Restaurant": "zona3",
"Auberge Private Residences by Esperanza (APRE)": "zona3",
"Bagatelle Los Cabos": "zona3",
"Bahia del Tezal": "zona3",
"Bahia Hotel & Beach Club": "zona3",
"Baja Brewing Cabo San Lucas": "zona3",
"Bajo La Luna Restaurant": "zona3",
"Boutique Casa Bella Hotel": "zona3",
"Breathless Cabo San Lucas Resort & Spa": "zona3",
"Cabo del Sol": "zona3",
"Cabo del Sol Golf Course": "zona3",
"Cabo San Lucas": "zona3",
"Cabo Surf Hotel and_Spa": "zona3",
"Amaterra Cabo San Lucas": "zona3",
"Cabo del Mar": "zona3",
"Cabo del Mar Condo #5924": "zona3",
"Cabo Peninsula Residences": "zona3",
"Cabo Plaza": "zona3",
"Cabo Vista Hotel": "zona3",
"Cachet Beach": "zona3",
"Camino del Mar": "zona3",
"Cardinal Living Cabo San Lucas": "zona3",
"Casa Antigua Azul, Cabo Bello": "zona3",
"Casa Ballena, Pedregal": "zona3",
"Casa Bellamar": "zona3",
"Casa Corona Cabo del Sol": "zona3",
"Casa Del Amanecer at El Encanto la Laguna": "zona3",
"Casa del Arco, Misiones del Cabo": "zona3",
"Casa Dorada": "zona3",
"Casa La Mexicana, Cabo San Lucas": "zona3",
"Casa Entre Suenos, Rancho Paraiso": "zona3",
"Casa La Piñata, Pedregal": "zona3",
"Casa Los Mismos in Cabo San Lucas": "zona3",
"Casa Luna Cabos, Misiones del Cabo": "zona3",
"Casa Mantea Cabo, Pedregal": "zona3",
"Casa Martin Cabo San Lucas": "zona3",
"Casa Sonara, Pedregal": "zona3",
"Casa Stephens": "zona3",
"Cascadas Beach Grill": "zona3",
"Chambao Los Cabos": "zona3",
"Chamuyo Restaurant Cabo San Lucas": "zona3",
"Club Cascadas de Baja": "zona3",
"Cocina del Mar": "zona3",
"Comfort Inn & Suites Los Cabos": "zona3",
"Condominium at Vista Vela I #3205 by Buserfin": "zona3",
"Condominium at Vista Vela II #7201 by Buserfin": "zona3",
"Condominium at Vista Vela III #8504 by Buserfin": "zona3",
"Confessions Skybar Los Cabos": "zona3",
"Corazon Cabo Resort and Spa (Cabo Villas)": "zona3",
"Country Club Los Cabos": "zona3",
"Cresta del Mar": "zona3",
"Cruise Port": "zona3",
"Krush Nightclub": "zona3",
"Doc Wine Bar Cabo": "zona3",
"Downtown CSL": "zona3",
"Duara Los Cabos": "zona3",
"Ediths Restaurant": "zona3",
"El Ameyal Hotel & Wellness Center": "zona3",
"El Descanso Condominiums": "zona3",
"El Encanto de La Laguna": "zona3",
"El Farallon at Waldorf Astoria": "zona3",
"El Huerto Farm to Table": "zona3",
"El Tezal, Cabo San Lucas": "zona3",
"Elefant Luxury Suites": "zona3",
"Esperanza An Auberge Resort": "zona3",
"Fairfield Inn Los Cabos": "zona3",
"Funky Geisha Los Cabos": "zona3",
"Grand Fiesta Americana Los Cabos All Inclusive Golf & Spa": "zona3",
"Grand Solmar Land's End Resort & Spa": "zona3",
"Hacienda Beach Club & Residences": "zona3",
"Hacienda Cocina & Cantina": "zona3",
"Hacienda del Mar Vacation Club": "zona3",
"Hacienda Encantada Resort & Spa": "zona3",
"Hacienda Punta Vista in Cabo San Lucas (Airbnb)": "zona3",
"Holiday Inn Express Cabo San Lucas": "zona3",
"Hotel City Express Plus Cabo San Lucas": "zona3",
"Hotel María Elena": "zona3",
"Hotel Vistazul Suites & Spa": "zona3",
"Hyatt Vacation Club At Sirena Del Mar": "zona3",
"IGY Marina, Dock K": "zona3",
"Jazz on the Rocks at Sunset Point": "zona3",
"JM Steak House Cabo San Lucas": "zona3",
"La Pintada Cabo San Lucas": "zona3",
"La Vista Residencial": "zona3",
"Lorenzillo's Restaurant": "zona3",
"Live Aqua Private Residences Los Cabos": "zona3",
"Los Tres Gallos Cabo San Lucas": "zona3",
"Los Cabos Golf Resort": "zona3",
"Los Cabos Tour": "zona3",
"Los Cabos Tourist Corridor": "zona3",
"Los Milagros": "zona3",
"Los Patios": "zona3",
"Maison de Cortes, Pedregal": "zona3",
"Malibu Farm Los Cabos": "zona3",
"Mamazzita Los Cabos": "zona3",
"Mandala": "zona3",
"Mango Deck": "zona3",
"Manta at The Cape hotel": "zona3",
"Mar de Cortez": "zona3",
"Mar del Cabo": "zona3",
"Maralta F 202 by Buserfin": "zona3",
"Maralta F 208 by Buserfin": "zona3",
"Marea Fragata #403 Los Cabos by Amaco Rentals": "zona3",
"Marea Golondrinas #305 Los Cabos by Amaco Rentals": "zona3",
"Marea Los Cabos": "zona3",
"Maria Corona Restaurant": "zona3",
"Marina Cabo San Lucas": "zona3",
"Marina CSL, Dock I": "zona3",
"Marina Fiesta Resort & Spa": "zona3",
"Marina Sol": "zona3",
"Marina Sol Condos": "zona3",
"Marina View Villa": "zona3",
"Mayan Monkey Los Cabos": "zona3",
"Me Cabo": "zona3",
"Medano Hotel": "zona3",
"Metate Cabo": "zona3",
"Mi Casa Restaurant Cabo San Lucas": "zona3",
"Misiones del Cabo Resort": "zona3",
"Misioneros Del Cabo": "zona3",
"MISTIQ Los Cabos": "zona3",
"Montemar Luxury Residences": "zona3",
"Morgan Hotel Boutique & Residences": "zona3",
"Nick San Cabo San Lucas": "zona3",
"One Medano Beach": "zona3",
"Penthouse Punto Pedregal by Buserfin": "zona3",
"Playa Grande Resort & Grand Spa": "zona3",
"Portofino Condos": "zona3",
"Privanzas Residences El Tezal": "zona3",
"Pueblo Bonito Los Cabos (Blanco)": "zona3",
"Pueblo Bonito Rose Los Cabos": "zona3",
"Plaza Nautica Condominiums": "zona3",
"Santa Carmela": "zona3",
"Santa Maria Hotel y Suites": "zona3",
"Seven Crown Express & Suites": "zona3",
"Sheraton": "zona3",
"Sierra Dorada": "zona3",
"Siesta Suites Hotel": "zona3",
"Six Two Four Urban Beach Hotel": "zona3",
"Puerta Del Mar, El Tezal": "zona3",
"Punta Bella": "zona3",
"Punta Ballena": "zona3",
"Riu Santa Fe Cabo San Lucas": "zona3",
"Rosa Negra Restaurant": "zona3",
"Riu Palace Cabo San Lucas": "zona3",
"Riu Palace Baja California": "zona3",
"Residences at La Vista": "zona3",
"Sandos Finisterra Los Cabos": "zona3",
"Puerta Vieja Hotel Boutique": "zona3",
"RAINTREE VACATION CLUB": "zona3",
"Quinta Del Sol by Solmar": "zona3",
"Rancho Paraiso, El Tezal": "zona3",
"Romeo & Julieta": "zona3",
"Solaria Oceanview Condos": "zona3",
"Solmar Resort": "zona3",
"Squid Roe": "zona3",
"Sunrock Hotel & Residences": "zona3",
"Sunset Monalisa": "zona3",
"Sur Beach House": "zona3",
"Cabo Vista_Hotel": "zona3",
"Cachet_Beach": "zona3",
"T1ME & CO, Cabo San Lucas": "zona3",
"Camino_del Mar": "zona3",
"Manta_at The Cape hotel": "zona3",
"Mar de_Cortez": "zona3",
"Mar del_Cabo": "zona3",
"Maralta F 202 byBuserfin": "zona3",
"Maralta F 208 by_Buserfin": "zona3",
"Marea Fragata #403 Los Cabos by Amaco_Rentals": "zona3",
"Marea Golondrinas #305 Los Cabos by_Amaco Rentals": "zona3",
"Rancho Paraiso, El_Tezal": "zona3",
"RAINTREE VACATION_CLUB": "zona3",
"Riu Palace Baja_California": "zona3",
"Riu Palace Cabo_San Lucas": "zona3",
"Riu Santa Fe Cabo_San Lucas": "zona3",
"Romeo &_Julieta": "zona3",
"Rosa Negra_Restaurant": "zona3",
"Ruth's Chris_Steak House Los Cabos": "zona3",
"Santa Maria_Hotel y Suites": "zona3",
"Santa_Carmela": "zona3",
"Sandos_Finisterra Los Cabos": "zona3",
"Seven Crown_Express & Suites": "zona3",
"Sheraton_": "zona3",
"Taboo Los Cabos": "zona3",
"Terrasol Condos": "zona3",
"Tesoro Los Cabos": "zona3",
"The Cape a Thompson Hotel": "zona3",
"The Five, Pedregal": "zona3",
"The Office": "zona3",
"The Pedregal Towers": "zona3",
"The Residences at Hacienda Encantada": "zona3",
"The Ridge At Playa Grande Luxury Villas": "zona3",
"Torre #605, Cabo San Lucas": "zona3",
"Twin Dolphin": "zona3",
"Villa Andaluza, Pedregal": "zona3",
"Villa Buena Vida, Pedregal": "zona3",
"Villa Buenaventura, Pedregal": "zona3",
"Villa de los Sueños, Pedregal": "zona3",
"Villa del Reye Sol, Pedregal": "zona3",
"Villa del Toro Rojo, Pedregal": "zona3",
"Villa Diamante de Law, Pedregal": "zona3",
"Villa Gran Vista, Pedregal": "zona3",
"Villa Jade de Law, Pedregal": "zona3",
"Villa Lands End, Pedregal": "zona3",
"Villa Luciano, Pedregal": "zona3",
"Villa Perla de Law, Pedregal": "zona3",
"Villa Joya Del Law, Pedregal": "zona3",
"Villa Sebastian, Pedregal": "zona3",
"Villa Vegas Dave 1, Pedregal": "zona3",
"Villa Vegas Dave 2, Pedregal": "zona3",
"Villa Veranza, Pedregal": "zona3",
"Waldorf Astoria (The Resort at Pedregal)": "zona3",
"Vistazul Suites & Spa Cabo San Lucas": "zona3",
"Vista Vela I": "zona3",
"Vista Vela II": "zona3",
"Vista Vela III": "zona3",
"Vistana del Cabo": "zona3",
"Villa Serena Residences": "zona3",
"Villa Serena, Blue Sea": "zona3",
"Villa Tuscano (Santa Carmela #25)": "zona3",
"Villa Tanzanita de Law, Pedregal": "zona3",
"Villa de los Faros Cabo del Sol": "zona3",
"Villa del Arco Beach Resort & Spa": "zona3",
"Villa del Palmar Los Cabos": "zona3",
"Villa La Estancia Los Cabos": "zona3",
"Residences at La_Vista": "zona3",
"Terrasol Beach Resort": "zona3",
"The Bungalows Hotel": "zona3",
"Toro Latin Kitchen": "zona3",
"The Italian Job Cabo Restaurant and Pizzeria": "zona3",
"Three Point Tower": "zona3",
"Villa Jimmy Page, Misiones de Cabo": "zona3",
"Villa Paraiso, Arrecife Cabo San Lucas": "zona3",
"Villa Renata, Santa Carmela": "zona3",
"Vista Encantada Spa Resort & Residences": "zona3",
"Vista Mare Cabo Residences": "zona3",


  // Zona 4
  "Bella Vista, Corridor": "zona4",
"Blue Bay Condominiums, Pedregal": "zona4",
"Brisas del Pacifico, Cabo San Lucas": "zona4",
"Casa Cascadas, Pedregal": "zona4",
"Collection O Hotel Castillo Blarney": "zona4",
"Copala at Quivira": "zona4",
"Copala at Quivira #4201": "zona4",
"Coronado at Quivira": "zona4",
"Grand Solmar Pacific Dunes Golf and Spa": "zona4",
"Madison farm at Nobu hotel": "zona4",
"Montecristo Villas": "zona4",
"Novaispania Los Cabos": "zona4",
"Pacific Side": "zona4",
"Pedregal Area": "zona4",


  // Zona 5
"Altamira Condominium Plus": "zona5",
"Diamante": "zona5",
"Diamante Casita #24": "zona5",
"Diamante Beach Estate #37": "zona5",
"Diamante Casita #45": "zona5",
"Diamante Casita #46": "zona5",
"Diamante Golf Course": "zona5",
"Diamante Golf Villa #21": "zona5",
"Diamante Golf Villa #39": "zona5",
"Diamante Golf Villa #58 (Gaidousek's)": "zona5",
"Diamante Luxury Resort": "zona5",
"Diamante Ocean Club Residences": "zona5",
"Diamante Terrazas #7": "zona5",
"Grand Solmar at Rancho San Lucas": "zona5",
"Hard Rock Los Cabos": "zona5",
"Hotel Don Julio, Santiago": "zona5",
"Mavila at Quivira": "zona5",
"Nobu Hotel": "zona5",
"Nobu Restaurant": "zona5",
"Pueblo Bonito Montecristo Estates Luxury Villas": "zona5",
"Pueblo Bonito Pacifica": "zona5",
"Puerta Cabo Village #107 by Buserfin": "zona5",
"Pueblo Bonito Sunset Beach": "zona5",
"Quivira": "zona5",
"Quivira Golf Club": "zona5",
"Rancho San Lucas Villas": "zona5",
"Rancho San Lucas_Villas": "zona5",
};
