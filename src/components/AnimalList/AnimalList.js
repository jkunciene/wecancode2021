import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import './AnimalList.css';
import { GET_ANIMALS_QUERY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { LinearProgress } from "@mui/material";
import Search from '../Search/Search';

const AnimalList = () => {
    const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);
    console.log("data log", data);

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (value) => {
        setSearchValue(value);
        console.log(value)
    
        console.log(searchValue)

      };

    if (error) {
        return <h2>Ooops.... Something went wrong</h2>;
      }
    if (loading) {
        return <LinearProgress />;
      }

    const filterAnimals = () => {
        return data.animals?.edges?.filter((animal) =>
          animal.node.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      };
     
     console.log(filterAnimals())

    return (
        <div>
            <Search onSearch={handleSearch} searchValue={searchValue}/>
                <div className="animalList_container">
                    {filterAnimals().map((animal) => (
                        <AnimalCard
                            key={animal.node.id}
                            name={animal.node.name}
                            image={animal.node.imageUrl}
                        >
                            <p>{animal.node.name}</p>
                        </AnimalCard>
            ))}


                </div>
        </div>
    )
}

export default AnimalList
