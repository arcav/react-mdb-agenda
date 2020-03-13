import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Event from './components/Event';
import Modal from './components/Modal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "BreakFast with Simon",
          location: "Lounge Cafe",
          description: "Discus Q3 targets"
        },
        {
          id: 2,
          time: "10:30",
          title: "Dayli Standup Meeting (recurring)",
          location: "Warsaw Spire Office"
        },
        {
          id: 3,
          time: "11:00",
          title: "Call with HRs"
        },
        {
          id: 4,
          time: "12:00",
          title: "Lunch with Timmoty",
          location: "Canteen",
          description: "Project evaluation ile declaring a variable and using an if statement is a fine way to conditionaly render a component, sometimes you might want us a"
        }
      ]
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
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded onClick={this.toggleModal}>
                    Add Event
                </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h3 className="text-uppercase my-3">Schedule</h3>
              <h6 className="my-3">
                It is going to be busy that today. You have{" "}
                <b>{this.state.events.lenght} events </b> today
            </h6>
              <h1 className="my-3">
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="sun" fixed />
                  </MDBCol>
                  <MDBCol xs="9">Sunny</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters" fixed />
                  </MDBCol>
                  <MDBCol xs="9"> 23°</MDBCol>
                </MDBRow>
              </h1>
              <p>
                Don't forget your sunglasses. Today will dry an sunny, becoming
                warm in the afternoon with temperatures of between 20 and 25
                degrees.
              </p>
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




