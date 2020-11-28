import React from "react";
import Button from "react-bootstrap/Button";

function DeleteBtn(props) {
    return(
        <Button variant="primary" onClick={props.handleDelete}>Delete</Button>
    )
}

export default DeleteBtn;