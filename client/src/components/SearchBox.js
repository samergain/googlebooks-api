import React from "react";
//import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBox(props) {
    return (
        <div className="input-group mx-auto">
            <input onChange={props.handleSearch} name="search" value={props.search} type="text" className="form-control" placeholder="Search Books" />
        </div>
        // <InputGroup className="mb-3 mt-5 px-3">
        //     <FormControl
        //     placeholder="Search Google Books..."
        //     aria-label="Search Google Books"
        //     aria-describedby="basic-addon2"
        //     value={props.search}
        //     />
        //     <InputGroup.Append>
        //     <Button variant="outline-primary" onClick={props.handleSearch}>Search</Button>
        //     </InputGroup.Append>
        // </InputGroup>
    )
}

export default SearchBox;