import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { servicesFetchData } from '../../redux/reducers/services';
import { typesFetchData } from '../../redux/reducers/types';
import { areasFetchData } from '../../redux/reducers/areas';
import { clickToRegistryService } from '../../redux/reducers/inputs';
import './Services.css';

const mapStateToProps = state => ({
  areas: state.areas.areas,
  types: state.types.types,
  services: state.services.services,
  areasIsFetching: state.areas.isFetching,
  typesIsFetching: state.types.isFetching,
  servicesIsFetching: state.services.isFetching
})

const mapDispatchToProps = dispatch => ({
  areasFetchData: url => dispatch(areasFetchData(url)),
  typesFetchData: url => dispatch(typesFetchData(url)),
  servicesFetchData: url => dispatch(servicesFetchData(url)),
  clickToRegistryService: (type, name, id) => dispatch(clickToRegistryService(type, name, id))
})

const Services = (props) => {
  useEffect(() => {
    props.areasFetchData('https://harmony757.herokuapp.com/services-areas');
    props.typesFetchData('https://harmony757.herokuapp.com/services-types');
    props.servicesFetchData('https://harmony757.herokuapp.com/services')}, []);
  const { 
    areasIsFetching,
    typesIsFetching,
    servicesIsFetching,
    areas,
    types,
    services 
  } = props;
  return (
    <div className="row services-row">
      {areasIsFetching || typesIsFetching || servicesIsFetching  ? <Loader /> :
      areas.map(area => (
        <div className="col-md-auto services-row-col services-row-col1">
          <div key={area.name} className="services-row-col-title">{area.name}</div>
          {types.filter(type => type.area[0].name === area.name)
          .map(type => (
          <ul key={type.name}>{type.name}
            {services.filter(service => service.type[0].name === type.name)
            .map(service => (
              <li key={service.name}>
                <Link to="/services/registry" className="service-registry-link" onClick={(e) => 
                  props.clickToRegistryService(e.target.getAttribute('data-type'), e.target.getAttribute('data-name'), e.target.getAttribute('data-id'))
                  } data-name={service.name} data-type={service.type[0].name} data-id={service._id}>
                  {service.name} {service.price}р.
                </Link>
              </li>
            ))}
          </ul>
        ))}
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)