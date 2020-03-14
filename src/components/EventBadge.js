import React from 'react'
import { MDBBadge, MDBIcon } from 'mdbreact'

const event = (props) => {
		return (
			<>
				<div className="media mt-1">
					<h3 className="h3-responsive font-weight-bold mr-3">
						{props.time}
					</h3>
					<div className="media-body mb-3 mb-lg-3">
						<MDBBadge
							color="danger"
							className="ml-6 float-right"
							onClick={() => props.onDelete(props.id)}>
							-
			  			</MDBBadge>
						<h6 className="mt-0 font-weight-bold">{props.title}</h6>{""}
						<hr className="hr-bold-my-2" />
						{props.location && (
							<>
								<p className="font-smaller mb-0">
									<MDBIcon icon="location-arrow" /> {props.location}
								</p>
							</>
						)}
					</div>
				</div>
				{props.description && (
					<p className="p-2 mb-4 green lighten-5 ">
						{props.description}
					</p>
				)}
			</>
		)
	}
	
export default event