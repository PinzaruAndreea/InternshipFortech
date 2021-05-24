import React, {useState, useEffect} from "react";
import classes from './Location.module.css';

import {Link, useParams,} from "react-router-dom";


const Location = () => {
    const [country, setCountry] = useState(null);
    const {id} = useParams();

    const fetchCountryData = async () => {
        const responseName = await fetch(
            `https://restcountries.eu/rest/v2/alpha/${id}`
        );

        const country = await responseName.json()
        console.log(country);
        setCountry(country);


    }


    useEffect(() => {

        fetchCountryData()
    }, [id])

    if (country === null) {
        return <h1>Loading...</h1>
    }
    const {
        numericCode,
        flag,
        name,
        alpha2Code,
        capital,
        region,
        population,
        area,
        timezone,
        currencies,
        languages,
        latlng,
        borders
    } = country;


    return (
        <div>

            <section className={classes.Country}>
                <Link to={'/'} className={classes.Btn}>
                    Back Home
                </Link>

                <article key={numericCode} className={classes.Article}>
                    <div><img src={flag} alt={name}/></div>
                    <div>
                        <h1>{name}</h1>
                        <h5>Alpha2Code: <span>{alpha2Code}</span></h5>
                        <h5>Capital: <span>{capital}</span></h5>
                        <h5>Region: <span>{region}</span></h5>
                        <h5>Population: <span>{population}</span></h5>
                    </div>
                    <div>
                        <h5>Area: <span>{area}</span></h5>
                        <h5>Timezones: <span>{timezone}</span></h5>
                        <h5>Currencies: <span>{currencies[0]?.name}</span></h5>
                        <h5>Languages :<span>{languages[0]?.name}</span></h5>
                        <h5>Latitude: <span>{latlng}</span></h5>
                    </div>
                    <div className={classes.Borders}>
                        <h3>Bordering Countries: </h3>
                        <ul>

                            {borders.map((border) => {

                                return (
                                    <li key={border}>
                                        <Link to={`/countries/${border}`} className={classes.Link}>{border}</Link>
                                    </li>
                                )
                            })}
                        < /ul>

                    </div>
                </article>
            </section>
        </div>
    )
}


export default Location;