import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export const Results = () => {
    const {id, category} = useParams();
    const [searchResult, setSearchResult] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://swapi.dev/api/${category}/${id}/`)
            .then((response) => {
                setSearchResult(response.data);
                console.log(response.data);
                setError('');
            })
            .catch((err) => {
                setError(err.message)
                console.log(err);
            });
        }, [id, category]);

        if (error) {
            return (
                <div className='container-fluid text-center'>
                    <h4>These aren't the droids you're looking for!</h4>
                    <img style={{height:'500px'}} src="https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw2e5154fe/images/funko/64902-1.png" alt="Obi-Wan Kenobi" />
                </div>
            )
        }
    return (
        <>
        <div className="container">
                <div className="col col-sm-9">
                    {
                        category === "people" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Height: {searchResult.height}</p>
                                <p>Mass: {searchResult.mass} </p>
                                <p>Hair Color: {searchResult.hair_color}</p>
                                <p>Skin Color: {searchResult.skin_color}</p>
                                <p>Eye Color: {searchResult.eye_color}</p>
                                <p>Birth Year: {searchResult.birth_year}</p>
                                <p>Gender: {searchResult.gender}</p>
                                <p>Home World: {searchResult.homeworld}</p>
                                <p>Films: {searchResult.films[0]}</p>
                                <p>Species: {searchResult.species}</p>
                            </div>
                            :""
                    }
                    {
                        category === "films" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Episode ID: {searchResult.episode_id}</p>
                                <p>Opening: {searchResult.opening_crawl} </p>
                                <p>Director: {searchResult.director}</p>
                                <p>Producer: {searchResult.producer}</p>
                                <p>Release Date: {searchResult.release_date}</p>
                                <p>Charaters: </p>
                            </div>
                            :""
                    }
                    {
                        category === "starships" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Model: {searchResult.model}</p>
                                <p>Manufacturer: {searchResult.manufacturer} </p>
                                <p>Cost: {searchResult.cost_in_credits}</p>
                                <p>Length: {searchResult.length}</p>
                                <p>Max Atmosphering Speed: {searchResult.max_atmosphering_speed}</p>
                                <p>Crew: {searchResult.crew} </p>
                                <p>Passengers: {searchResult.passengers} </p>
                                <p>Cargo Capacity: {searchResult.cargo_capacity} </p>
                                <p>Consumables: {searchResult.consumables} </p>
                                <p>Hyperdrive Rating: {searchResult.hyperdrive_rating} </p>
                                <p>MGLT: {searchResult.MGLT} </p>
                                <p>Class: {searchResult.starship_class} </p>
                                <p>Pilots: {searchResult.pilots} </p>
                                <p>Films:  </p>
                            </div>
                            :""
                    }
                    {
                        category === "vehicles" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Model: {searchResult.model}</p>
                                <p>Manufacturer: {searchResult.manufacturer} </p>
                                <p>Cost: {searchResult.cost_in_credits}</p>
                                <p>Length: {searchResult.length}</p>
                                <p>Max Atmosphering Speed: {searchResult.max_atmosphering_speed}</p>
                                <p>Crew: {searchResult.crew} </p>
                                <p>Passengers: {searchResult.passengers} </p>
                                <p>Cargo Capacity: {searchResult.cargo_capacity} </p>
                                <p>Consumables: {searchResult.consumables} </p>
                                <p>Vehicle Class: {searchResult.vehicle_class} </p>
                                <p>Class: {searchResult.starship_class} </p>
                                <p>Pilots: {searchResult.pilots} </p>
                                <p>Films:  </p>
                            </div>
                            :""
                    }
                    {
                        category === "species" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Classification: {searchResult.classification}</p>
                                <p>Designation: {searchResult.designation} </p>
                                <p>Average Height: {searchResult.average_height}</p>
                                <p>Skin Colors: {searchResult.skin_colors}</p>
                                <p>Hair Colors: {searchResult.hair_colors}</p>
                                <p>Eye Colors: {searchResult.eye_colors} </p>
                                <p>Average Lifespan: {searchResult.average_lifespan} </p>
                                <p>Homeworld:  </p>
                                <p>Language: {searchResult.language} </p>
                                <p>People:  </p>
                                <p>Films:  </p>
                                <p>Created: {searchResult.created} </p>
                            </div>
                            :""
                    }
                    {
                        category === "planets" ?
                            <div>
                                <h3 style={{fontWeight:'bold'}}>{searchResult.name}</h3>
                                <p>Rotation Peroid: {searchResult.rotation_period}</p>
                                <p>Oribital Period: {searchResult.oribital_period} </p>
                                <p>Diameter: {searchResult.diameter}</p>
                                <p>Climate: {searchResult.climate}</p>
                                <p>Gravity: {searchResult.gravity}</p>
                                <p>Terrain: {searchResult.terrain} </p>
                                <p>Surface Water: {searchResult.surface_water} </p>
                                <p>Population: {searchResult.population}  </p>
                                <p>Residents: {searchResult.residents} </p>
                                <p>Films:  </p>
                            </div>
                            :""
                    }
                </div>
            </div>
        </>
    )
};