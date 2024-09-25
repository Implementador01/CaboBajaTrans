import React, { useState, useContext } from 'react'; // Importar useContext
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const FormularioReserva: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // Obtener el idioma actual del contexto

  // Definir Destinos
  const lugares = [
    "1 Homes Preview Cabo",
  "605 Tower Downtown Cabo Vacational Rental",
  "7 Seas Seafood Grille",
  "Acre Baja",
  "Acre Resort",
  "Agave Hotel and Cantina, Buena Vista",
  "Agave Kitchen",
  "Agua Salada Restaurant",
  "Alebrije At Las Ventanas",
  "Alegranza",
  "Altamira Condominium Plus",
  "Amaterra Cabo San Lucas",
  "Aqua Restaurant at Palmilla",
  "Arbol at Las Ventanas al Paraíso",
  "Art Walk San Jose del Cabo",
  "Auberge Private Residences by Esperanza (APRE)",
  "Bagatelle Los Cabos",
  "Bahia del Tezal",
  "Bahia Hotel & Beach Club",
  "Baja Brewing Cabo San Lucas",
  "Baja Brewing San Jose del Cabo",
  "Baja Surf Casitas",
  "Bajo La Luna Restaurant",
  "Barceló Grand Faro Los Cabos",
  "Bella Vista, Corridor",
  "Blue Bay Condominiums, Pedregal",
  "Boutique Casa Bella Hotel",
  "Breathless Cabo San Lucas Resort & Spa",
  "Brisas del Pacifico, Cabo San Lucas",
  "Cabo Azul Resort",
  "Cabo Azul, a Hilton Vacation Club",
  "Cabo Bello",
  "Cabo Colorado",
  "Cabo del Mar",
  "Cabo del Mar Condo #5924",
  "Cabo del Sol",
  "Cabo del Sol Golf Course",
  "Cabo Peninsula Residences",
  "Cabo Plaza",
  "Cabo San Lucas",
  "Cabo Surf Hotel and Spa",
  "Cabo Vista Hotel",
  "Cachet Beach",
  "Cachet Beach (Cabo Villas)",
  "Camino del Mar",
  "Campo de Golf Fonatur",
  "Carbon Cabron",
  "Cardinal Living Cabo San Lucas",
  "Cardinal Living San Jose del Cabo",
  "Casa Alegria Cabo del Sol",
  "Casa Antigua Azul, Cabo Bello",
  "Casa Ballena, Pedregal",
  "Casa Bellamar",
  "Casa Cascadas, Pedregal",
  "Casa Cielo in Punta Bella",
  "Casa Corona Cabo del Sol",
  "Casa Crescent, Palmilla",
  "Casa Del Amanecer at El Encanto la Laguna",
  "Casa del Arco, Misiones del Cabo",
  "Casa del Mar Golf Resort & Spa",
  "Casa Dorada",
  "Casa Dorada San Lucas",
  "Casa Edwards Too, Punta Bella",
  "Casa Entre Suenos, Rancho Paraiso",
  "Casa Estrella de Mar, Punta Bella",
  "Casa Kay, Puerto Los Cabos",
  "Casa La Mexicana, Cabo San Lucas",
  "Casa La Piñata, Pedregal",
  "Casa Las Rocas, Costa Brava",
  "Casa Los Mismos in Cabo San Lucas",
  "Casa Luna Cabos, Misiones del Cabo",
  "Casa Maat at JW Marriott Los Cabos Beach Resort & Spa",
  "Casa Mantea Cabo, Pedregal",
  "Casa Mariposa in Punta Bella",
  "Casa Martin Capo San Lucas",
  "Casa Mateo Corridor",
  "Casa Mateo, Blue Sea",
  "Casa Naah Payil, Cabo del Sol",
  "Casa Oliver, Puerto Los Cabos",
  "Casa Paraiso Los Cabos",
  "Casa Rio de Luna, Rancho Cerro Colorado",
  "Casa Sonara, Pedregal",
  "Casa Stamm Cabo del Sol",
  "Casa Stephens",
  "Casa Sunny Days, Blue Sea",
  "Casa Tortuga Cabo del Sol",
  "Cascadas Beach Grill",
  "Cerro Colorado",
  "Chambao Los Cabos",
  "Chamuyo Restaurant Cabo San Lucas",
  "Chamuyo Restaurant San Jose",
  "Chileno Bay Golf & Beach Club",
  "Chileno Bay Resort & Residences",
  "Club Campestre San Jose Del Cabo",
  "Club Cascadas de Baja",
  "Club Regina Los Cabos",
  "Cocina del Mar",
  "CoLiVilla Costa Azul",
  "Collection O Hotel Castillo Blarney",
  "Comal at Chileno Bay",
  "Comfort Inn & Suites Los Cabos",
  "Condominium at Vista Vela I #3205 by Buserfin",
  "Condominium at Vista Vela II #7201 by Buserfin",
  "Condominium at Vista Vela III #8504 by Buserfin",
  "Confessions Skybar Los Cabos",
  "Copala at Quivira",
  "Copala at Quivira #4201",
  "Coral Baja",
  "Corazon Cabo Resort and Spa (Cabo Villas)",
  "Coronado at Quivira",
  "Coronado at Quivira",
  "Costa Brava Corridor",
  "Country Club Los Cabos",
  "Cresta del Mar",
  "Cruise Port",
  "Crush Nightclub",
  "Dalton Gin Bar",
  "Diamante",
  "Diamante Casita #24",
  "Diamante Beach Estate #37",
  "Diamante Casita #45",
  "Diamante Casita #46",
  "Diamante Golf Course",
  "Diamante Golf Villa #21",
  "Diamante Golf Villa #39",
  "Diamante Golf Villa #58 (Gaidousek's)",
  "Diamante Luxury Resort",
  "Diamante Ocean Club Residences",
  "Diamante Terrazas #7",
  "Doc Wine Bar Cabo",
  "Downtown CSL",
  "Dreams Los Cabos Suites Golf Resort & Spa",
  "Drift Hotel San Jose",
  "Duara Los Cabos",
  "Ediths Restaurant",
  "El Ameyal Hotel & Wellness Center",
  "El Cardonal Golf Course",
  "El Conquistador Condos",
  "El Descanso Condominiums",
  "El Dorado Golf and Beach Club",
  "El Encanto de La Laguna",
  "El Encanto Inn & Suites",
  "El Farallon at Waldorf Astoria",
  "El Huerto Farm to Table",
  "El Merkado",
  "El Peñon #5, Cabo del Sol",
  "El Tezal, Cabo San Lucas",
  "El Zalate",
  "El Zalate San Jose del Cabo",
  "Elefant Luxury Suites",
  "Esperanza An Auberge Resort",
  "Everywhere",
  "Fairfield Inn Los Cabos",
  "Fiesta Americana Vacation Club at Cabo del Sol",
  "Flamboyan Hotel and Residences",
  "Flora Farms",
  "Four Seasons Resort at Cabo del Sol",
  "Fundadores",
  "Funky Geisha Los Cabos",
  "Garza Blanca Resort and Spa",
  "Grand Decameron Los Cabos, A Trademark All Inclusive Resort",
  "Grand Fiesta Americana Los Cabos All Inclusive Golf & Spa",
  "Grand Solmar at Rancho San Lucas",
  "Grand Solmar Land's End Resort & Spa",
  "Grand Solmar Pacific Dunes Golf and Spa",
  "Grand Velas Boutique Los Cabos",
  "Grand Velas Los Cabos",
  "Habanero's Gastro Grill",
  "Hacienda Beach Club & Residences",
  "Hacienda Cocina & Cantina",
  "Hacienda del Mar Vacation Club",
  "Hacienda Encantada Resort & Spa",
  "Hacienda Punta Vista in Cabo San Lucas (Airbnb)",
  "Hampton Inn and Suites",
  "Hard Rock Los Cabos",
  "Hilton Casa Dorada",
  "Hilton Los Cabos Beach & Golf Resort",
  "Holiday Inn Express Cabo San Lucas",
  "Holiday Inn Resort Los Cabos All Inclusive",
  "Hotel Casa Costa Azul",
  "Hotel Casa Natalia",
  "Hotel City Express Plus Cabo San Lucas",
  "Hotel Colli",
  "Hotel Don Julio, Santiago",
  "Hotel El Ganzo",
  "Hotel Grand Regina",
  "Hotel María Elena",
  "Hotel Posada Terranova",
  "Hotel Vistazul Suites & Spa",
  "Hyatt Place Los Cabos",
  "Hyatt Vacation Club At Sirena Del Mar",
  "Hyatt Ziva Los Cabos",
  "IGY Marina, Dock K",
  "Jardin Secreto Cabo",
  "Jazmin's Restaurant",
  "Jazz on the Rocks at Sunset Point",
  "JM Steak House Cabo San Lucas",
  "JW Marriott Los Cabos Beach Resort & Spa",
  "Krystal Grand Los Cabos",
  "La Jolla",
  "La Lupita Taco and Mezcal San Jose del Cabo",
  "La Marina Inn",
  "La Pacifica Los Cabos by Hilton Grand Vacations",
  "La Pintada Cabo San Lucas",
  "La Vista #17 at Querencia",
  "La Vista Residencial",
  "Las Mañanitas",
  "Las Olas Condominiums",
  "Las Residencias Golf & Beach Club",
  "Las Ventanas al Paraiso",
  "Las Ventanas Phase 3B Cabo San Lucas",
  "Le Blanc Spa Resort Los Cabos",
  "Live Aqua Private Residences Los Cabos",
  "Lorenzillo's Restaurant",
  "Los Cabos Golf Resort",
  "Los Cabos Tour",
  "Los Cabos Tourist Corridor",
  "Los Milagros",
  "Los Patios",
  "Los Tres Gallos Cabo San Lucas",
  "Los Tres Gallos San Jose del Cabo",
  "Madison farm at Nobu hotel",
  "Maison de Cortes, Pedregal",
  "Malibu Farm Los Cabos",
  "Mamazzita Los Cabos",
  "Mandala",
  "Mango Deck",
  "Manta at The Cape hotel",
  "Mar de Cortez",
  "Mar del Cabo",
  "Maralta F 202 by Buserfin",
  "Maralta F 208 by Buserfin",
  "Maravilla Los Cabos",
  "Marea Fragata #403 Los Cabos by Amaco Rentals",
  "Marea Golondrinas #305 Los Cabos by Amaco Rentals",
  "Marea Los Cabos",
  "Maria Corona Restaurant",
  "Marina Cabo San Lucas",
  "Marina CSL, Dock I",
  "Marina Fiesta Resort & Spa",
  "Marina Puerto Los Cabos",
  "Marina San Jose del Cabo",
  "Marina Sol",
  "Marina Sol Condos",
  "Marina View Villa",
  "Marisol Boutique Hotel",
  "Marquis Los Cabos",
  "Mavila at Quivira",
  "Mayan Monkey Los Cabos",
  "Me Cabo",
  "Medano Hotel",
  "Melia Cabo Real",
  "Metate Cabo",
  "Mi Casa Restaurant Cabo San Lucas",
  "Mi Casa Restaurant San Jose del Cabo",
  "Mirador Condos San Jose del Cabo",
  "Misioneros Del Cabo",
  "Misiones del Cabo Resort",
  "Mistiq los cabos",
  "MISTIQ Los Cabos",
  "Montage Los Cabos",
  "Montecristo Villas",
  "Montemar Luxury Residences",
  "Morgan Hotel Boutique & Residences",
  "Mykonos Bay Resort",
  "Nick San Cabo San Lucas",
  "Nick San Palmilla",
  "Nido at Viceroy Los Cabos",
  "Nobu Hotel",
  "Nobu Restaurant",
  "Novaispania Los Cabos",
  "One & Only Palmilla",
  "One and Only Palmilla",
  "One Medano Beach",
  "Pacific Side",
  "Palmilla",
  "Palmilla Golf Club",
  "Paradisus Los Cabos",
  "Paraiso Residences",
  "Park Royal Los Cabos",
  "Parole Los Cabos",
  "Pedregal Area",
  "Penthouse Punto Pedregal by Buserfin",
  "Playa Grande Resort & Grand Spa",
  "Plaza Nautica Condominiums",
  "Portofino Condos",
  "Posada Real Los Cabos",
  "Positano Hotel",
  "Privanzas Residences El Tezal",
  "Pueblo Bonito Los Cabos (Blanco)",
  "Pueblo Bonito Montecristo Estates Luxury Villas",
  "Pueblo Bonito Pacifica",
  "Pueblo Bonito Rose Los Cabos",
  "Pueblo Bonito Sunset Beach",
  "Puerta Cabo Village",
  "Puerta Cabo Village #107 by Buserfin",
  "Puerta de Hierro Condos",
  "Puerta Del Mar, El Tezal",
  "Puerta Vieja Hotel Boutique",
  "Puerto Los Cabos Golf Course",
  "Punta Ballena",
  "Punta Bella",
  "Querencia",
  "Quinta Del Sol by Solmar",
  "Quivira",
  "Quivira Golf Club",
  "RAINTREE VACATION CLUB",
  "Rancho Paraiso, El Tezal",
  "Rancho Pescadero",
  "Rancho San Lucas Villas",
  "Residences at La Vista",
  "Riu Palace Baja California",
  "Riu Palace Cabo San Lucas",
  "Riu Santa Fe Cabo San Lucas",
  "Romeo & Julieta",
  "Rosa Negra Restaurant",
  "Royal Decameron Los Cabos",
  "Royal Solaris Los Cabos",
  "Ruth's Chris Steak House Los Cabos",
  "San Jose del Cabo",
  "Sandos Finisterra Los Cabos",
  "Santa Carmela",
  "Santa Maria Hotel y Suites",
  "Santorini Palace, El Pescadero",
  "Secrets Puerto Los Cabos Golf & Spa Resort",
  "Semillon at Puerto Raiz",
  "Seven Crown Express & Suites",
  "Sheraton",
  "Sierra Dorada",
  "Siesta Suites Hotel",
  "Six Two Four Urban Beach Hotel",
  "Solaria Oceanview Condos",
  "Solaz Los Cabos",
  "Soleado Beach & Spa Resort",
  "Solmar Resort",
  "Squid Roe",
  "Sunrock Hotel & Residences",
  "Sunset Monalisa",
  "Sur Beach House",
  "T1ME & CO, Cabo San Lucas",
  "Cabo Surf Hotel and Spa",
  "Cabo Vista Hotel",
  "Cachet Beach",
  "Cachet Beach (Cabo Villas)",
  "Camino del Mar",
  "Campo de Golf Fonatur",
  "Carbon Cabron",
  "Cardinal Living Cabo San Lucas",
  "Cardinal Living San Jose del Cabo",
  "Casa Alegria Cabo del Sol",
  "Casa Antigua Azul, Cabo Bello",
  "Casa Ballena, Pedregal",
  "Casa Bellamar",
  "Casa Cascadas, Pedregal",
  "Casa Cielo in Punta Bella",
  "Casa Corona Cabo del Sol",
  "Casa Crescent, Palmilla",
  "Casa Del Amanecer at El Encanto la Laguna",
  "Casa del Arco, Misiones del Cabo",
  "Casa del Mar Golf Resort & Spa",
  "Casa Dorada",
  "Casa Dorada San Lucas",
  "Casa Edwards Too, Punta Bella",
  "Casa Entre Suenos, Rancho Paraiso",
  "Casa Estrella de Mar, Punta Bella",
  "Casa Kay, Puerto Los Cabos",
  "Casa La Mexicana, Cabo San Lucas",
  "Casa La Piñata, Pedregal",
  "Casa Las Rocas, Costa Brava",
  "Casa Los Mismos in Cabo San Lucas",
  "Casa Luna Cabos, Misiones del Cabo",
  "Casa Maat at JW Marriott Los Cabos Beach Resort & Spa",
  "Casa Mantea Cabo, Pedregal",
  "Casa Mariposa in Punta Bella",
  "Casa Martin Capo San Lucas",
  "Casa Mateo Corridor",
  "Casa Mateo, Blue Sea",
  "Casa Naah Payil, Cabo del Sol",
  "Casa Oliver, Puerto Los Cabos",
  "Casa Paraiso Los Cabos",
  "Casa Rio de Luna, Rancho Cerro Colorado",
  "Casa Sonara, Pedregal",
  "Casa Stamm Cabo del Sol",
  "Casa Stephens",
  "Casa Sunny Days, Blue Sea",
  "Casa Tortuga Cabo del Sol",
  "Cascadas Beach Grill",
  "Cerro Colorado",
  "Chambao Los Cabos",
  "Chamuyo Restaurant Cabo San Lucas",
  "Chamuyo Restaurant San Jose",
  "Chileno Bay Golf & Beach Club",
  "Chileno Bay Resort & Residences",
  "Club Campestre San Jose Del Cabo",
  "Club Cascadas de Baja",
  "Club Regina Los Cabos",
  "Cocina del Mar",
  "CoLiVilla Costa Azul",
  "Collection O Hotel Castillo Blarney",
  "Comal at Chileno Bay",
  "Comfort Inn & Suites Los Cabos",
  "Condominium at Vista Vela I #3205 by Buserfin",
  "Condominium at Vista Vela II #7201 by Buserfin",
  "Condominium at Vista Vela III #8504 by Buserfin",
  "Confessions Skybar Los Cabos",
  "Copala at Quivira",
  "Copala at Quivira #4201",
  "Coral Baja",
  "Corazon Cabo Resort and Spa (Cabo Villas)",
  "Coronado at Quivira",
  "Coronado at Quivira",
  "Costa Brava Corridor",
  "Country Club Los Cabos",
  "Cresta del Mar",
  "Cruise Port",
  "Crush Nightclub",
  "Dalton Gin Bar",
  "Diamante",
  "Diamante Casita #24",
  "Diamante Beach Estate #37",
  "Diamante Casita #45",
  "Diamante Casita #46",
  "Diamante Golf Course",
  "Diamante Golf Villa #21",
  "Diamante Golf Villa #39",
  "Diamante Golf Villa #58 (Gaidousek's)",
  "Diamante Luxury Resort",
  "Diamante Ocean Club Residences",
  "Diamante Terrazas #7",
  "Doc Wine Bar Cabo",
  "Downtown CSL",
  "Dreams Los Cabos Suites Golf Resort & Spa",
  "Drift Hotel San Jose",
  "Duara Los Cabos",
  "Ediths Restaurant",
  "El Ameyal Hotel & Wellness Center",
  "El Cardonal Golf Course",
  "El Conquistador Condos",
  "El Descanso Condominiums",
  "El Dorado Golf and Beach Club",
  "El Encanto de La Laguna",
  "El Encanto Inn & Suites",
  "El Farallon at Waldorf Astoria",
  "El Huerto Farm to Table",
  "El Merkado",
  "El Peñon #5, Cabo del Sol",
  "El Tezal, Cabo San Lucas",
  "El Zalate",
  "El Zalate San Jose del Cabo",
  "Elefant Luxury Suites",
  "Esperanza An Auberge Resort",
  "Everywhere",
  "Fairfield Inn Los Cabos",
  "Fiesta Americana Vacation Club at Cabo del Sol",
  "Flamboyan Hotel and Residences",
  "Flora Farms",
  "Four Seasons Resort at Cabo del Sol",
  "Fundadores",
  "Funky Geisha Los Cabos",
  "Garza Blanca Resort and Spa",
  "Grand Decameron Los Cabos, A Trademark All Inclusive Resort",
  "Grand Fiesta Americana Los Cabos All Inclusive Golf & Spa",
  "Grand Solmar at Rancho San Lucas",
  "Grand Solmar Land's End Resort & Spa",
  "Grand Solmar Pacific Dunes Golf and Spa",
  "Grand Velas Boutique Los Cabos",
  "Grand Velas Los Cabos",
  "Habanero's Gastro Grill",
  "Hacienda Beach Club & Residences",
  "Hacienda Cocina & Cantina",
  "Hacienda del Mar Vacation Club",
  "Hacienda Encantada Resort & Spa",
  "Hacienda Punta Vista in Cabo San Lucas (Airbnb)",
  "Hampton Inn and Suites",
  "Hard Rock Los Cabos",
  "Hilton Casa Dorada",
  "Hilton Los Cabos Beach & Golf Resort",
  "Holiday Inn Express Cabo San Lucas",
  "Holiday Inn Resort Los Cabos All Inclusive",
  "Hotel Casa Costa Azul",
  "Hotel Casa Natalia",
  "Hotel City Express Plus Cabo San Lucas",
  "Hotel Colli",
  "Hotel Don Julio, Santiago",
  "Hotel El Ganzo",
  "Hotel Grand Regina",
  "Hotel María Elena",
  "Hotel Posada Terranova",
  "Hotel Vistazul Suites & Spa",
  "Hyatt Place Los Cabos",
  "Hyatt Vacation Club At Sirena Del Mar",
  "Hyatt Ziva Los Cabos",
  "IGY Marina, Dock K",
  "Jardin Secreto Cabo",
  "Jazmin's Restaurant",
  "Jazz on the Rocks at Sunset Point",
  "JM Steak House Cabo San Lucas",
  "JW Marriott Los Cabos Beach Resort & Spa",
  "Krystal Grand Los Cabos",
  "La Jolla",
  "La Lupita Taco and Mezcal San Jose del Cabo",
  "La Marina Inn",
  "La Pacifica Los Cabos by Hilton Grand Vacations",
  "La Pintada Cabo San Lucas",
  "La Vista #17 at Querencia",
  "La Vista Residencial",
  "Las Mañanitas",
  "Las Olas Condominiums",
  "Las Residencias Golf & Beach Club",
  "Las Ventanas al Paraiso",
  "Las Ventanas Phase 3B Cabo San Lucas",
  "Le Blanc Spa Resort Los Cabos",
  "Live Aqua Private Residences Los Cabos",
  "Lorenzillo's Restaurant",
  "Los Cabos Golf Resort",
  "Los Cabos Tour",
  "Los Cabos Tourist Corridor",
  "Los Milagros",
  "Los Patios",
  "Los Tres Gallos Cabo San Lucas",
  "Los Tres Gallos San Jose del Cabo",
  "Madison farm at Nobu hotel",
  "Maison de Cortes, Pedregal",
  "Malibu Farm Los Cabos",
  "Mamazzita Los Cabos",
  "Mandala",
  "Mango Deck",
  "Manta at The Cape hotel",
  "Mar de Cortez",
  "Mar del Cabo",
  "Maralta F 202 by Buserfin",
  "Maralta F 208 by Buserfin",
  "Maravilla Los Cabos",
  "Marea Fragata #403 Los Cabos by Amaco Rentals",
  "Marea Golondrinas #305 Los Cabos by Amaco Rentals",
  "Marea Los Cabos",
  "Maria Corona Restaurant",
  "Marina Cabo San Lucas",
  "Marina CSL, Dock I",
  "Marina Fiesta Resort & Spa",
  "Marina Puerto Los Cabos",
  "Marina San Jose del Cabo",
  "Marina Sol",
  "Marina Sol Condos",
  "Marina View Villa",
  "Marisol Boutique Hotel",
  "Marquis Los Cabos",
  "Mavila at Quivira",
  "Mayan Monkey Los Cabos",
  "Me Cabo",
  "Medano Hotel",
  "Melia Cabo Real",
  "Metate Cabo",
  "Mi Casa Restaurant Cabo San Lucas",
  "Mi Casa Restaurant San Jose del Cabo",
  "Mirador Condos San Jose del Cabo",
  "Misioneros Del Cabo",
  "Misiones del Cabo Resort",
  "Mistiq los cabos",
  "MISTIQ Los Cabos",
  "Montage Los Cabos",
  "Montecristo Villas",
  "Montemar Luxury Residences",
  "Morgan Hotel Boutique & Residences",
  "Mykonos Bay Resort",
  "Nick San Cabo San Lucas",
  "Nick San Palmilla",
  "Nido at Viceroy Los Cabos",
  "Nobu Hotel",
  "Nobu Restaurant",
  "Novaispania Los Cabos",
  "One & Only Palmilla",
  "One and Only Palmilla",
  "One Medano Beach",
  "Pacific Side",
  "Palmilla",
  "Palmilla Golf Club",
  "Paradisus Los Cabos",
  "Paraiso Residences",
  "Park Royal Los Cabos",
  "Parole Los Cabos",
  "Pedregal Area",
  "Penthouse Punto Pedregal by Buserfin",
  "Playa Grande Resort & Grand Spa",
  "Plaza Nautica Condominiums",
  "Portofino Condos",
  "Posada Real Los Cabos",
  "Positano Hotel",
  "Privanzas Residences El Tezal",
  "Pueblo Bonito Los Cabos (Blanco)",
  "Pueblo Bonito Montecristo Estates Luxury Villas",
  "Pueblo Bonito Pacifica",
  "Pueblo Bonito Rose Los Cabos",
  "Pueblo Bonito Sunset Beach",
  "Puerta Cabo Village",
  "Puerta Cabo Village #107 by Buserfin",
  "Puerta de Hierro Condos",
  "Puerta Del Mar, El Tezal",
  "Puerta Vieja Hotel Boutique",
  "Puerto Los Cabos Golf Course",
  "Punta Ballena",
  "Punta Bella",
  "Querencia",
  "Quinta Del Sol by Solmar",
  "Quivira",
  "Quivira Golf Club",
  "RAINTREE VACATION CLUB",
  "Rancho Paraiso, El Tezal",
  "Rancho Pescadero",
  "Rancho San Lucas Villas",
  "Residences at La Vista",
  "Riu Palace Baja California",
  "Riu Palace Cabo San Lucas",
  "Riu Santa Fe Cabo San Lucas",
  "Romeo & Julieta",
  "Rosa Negra Restaurant",
  "Royal Decameron Los Cabos",
  "Royal Solaris Los Cabos",
  "Ruth's Chris Steak House Los Cabos",
  "San Jose del Cabo",
  "Sandos Finisterra Los Cabos",
  "Santa Carmela",
  "Santa Maria Hotel y Suites",
  "Santorini Palace, El Pescadero",
  "Secrets Puerto Los Cabos Golf & Spa Resort",
  "Semillon at Puerto Raiz",
  "Seven Crown Express & Suites",
  "Sheraton",
  "Sierra Dorada",
  "Siesta Suites Hotel",
  "Six Two Four Urban Beach Hotel",
  "Solaria Oceanview Condos",
  "Solaz Los Cabos",
  "Soleado Beach & Spa Resort",
  "Solmar Resort",
  "Squid Roe",
  "Sunrock Hotel & Residences",
  "Sunset Monalisa",
  "Sur Beach House",
  "T1ME & CO, Cabo San Lucas",
  "Taboo Los Cabos",
  "Tamarindos Mexican Farm to Table",
  "Tequila Ranch",
  "Terrasol Beach Resort",
  "Terrasol Condos",
  "Tesoro Los Cabos",
  "The Break",
  "The Break, San Jose del Cabo",
  "The Bungalows Hotel",
  "The Cape a Thompson Hotel",
  "The Club At Solaz",
  "The Five, Pedregal",
  "The Italian Job Cabo Restaurant and Pizzeria",
  "The Ledge at The Cape hotel",
  "The Office",
  "The Pedregal Towers",
  "The Residences at Hacienda Encantada",
  "The Ridge At Playa Grande Luxury Villas",
  "The Westin Resort & Spa",
  "Three Point Tower",
  "Toro Latin Kitchen",
  "Torre #605, Cabo San Lucas",
  "Twin Dolphin",
  "Ventanas de Cortes",
  "Ventanas del Cabo",
  "Ventanas del Mar",
  "Ventanas Residences",
  "Ventanas, Fase 2B Casa #71",
  "Viceroy Hotel",
  "Vidanta Los Cabos",
  "Villa Alegria, Cabo Bello",
  "Villa Andaluza, Pedregal",
  "Villa Buena Vida, Pedregal",
  "Villa Buenaventura, Pedregal",
  "Villa Captiva, Palmilla",
  "Villa de la Playa, Costa Brava",
  "Villa de los Faros Cabo del Sol",
  "Villa de los Sueños, Pedregal",
  "Villa del Arco Beach Resort & Spa",
  "Villa del Norte, Pedregal",
  "Villa del Palmar Los Cabos",
  "Villa del Reye Sol, Pedregal",
  "Villa del Toro Rojo, Pedregal",
  "Villa Diamante de Law, Pedregal",
  "Villa Gran Vista, Pedregal",
  "Villa Jade de Law, Pedregal",
  "Villa Jimmy Page, Misiones de Cabo",
  "Villa Joya Del Law, Pedregal",
  "Villa La Estancia Los Cabos",
  "Villa La Roca #102, Casa del Mar",
  "Villa La Valencia Beach Resort and Spa",
  "Villa Lands End, Pedregal",
  "Villa Luciano, Pedregal",
  "Villa María de Las Pilas",
  "Villa Nirvana, Caleta Palmilla",
  "Villa Paraiso, Arrecife Cabo San Lucas",
  "Villa Paraiso, Punta Bella",
  "Villa Paraiso, Punta Bella",
  "Villa Perla de Law, Pedregal",
  "Villa Renata, Santa Carmela",
  "Villa Salina del Mar",
  "Villa Salina del Mar #5",
  "Villa Sebastian, Pedregal",
  "Villa Serena Residences",
  "Villa Serena, Blue Sea",
  "Villa Tanzanita de Law, Pedregal",
  "Villa Tuscano (Santa Carmela #25)",
  "Villa Vegas Dave 1, Pedregal",
  "Villa Vegas Dave 2, Pedregal",
  "Villa Vegas Dave 3, Punta Bella",
  "Villa Veranza, Pedregal",
  "Villas del Mar at Palmilla",
  "Vista Encantada Spa Resort & Residences",
  "Vista Mare Cabo Residences",
  "Vista Vela I",
  "Vista Vela II",
  "Vista Vela III",
  "Vistana del Cabo",
  "Vistazul Suites & Spa Cabo San Lucas",
  "Waldorf Astoria (The Resort at Pedregal)",
  "Wedding Site Tour",
  "Welk Resort Cabo Sirena del Mar"

  ];


  const [formData, setFormData] = useState({
    servicio: '',
    origen: '',
    destino: '',
    fecha: '',
    pasajeros: 1,
    camioneta: '',
  });

  const [error, setError] = useState(false); // Estado para mostrar el error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasajerosChange = (increment: number) => {
    const maxPasajeros = formData.camioneta === 'Camioneta Jack de 10 pasajeros' ? 10 : 5;
    setFormData((prevData) => ({
      ...prevData,
      pasajeros: Math.max(1, Math.min(prevData.pasajeros + increment, maxPasajeros)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de que todos los campos estén llenos
    if (!formData.servicio || !formData.origen || !formData.destino || !formData.fecha || !formData.camioneta) {
      setError(true); // Mostrar error si faltan campos
    } else {
      setError(false); // No hay errores, proceder con la reserva
      navigate('/opcionales', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded p-6 space-y-6">
      {/* Selección del servicio */}
      <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded">
        <div className="col-span-2 text-center text-xl font-bold text-gray-700 mb-4">
          {language === 'es' ? 'SELECCIONA TU SERVICIO' : 'SELECT YOUR SERVICE'}
        </div>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Viaje sencillo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Viaje Sencillo (Solo Ida)' : 'One Way Trip'}
        </label>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Viaje redondo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Viaje Redondo' : 'Round Trip'}
        </label>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Transporte local sencillo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Transporte Local Sencillo' : 'Local One Way'}
        </label>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Transporte local redondo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Transporte Local Redondo' : 'Local Round Trip'}
        </label>
      </div>

      {/* Información del servicio */}
      <div className="grid grid-cols-2 gap-4">
        {/* Origen */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Lugar de Origen' : 'Origin'}</label>
          <select
            name="origen"
            value={formData.origen}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            {lugares.map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Destino */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Destino' : 'Destination'}</label>
          <select
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona un destino' : 'Select a destination'}</option>
            {lugares.map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Fecha de salida */}
        <div className="col-span-2">
          <label className="block text-gray-700">{language === 'es' ? 'Fecha y Hora' : 'Date and Time'}</label>
          <input
            type="datetime-local"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Pasajeros y Selección de camioneta */}
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Número de pasajeros */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">{language === 'es' ? 'Pasajeros:' : 'Passengers:'}</label>
          <button
            type="button"
            onClick={() => handlePasajerosChange(-1)}
            className="bg-gray-300 p-2 rounded"
          >
            -
          </button>
          <span>{formData.pasajeros}</span>
          <button
            type="button"
            onClick={() => handlePasajerosChange(1)}
            className="bg-gray-300 p-2 rounded"
          >
            +
          </button>
        </div>

        {/* Selección de camioneta */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Vehículo' : 'Vehicle'}</label>
          <select
            name="camioneta"
            value={formData.camioneta}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            <option value="Suburban negra para 5 pasajeros">{language === 'es' ? 'Suburban negra para 5 pasajeros' : 'Black Suburban for 5 passengers'}</option>
            <option value="Suburban blanca para 5 pasajeros">{language === 'es' ? 'Suburban blanca para 5 pasajeros' : 'White Suburban for 5 passengers'}</option>
            <option value="Camioneta Jack de 10 pasajeros">{language === 'es' ? 'Camioneta Jack de 10 pasajeros' : 'Jack Van for 10 passengers'}</option>
            <option value="Ford Escape de 5 pasajeros">{language === 'es' ? 'Ford Escape de 5 pasajeros' : 'Ford Escape for 5 passengers'}</option>
          </select>
        </div>
      </div>

      {/* Nueva sección con leyenda */}
      <div className="bg-yellow-100 p-4 rounded text-center text-yellow-700">
        <p>{language === 'es' ? 'Nos pondremos en contacto contigo para fijar detalles' : 'We will contact you to set the time'}</p>
      </div>

      {/* Mostrar error si no se completan todos los campos */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          {language === 'es' ? 'Por favor completa todos los campos.' : 'Please complete all fields.'}
        </div>
      )}

      {/* Botón para redirigir a la página de servicios opcionales */}
      <button  type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
        {language === 'es' ? 'Reservar ahora' : 'Book now'}
      </button>
    </form>
  );
};

export default FormularioReserva;
