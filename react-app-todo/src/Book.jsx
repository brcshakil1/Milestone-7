
import './Book.css'
const Book = ({book}) => {
    const {name, price} = book;
    return (
        <div className='book'>
            <h3>Book Name: {name}</h3>
            <p>price: {price}</p>
        </div>
    );
};
export default Book;