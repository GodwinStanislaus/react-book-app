import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EditBookForm = (props) => {

    const [book, setBook] = useState(props.currentBook)
    useEffect(() => {
        setBook(props.currentBook)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateBook(book.id, book)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={book.name} placeholder="Enter Book Title" onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" placeholder="Enter Author Name" value={book.author} onChange={handleInputChange}></Form.Control>
            </Form.Group>
            <Button type="submit">Update Book</Button>
            &nbsp;&nbsp;
            <Button onClick={() => props.setEditing(false)}>
                Cancel
            </Button>
        </Form>
    )
}
export default EditBookForm