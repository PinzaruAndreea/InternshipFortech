import React from "react";


const FilterAndSearch = (props) => {





    return (
        <section className={'filter'}>
            <form  className={'form-control'} id={'form'}>
                <input
                    onChange={props.onChangeHandler}
                    type="search"
                    name={'search'}
                    id='search'
                    placeholder={'Search for country'}/>
                <div className={'region-filter'}>
                    <label htmlFor="select">Filter by region</label>
                    <select  name="select" id="continent" className={'select'}>
                        <option value="Africa ">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>
            </form>
        </section>
    )
};

export default FilterAndSearch;