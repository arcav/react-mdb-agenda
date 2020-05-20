import React from 'react'
import {MDBRow,MDBCol,MDBIcon } from 'mdbreact'

const thermometer = () => {
	return (
		<div>
			<h1 className="my-3">
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="sun yellow" fixed />
                  </MDBCol>
                  <MDBCol xs="9">Sunny Day</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters " fixed />
                  </MDBCol>
                  <MDBCol xs="9"> 23°</MDBCol>
                </MDBRow>
              </h1>
              <p>
                Don't forget your sunglasses. Today will dry an sunny, becoming
                warm in the afternoon with temperatures of between 20 and 25
                degrees.
              </p>	
		</div>
	)
}

export default thermometer
