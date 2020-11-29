import React,{ useState, useEffect, setError } from "react";
import BookCard from "../components/BookCard";
import API from "../utils/API";
import { Container, Col, Row } from "react-bootstrap";
import DeleteBtn from "../components/DeleteBtn";



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
                    return <BookCard  
                                      key={book.id}
                                      id={book.id}
                                      title={book.title}
                                      authors={book.authors}
                                      description={book.description}
                                      link={book.link}
                                      imgsrc={book.imgsrc}
                            >
                              <DeleteBtn id={book.id} handleDelete={handleDelete} />
                            </BookCard>          
                })}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Saved;