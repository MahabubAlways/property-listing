import React, {useState, useEffect} from 'react';
import { AppContainer } from './App.styles';
import image from './images/location-map.svg';
import { Header, Card, GoogleMap } from './components';
import data from './data';


function App() {
  const [properties, setProperties] = useState(data.properties);
  const [DefaultCenter] = useState(data.properties[0]);
  const [activeProperty, setActiveProperty] = useState(data.properties[0]);
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const [handleFilter, setHandleFilter] = useState({
      filterBedrooms: 'any',
      filterBathrooms: 'any',
      filterCars: 'any',
      filterSort: 'any',
      priceFrom: '0',
      priceTo: '1000001'
  });

  function toggleFilter(e){
      e.preventDefault();
      setFilterIsVisible(!filterIsVisible);
  }
  
  function handleFilterChange(e) {
      const { name, value } = e.target;
      setHandleFilter(prevState => ({ ...prevState, [name]: value }));
  }

  function clearFilter(e, form){
      e.preventDefault();
      setProperties (properties.sort((a, b) => a.index - b.index));
      setFilteredProperties([]);
      setActiveProperty(properties[0]);
      setIsFiltering(false);
      setHandleFilter(prevState => ({ ...prevState,
          filterBedrooms: 'any',
          filterBathrooms: 'any',
          filterCars: 'any',
          filterSort: 'any',
          priceFrom: '0',
          priceTo: '1000001'
      }));

      form.current.reset();
  }

  useEffect(() => {
    const {filterBedrooms, filterBathrooms, filterCars, filterSort, priceTo, priceFrom} = handleFilter;
    const isFiltering = 
        filterBedrooms !== 'any' || 
        filterBathrooms !== 'any' || 
        filterCars !== 'any' ||
        filterSort !== 'any' || 
        priceFrom !== '0' || 
        priceTo !== '1000001';

        const getFilteredProperties = (properties) => {
          const filteredProperties = [];
          properties.forEach(property => {
              const {bedrooms, bathrooms, carSpaces, price} = property;
              const match = 
                  (bedrooms === parseInt(filterBedrooms) || filterBedrooms === 'any') &&
                  (bathrooms === parseInt(filterBathrooms) || filterBathrooms === 'any') &&
                  (carSpaces === parseInt(filterCars) || filterCars === 'any') && 
                  (price >= priceFrom && price <= priceTo);
      
              // if the match is true push this property to filteredProperties
              match && filteredProperties.push(property);
          })
      
          // now sort the propertiesList
          switch (filterSort) {
              case '0':
                  filteredProperties.sort((a, b) => a.price - b.price)
                  break;
              case '1':
                  filteredProperties.sort((a, b) => b.price - a.price)
                  break;
              default:
                  break;
          }
          
          setFilteredProperties(filteredProperties);
          setActiveProperty(filteredProperties[0]);
        }


      getFilteredProperties(properties);
      setIsFiltering(isFiltering);

  }, [handleFilter, properties]);
 
  const propertiesList = isFiltering ? filteredProperties : properties;
  return (
    <AppContainer>
      {/* listings - Start */}
      <div className="listings">

        <Header 
        filterIsVisible={filterIsVisible} 
        toggleFilter={toggleFilter}
        clearFilter={clearFilter}
        handleFilterChange={handleFilterChange}
        />

        <div className="cards container">
          <div className={`cards-list row ${propertiesList.length === 0 ? 'is-empty' : ''}`}>
            
              {
                propertiesList.map(property => {
                  return <Card 
                    key={property._id} 
                    property={property} 
                    activeProperty={activeProperty}
                    setActiveProperty={setActiveProperty}
                  />
                })
              }
              {
                  (isFiltering && propertiesList.length === 0) && <p className="warning">
                      <img src={image} alt="No properties were found." /><br />No properties were found.</p>
              }
          </div>
        </div>
      </div>
      {/* listings - End */}

      <GoogleMap 
          properties={properties}
          activeProperty={activeProperty}
          setActiveProperty={setActiveProperty}
          DefaultCenter={DefaultCenter}
          filteredProperties={filteredProperties}
          isFiltering={isFiltering}
      />
    </AppContainer>
  );
}

export default App;
