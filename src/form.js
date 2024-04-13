import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubmitForm(){
    return(
        <>
        

    <Form style={{backgroundColor: "grey", padding: "4px", borderRadius: "5px", border: "2px solid lightgrey"}}>
        <h1 className="formtitle">Contact</h1>
<Form.Group className="mb-2" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="messageArea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

     
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default SubmitForm;
        