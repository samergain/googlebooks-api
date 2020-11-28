import React,{ useState, useEffect, setError } from "react";
import SearchBox from "../components/SearchBox";
import BookCard from "../components/BookCard";
import API from "../utils/API";
import { Container, Col, Row } from "react-bootstrap";



function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    useEffect(() => {
        if (!search) {
          return;
        }
    
        API.searchTerms(search)
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            setResults(res.data.items);
          })
          .catch(err => setError(err));
    }, [search]);
    
    const handleSearchInput = event => {
        setSearch(event.target.value);
      };

    const handleSave = (event) => {
      event.persist();
      console.log("clicked");
      const bookid = event.target.id;
      const getClickedBook = async() => {
        const clickedBook = results.filter(item => item.id === bookid)
        const bookToSave =  {                  
            id:clickedBook[0].id,
            title: clickedBook[0].volumeInfo.title,
            authors: clickedBook[0].volumeInfo.authors,
            description: clickedBook[0].volumeInfo.description,
            link: clickedBook[0].volumeInfo.previewLink,
            imgsrc: clickedBook[0].volumeInfo.imageLinks.thumbnail
        }
        return bookToSave;
      }
      getClickedBook().then(
        (bookData) => {
          console.log("the book to be saved is: ", bookData);
          API.saveBook(bookData);
        }
      ).catch(err => console.log(err));
    }
    
    return(
        <>
        <SearchBox handleSearch={handleSearchInput} value={search}/>
        <Container fluid>
            <Row>
                <Col>
                {results.map(book => {
                    return <BookCard  key={book.id}
                                      id={book.id}
                                      title={book.volumeInfo.title}
                                      authors={book.volumeInfo.authors}
                                      description={book.volumeInfo.description}
                                      link={book.volumeInfo.previewLink}
                                      imgsrc={book.volumeInfo.imageLinks.thumbnail}
                                      handleSave={handleSave}
                            />
                })    
                }
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Search;