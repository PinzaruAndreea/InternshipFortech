import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

import FilterAndSearch from "./FilterAndSearch";

import classes from './Location.module.css'


const url = 'https://restcountries.eu/rest/v2/all';


const LocationsList = ({locations}) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const fetchCountries = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
        setLoading(false);

    }

    useEffect(() => {
        setLoading(true);
        fetchCountries()
    }, [])

    if (loading) {
        return <p>Loading the page content...</p>
    }


    const filteredCountries = countries.filter(country => {

        if (searchTerm === '') {
            return country

        } else if (
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.alpha2Code.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return country
        }
    })


    console.log(filteredCountries);

    return (
        <>
            <FilterAndSearch
                onChangeHandler={e => {
                    setSearchTerm(e.target.value)
                }}
            />
            <section className={'grid'}>
                {filteredCountries.length > 0 ? filteredCountries.map((country, key) => {
                    const {name, population, region, capital, flag, numericCode, alpha3Code } = country

                    return (
                        <article key={numericCode}>
                            <div className={'card'}>
                                <img src={flag} alt={name}/>
                                <h1 className={'country-info'}>{name}</h1>
                                <div className={'details'}>
                                    <h2>Population: {population}</h2>
                                    <h2>Region: {region}</h2>
                                    <h2 className={'country-info'}>Capital: {capital}</h2>
                                </div>
                                <Link to={`/countries/${alpha3Code}`} className={classes.Btn}> Learn more </Link>
                            </div>
                        </article>
                    )
                }) : <p>Sorry, no results found!</p>}
            </section>

        </>
    )

}

export default LocationsList;