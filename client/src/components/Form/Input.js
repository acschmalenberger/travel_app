import React from "react";

export function Input(props) {
  //console.log(props)
  return (
    <div className="form-group">
<<<<<<< HEAD
      <input className="form-control" 
      name={props.name}
      value={props.value}
      onChange={props.handleInputChange}
      placeholder={props.name}
      data-objectname={props.objectName}

      />
=======
      <input className="form-control" {...props} placeholder="Example input area" />
>>>>>>> a61719f5677edb2ad5e95f11f031959031944493
    </div>
  );
}
