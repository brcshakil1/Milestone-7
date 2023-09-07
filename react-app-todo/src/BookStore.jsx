import Book from "./Book";

const BookStore = ({books}) => {
    return (
        <div>
            <h3>Books</h3>
            {
                books.map(book => <Book book={book} key={book.id}></Book>)
            }
        </div>
    );
};

export default BookStore;