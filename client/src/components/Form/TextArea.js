import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" placeholder="Example user input textarea for additional information about their trip" {...props} />
    </div>
  );
}
