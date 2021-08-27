import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const AddBookForm = props => {

    const initialState = { id: '', name: '', author: '' }
    const [book, setBook] = useState(initialState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!book.name || !book.author) return
        props.addBook(book)
        setBook(initialState)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Book</Form.Label>
                <Form.Control type="text" name="name" value={book.name} placeholder="Enter Book Title" onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={book.author} placeholder="Enter Author Name" onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Button type="submit" variant="outline-primary">Add new book</Button>
        </Form>
    )
}

export default AddBookForm
/*
<form onSubmit={handleSubmit} >
    <label>Name</label>
    <input type="text" name="name" value={book.name} onChange={handleInputChange} />
    <label>Author</label>
    <input type="text" name="author" value={book.author} onChange={handleInputChange} />
</form>
 */