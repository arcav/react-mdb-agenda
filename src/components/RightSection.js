import React from 'react';


const rightSection = (props) => {
	return (
		<div>
			 
              <h3 className="text-uppercase my-3">Schedule</h3>
              <h6 className="my-3">
                It is going to be busy that today. You have {""}
                <b>{props.children} events </b>  today
            </h6>
		</div>
	)
}

export default rightSection
