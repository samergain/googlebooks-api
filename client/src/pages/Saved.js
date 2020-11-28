import React,{ useState, useEffect, setError } from "react";
import BookCardSaved from "../components/BookCardSaved";
import API from "../utils/API";
import { Container, Col, Row } from "react-bootstrap";



function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);
    
    useEffect(() => {  
        API.getBooks()
              .then(res => {
                if (res.data.length === 0) {
                  throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                  throw new Error(res.data.message);
                }
                setSavedBooks(res.data);
              })
              .catch(err => setError(err));
    }, [savedBooks]);
    
    const handleDelete = (event) => {
      event.persist();
      console.log("delete clicked");
      const bookid = event.target.id;
      API.deleteBook(bookid);
    }
    
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                {savedBooks.map(book => {
                    return <BookCardSaved  
                                      key={book.id}
                                      id={book.id}
                                      title={book.title}
                                      authors={book.authors}
                                      description={book.description}
                                      link={book.link}
                                      imgsrc={book.imgsrc}
                                      handleDelete={handleDelete}
                            />          
                })}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Saved;