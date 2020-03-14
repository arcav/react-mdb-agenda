import React from 'react';


const rightSection = (props) => {
  return (
    <div>
      <h3 className="text-uppercase my-3 ">Schedule</h3>
      <h6 className="my-3">
        <b style={{ color: "black", fontSize: "large" }}>
          It is going to be busy that today. You have: <br />
        </b>
        <b style={{ textAlign:"right",color: "red", fontWeight: "bold", fontSize: "x-large"}}>
          {props.events} Tareas <br />
        </b>
        <b style={{ color: "black", fontWeight: "bold", fontSize: "x-large" }}> HOY </b>
      </h6>
    </div>
  )
}

export default rightSection
