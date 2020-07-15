import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children} Btn Title is passed via props/coded but unused
    </button>
  );
}
