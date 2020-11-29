import React from "react";
//import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBox(props) {
    return (
        <div className="input-group mx-auto">
            <input onChange={props.handleSearch} name="search" value={props.search} type="text" className="form-control" placeholder="Search Books" />
        </div>
    )
}

export default SearchBox;