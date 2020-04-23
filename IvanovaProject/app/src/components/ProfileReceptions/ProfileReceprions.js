import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersToServicesFetchData } from '../../redux/reducers/usersToServices';
import Loader from '../Loader';
import './ProfileReceptions.css';

const mapStateToProps = state => ({
  data: state.usersToServices.data,
  dataIsFetching: state.usersToServices.isFetching
})

const mapDispatchToProps = dispatch => ({
  usersToServicesFetchData: url => dispatch(usersToServicesFetchData(url))
})

const ProfileReceptions = (props) => {
  useEffect(() => {
    props.usersToServicesFetchData("https://harmony757.herokuapp.com/user/services");
  }, []);
  const { 
    dataIsFetching,
    data
  } = props;
  return(
    <div className="profile-row-col profile-reception profile">
      <div className="profile-title text-center mb-2 mt-2">
          Ваша запись на услуги
      </div>
      <div className="mb-3 reception-data">
        {dataIsFetching ? <Loader /> :
        data.map((item) => (
          <div className="profile-reception-block">
            <div>
              <span className="profile-reception-block-title">Название услуги:</span> {item.services[0].name}
            </div>
            <div>
              <span className="profile-reception-block-title">Цена услуги:</span> {item.services[0].price}р.
            </div>
            <div>
              <span className="profile-reception-block-title">Дата записи:</span> {item.date}
            </div>
          </div>
        ))}
      </div>
   </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileReceptions)