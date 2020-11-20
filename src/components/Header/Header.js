import React from 'react';
import image from '../../images/house-location-pin.svg';
import { Filter } from '../';

export const Header = ({filterIsVisible, toggleFilter, handleFilterChange, clearFilter}) => {
    return (
        <header className={`${filterIsVisible ? 'filter-is-visible': ''}`}>
          <Filter 
            toggleFilter={toggleFilter} 
            handleFilterChange={handleFilterChange}
            clearFilter={clearFilter}
          />

          <img src={image} alt="Property Listings" />
          <h1>Property Listings</h1>
          <button className="btn-filter" onClick={(e) => toggleFilter(e)}>Filter</button>
        </header>
    )
}

export default Header;