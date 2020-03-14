import React from 'react'
import {MDBRow,MDBCol,MDBBtn} from 'mdbreact'


const button = (props) => {
	return(
		
		<MDBRow className="mb-4">
		<MDBCol xl="3" md="6" className="mx-auto text-center">
		  <MDBBtn color="info" rounded onClick={props.toggleModal}>
			Add Event
		</MDBBtn>
		</MDBCol>
	  </MDBRow>

	)
}

export default button