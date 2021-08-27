import { Fragment, useState } from 'react';
import './App.css';
import AddBookForm from './forms/AddBookForm';
import EditBookForm from './forms/EditBookForm';
import { BooksTable } from './tables/BooksTable';

const App = () => {
  const booksData = [
    { id: 1, name: 'Sense and Sensibility', author: 'Jane Austen' },
    { id: 2, name: 'Oliver Twist', author: 'Charles Dickens' },
    { id: 3, name: 'Harry Potter', author: 'J. K. Rowling' },
  ]
  const initialFormState = { id: null, name: '', author: '' }

  const [books, setBooks] = useState(booksData)
  const [currentBook, setCurrentBook] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addBook = (book) => {
    book.id = books.length + 1
    setBooks([...books, book])
  }

  const editBook = (book) => {
    setEditing(true)
    setCurrentBook({ id: book.id, name: book.name, author: book.author })
  }

  const updateBook = (id, updatedBook) => {
    setEditing(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book)))
  }

  const deleteBook = id => {
    setEditing(false);
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Books</h2>
          <BooksTable books={books} editBook={editBook} deleteBook={deleteBook} />
        </div>
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Editing - {currentBook.name}</h2>
              <EditBookForm editing={editing} setEditing={setEditing} currentBook={currentBook} updateBook={updateBook}></EditBookForm>
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Book</h2>
              <AddBookForm addBook={addBook}></AddBookForm>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
