import { useParams,useNavigate,useLocation } from 'react-router-dom';
import { getBook, deleteBook } from './data/Data';
import { Card, Button } from 'react-bootstrap';

const Book = () => {
  const params = useParams();
  const book = getBook(params.bookId);
  let navagate=useNavigate()
  let location=useLocation()

  if (book) {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={book.img} alt={book.name} />
        <hr />
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Card.Title>{book.name}</Card.Title>
          </div>
          <hr />

          <Card.Text>
            <strong>قیمت: </strong>{book.price} <br />
            <strong>نویسنده: </strong>{book.author} <br />
            <strong>توضیحات:</strong> {book.description}
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={() => { deleteBook(book.id)
              navagate("/books"+location.search)
             }}>حذف کردن کتاب</Button>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <div>گشتم نبود نگرد نیست.</div>
    );
  }
}

export default Book;