import React from "react";
import Button from "react-bootstrap/Button";

function SaveBtn(props) {
    return(
        <Button variant="primary" onClick={props.handleSave}>Save</Button>
    )
}

export default SaveBtn;