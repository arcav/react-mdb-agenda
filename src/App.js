import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Data from './Data/Data.json';
import Event from './components/EventBadge';
import Modal from './components/Modal';
import AddButton from './components/AddButton'
import Thermometer from './components/Thermometer'
import RightSection from './components/RightSection.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      events: Data
    };
  }

  addEvent = () => {
    let newArray = [...this.state.events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description

    });
    this.setState({ events: newArray });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };

  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    })
  }

  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  
  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h2 className="text-upercase my-3"> Hoy:</h2>
              <div id="events">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <AddButton
                toggleModal={this.toggleModal}
              />
            </MDBCol>

            <MDBCol md="3">
            <RightSection 
            events={this.state.events.length}
            />
              <Thermometer />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Modal
          modal={this.state.modal}
          toggleModal={this.toggleModal}
          handleInputChange={this.handleInputChange}
          addEvent={this.addEvent}
        />
      </>
    );
  }
}
export default App




