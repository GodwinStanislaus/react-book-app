import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

export const BooksTable = (props) => {
    return (<Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                props.books.length > 0 ? (
                    props.books.map((book, index) =>
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={() => props.editBook(book)}>
                                    Edit
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="outline-danger" onClick={() => props.deleteBook(book.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                ) : (
                    <tr> <td colSpan={3}>No users</td></tr>
                )
            }
        </tbody >
    </Table >)
}