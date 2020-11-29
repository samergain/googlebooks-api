import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SaveBtn from "./SaveBtn";

const styles = {
    img: {
      height: "150px",
      width: "100px",
      float: "left",
      display: "inline"
    },
    linkstyle: {
        color: "white",
        textDecoration: "none"
    }
  };
function BookCard(props) {
    
    return(
        <Card className="mx-2 mt-2" key={props.id}>
            <Card.Body>
                <Card.Img style={styles.img} variant="top" src={props.imgsrc} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.authors}</Card.Text>
                
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            {props.children}
                {' '}
                <Button variant="primary"><a style={styles.linkstyle} href={props.link}>View</a></Button>
            </Card.Footer>
        </Card>
    )
}

export default BookCard;
