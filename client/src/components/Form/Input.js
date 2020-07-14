import React from "react";

export function Input(props) {
  console.log(props)
  return (
    <div className="form-group">
      <input className="form-control" 
      name={props.name}
      value={props.value[props.name]}
      onChange={props.handleInputChange}
      placeholder={props.name}
      data-objectName={props.objectName}

      />
    </div>
  );
}
