import React from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { DatePicker, Alert } from 'antd';
import 'antd/dist/antd.css';
import './ProfileRegistryInputs.css';

const mapStateToProps = state => ({
  serviceType: state.inputService.typeservice,
  serviceName: state.inputService.nameservice,
  serviceId: state.inputService.idservice,
  isSubmit: state.submitRegistry,
  user: state.userAuth.user,
})

class ServiceRegistryInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      name: '',
      phone: '',
      serviceId: '',
      isSubmit: false,
      errorInputName: true,
      errorInputPhone: true,
      errorInputDate: true,
      showAlert: false,
    }
  }
  
  sendGuestData(userdate, username, userphone, serviceId) {
    let user = {
      date: userdate,
      name: username,
      phone: userphone,
      serviceId: serviceId,
    }
    fetch('https://harmony757.herokuapp.com/services/guest-registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(() => this.setState({showAlert: true}))
  }

  sendUserData(userdate,serviceId) {
    let user = {
      userId: localStorage.getItem("authUser"),
      date: userdate,
      serviceId: serviceId,
    }
    fetch('https://harmony757.herokuapp.com/services/user-registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(()=>this.setState({showAlert: true}))
  }

  checkEmptyName(e){
    if (!e.target.value) {
      this.setState({errorInputName: true});
    } else this.setState({errorInputName: false});
  }
  checkEmptyPhone(e){
    if (!e.target.value) {
      this.setState({errorInputPhone: true});
    } else this.setState({errorInputPhone: false});
  }
  checkEmptyDate(){
    if (this.state.date) {
      this.setState({errorInputDate: true});
    } else this.setState({errorInputDate: false});
  }

  onChange(date, dateString) {
    this.setState({date: dateString});
    console.log(date, dateString);
  }

  componentDidMount(){
    this.setState({serviceId:this.props.serviceId})
  }

  render() {
    let inputs;
    if (!localStorage.getItem("authUser")) {inputs = 
    <>
      <div className="form-group">
        <label htmlFor="servicePersonNameRegistry">Ваше имя:{this.state.errorInputName ? <img src='../error.png' className="errorImg" alt='error'/> : null}</label>
        <input type="text" className="form-control" id="servicePersonNameRegistry" onChange={(e) => {
          this.setState({name: e.target.value})
          this.checkEmptyName(e)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="servicePersonPhoneRegistry">Ваш номер телефона:{this.state.errorInputPhone ? <img src='../error.png' className="errorImg" alt='error'/> : null}</label>
        <input type="text" className="form-control" id="servicePersonPhoneRegistry" onChange={(e) => {
          this.setState({phone: e.target.value})
          this.checkEmptyPhone(e)}}/>
      </div>
    </>
    } else inputs = null;
    return (
      <div className="col-auto service-registry" >
        <div className="service-registry-title text-center">
            Запись на услугу
        </div>
        {this.state.showAlert ? <Alert type='success' message='Вы успешно записались!' /> : null}
        <div className="form-group">
          <label htmlFor="serviceTypeRegistry">Тип услуги:</label>
          <input type="text" className="form-control" id="serviceTypeRegistry" value={this.props.serviceType} readOnly/>
        </div>
        <div className="form-group">
          <label htmlFor="serviceNameRegistry">Название услуги:</label>
          <input type="text" className="form-control" id="serviceNameRegistry" value={this.props.serviceName} readOnly/>
        </div>
        {inputs}
        <div className="form-group">
          <label htmlFor="serviceDateRegistry">
            Выберите ориентировочную дату записи:{this.state.errorInputDate ? <img src='../error.png' className="errorImg" alt='error'/>: null}
          </label>
          <DatePicker className="form-control" onChange={(date, dateString) => {
            this.setState({date: dateString});
            this.checkEmptyDate();
          }}/>
        </div>
          <Button variant="orangeButton" onClick={() => {
            if (!this.state.errorInputName && !this.state.errorInputPhone && !this.state.errorInputDate && !localStorage.getItem("authUser")) {
              this.sendGuestData(this.state.date, this.state.name, this.state.phone, this.state.serviceId)}
            if (localStorage.getItem("authUser")) {
              if (!this.state.errorInputDate) {
                this.sendUserData(this.state.date, this.state.serviceId)
                }}}} >
            Записаться
          </Button>  
      </div>
    )
  }
}


export default connect(mapStateToProps)(ServiceRegistryInputs);