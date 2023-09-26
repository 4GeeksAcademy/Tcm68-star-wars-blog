const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            
            characters: [],
            planets: [],
            vehicles: [],
            char: [],
            planet: [],
            vehicle: [],
            favorites: [],
            oneChar: {},
            oneVehicle: {},
            onePlanet: {},
        },
        actions: {
            
            getDataCharacters: async () => {
                try {
                    const store = getStore();
                    const result = await fetch("https://www.swapi.tech/api/people?page=1&limit=20");
                    const data = await result.json();
                    
                    setStore({ ...store, characters: data.results });
                    console.log("API responded successfully with the first list of URLs", data);
                    const actions = getActions();
                    await actions.mappingFetch();
                } catch (error) {
                    console.log("Failed to retrieve the list of URLs", error);
                }
            },

            mappingFetch: async () => {
                try {
                    const { getDataCharacterDescription } = getActions();
                    const store = getStore();
                    const requests = await store.characters.map((character) => getDataCharacterDescription(character.url));
                    await Promise.all(requests);
                } catch (error) {
                    console.log("Error: ", error);
                }
            },

            getDataCharacterDescription: async (url) => {
                try {
                    
                    const store = getStore();
                    const result = await fetch(url);
                    const data = await result.json();
                    setStore({ ...store, char: [...store.char, data] });
                    console.log("API responded successfully with character objects", data);
                } catch (error) {
                    console.log("Failed to retrieve character objects", error);
                }
            },

            getDataPlanets: async () => {
                try {
                    const store = getStore();
                    const result = await fetch("https://www.swapi.tech/api/planets?page=1&limit=20");
                    const data = await result.json();
                    
                    setStore({ ...store, planets: data.results });
                    console.log("API responded successfully with the first list of planet URLs", data);
                    const { mappingFetchPlanets } = getActions();
                    await mappingFetchPlanets();
                } catch (error) {
                    console.log("Failed to retrieve the list of planet URLs", error);
                }
            },

            mappingFetchPlanets: async () => {
                try {
                    const { getDataPlanetDescription } = getActions();
                    const store = getStore();
                    const requests = await store.planets.map((planet) => getDataPlanetDescription(planet.url));
                    await Promise.all(requests);
                } catch (error) {
                    console.log("Error: ", error);
                }
            },

            getDataPlanetDescription: async (url) => {
                try {
                    
                    const store = getStore();
                    const result = await fetch(url);
                    const data = await result.json();
                    setStore({ ...store, planet: [...store.planet, data] });
                    console.log("API responded successfully with planet objects", data);
                } catch (error) {
                    console.log("Failed to retrieve planet objects", error);
                }
            },

            getDataVehicles: async () => {
                try {
                    const store = getStore();
                    const result = await fetch("https://www.swapi.tech/api/starships?page=1&limit=20");
                    const data = await result.json();
                    
                    setStore({ ...store, vehicles: data.results });
                    console.log("API responded successfully with the first list of vehicle URLs", data);
                    const { mappingFetchVehicles } = getActions();
                    await mappingFetchVehicles();
                } catch (error) {
                    console.log("Failed to retrieve the list of vehicle URLs", error);
                }
            },

            mappingFetchVehicles: async () => {
                try {
                    const { getDataVehicleDescription } = getActions();
                    const store = getStore();
                    const requests = await store.vehicles.map((vehicle) => getDataVehicleDescription(vehicle.url));
                    await Promise.all(requests);
                } catch (error) {
                    console.log("Error: ", error);
                }
            },

            getDataVehicleDescription: async (url) => {
                try {
                    
                    const store = getStore();
                    const result = await fetch(url);
                    const data = await result.json();
                    setStore({ ...store, vehicle: [...store.vehicle, data] });
                    console.log("API responded successfully with vehicle objects", data);
                } catch (error) {
                    console.log("Failed to retrieve vehicle objects", error);
                }
            },

            setFavoritesCharacters: (character) => {
                const store = getStore();
                const favoriteCharacterAlreadyExists = store.favorites.includes(character.result.properties.name);
                if (!favoriteCharacterAlreadyExists) {
                    setStore({ favorites: [...store.favorites, character.result.properties.name] });
                }
            },
            setFavoritesPlanets: (planet) => {
                const store = getStore();
                const favoritePlanetAlreadyExists = store.favorites.includes(planet.result.properties.name);
                if (!favoritePlanetAlreadyExists) {
                    setStore({ favorites: [...store.favorites, planet.result.properties.name] });
                }
            },
            setFavoritesVehicles: (vehicle) => {
                const store = getStore();
                const favoriteVehicleAlreadyExists = store.favorites.includes(vehicle.result.properties.name);
                if (!favoriteVehicleAlreadyExists) {
                    setStore({ favorites: [...store.favorites, vehicle.result.properties.name] });
                }
            },
            deleteFavorite: (index) => {
                const store = getStore();
                const updatedFavorites = [...store.favorites];
                updatedFavorites.splice(index, 1);
                setStore({ favorites: updatedFavorites });
            },
            
            detailCharacter: (uid) => {
                const store = getStore();
                const selected = store.char.find((character) => character.result.uid === uid);
                console.log("This is the character detail info", selected);
                setStore({ ...store, oneChar: selected });
            },

            detailPlanet: (uid) => {
                const store = getStore();
                const selected = store.planet.find((planet) => planet.result.uid === uid);
                console.log("This is the planet detail info", selected);
                setStore({ ...store, onePlanet: selected });
            },

            detailVehicle: (uid) => {
                const store = getStore();
                const selected = store.vehicle.find((vehicle) => vehicle.result.uid === uid);
                console.log("This is the vehicle detail info", selected);
                setStore({ ...store, oneVehicle: selected });
            },
        },
    };
};

export default getState;
