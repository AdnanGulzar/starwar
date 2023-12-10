export {};

declare global {



interface Character extends SwapiEntity {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    // Add other properties as needed
}

interface Planet extends SwapiEntity {
    name: string;
    climate: string;
    terrain: string;
    // Add other properties as needed
}

interface Starship extends SwapiEntity {
    name: string;
    model: string;
    starship_class: string;
    // Add other properties as needed
}

interface Vehicle extends SwapiEntity {
    name: string;
    model: string;
    vehicle_class: string;
    // Add other properties as needed
}

interface Species extends SwapiEntity {
    name: string;
    classification: string;
    designation: string;
    // Add other properties as needed
}
interface SwapiEntity {
    url: string;
    created: string;
    edited: string;
}

interface FilmReference {
    url: string;
}

interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; // URL to planet entity
    films: FilmReference[]; // URLs to film entities
    species: string[]; // URLs to species entities
    vehicles: string[]; // URLs to vehicle entities
    starships: string[]; // URLs to starship entities
    created: string;
    edited: string;
    url: string;
}

// Define the main film interface
interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[]; // URLs to character entities
    planets: string[];    // URLs to planet entities
    starships: string[];  // URLs to starship entities
    vehicles: string[];   // URLs to vehicle entities
    species: string[];    // URLs to species entities
    created: string;
    edited: string;
    url: string;
}
interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[]; // URLs to pilot entities
    films: string[]; // URLs to film entities
    created: string;
    edited: string;
    url: string;
}




}