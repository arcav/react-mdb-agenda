import React from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBInput, MDBModalFooter, MDBBtn } from 'mdbreact'


const modal = props => {
	return (
		<>
			<MDBModal isOpen={props.modal} toggle={props.toggleModal}>
				<MDBModalHeader
					className="text-center"
					titleClass="w-100 font-weight-bold"
					toggle={props.toggleModal}
					>
					Add new event
				</MDBModalHeader>

				<MDBModalBody>
					<form className="mx-3 grey-text">
						<MDBInput
							name="time"
							label="Time"
							icon="clock"
							hint="12:30"
							group
							type="text"
							getValue={props.handleInputChange("time")}
						/>
						<MDBInput
							name="title"
							label="Title"
							icon="edit"
							hint="briefing"
							group
							type="text"
							getValue={props.handleInputChange("title")}
						/>
						<MDBInput
							name="location"
							label="location(optional)"
							icon="map"
							group
							type="text"
							getValue={props.handleInputChange("location")}
						/>
						<MDBInput
							name="description"
							label="Description(optional)"
							icon="sticky-note"
							group
							type="textarea"
							getValue={props.handleInputChange("description")}
						/>
					</form>
				</MDBModalBody>

				<MDBModalFooter className="justify-content-center">
					<MDBBtn
						color="info"
						onClick={() => {
							props.toggleModal();
							props.addEvent();
						}}>
						Add
					</MDBBtn>
				</MDBModalFooter>
			</MDBModal>
		</>
	)
}

export default modal

