import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20"
      name={props.name}
      value={props.value[props.name]}
      onChange={props.handleInputChange}
      placeholder={props.name}
      data-objectName={props.objectName}
      
      />
    </div>
  );
}
