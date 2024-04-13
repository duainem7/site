import React, {useState, useEffect} from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import SSRProvider from 'react-bootstrap/SSRProvider';





function ChatBot(){

    useEffect(()=>{
        fetch("http://localhost:8000/")
      },[])

    const[message, setMessage] = useState("")
    const[chats, setChats] = useState([])
    const [isTyping, setIsTyping] = useState(false)
  
    const chat = async (e, message) =>{
      e.preventDefault()
  
      if(!message) return
      setIsTyping(true)
  
      let msgs = chats
      msgs.push({role: "user", content: message})
      setChats(msgs)
  
  
      fetch("http://localhost:8000/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chats,
        }),
      }).then((response) =>response.json())
      .then((data) =>{
        msgs.push(data.output)
        setChats(msgs)
        setIsTyping(false)
      }).catch(error => console.log(error))
    }

    const handleMessage = function(e){
      e.preventDefault()
      setMessage(e.target.id)
    }



    return(
        <>
        <Container>
          <SSRProvider>
            <Card style={{width: '30rem', height: '35rem'}}>
                    <Card.Title style={{height: '5rem'}}><p className={chat.role ==="user"? "user_msg": ""}>{chat.role}</p></Card.Title>
                    <hr />
                    <Card.Text style={{height: '14rem', overflow: 'scroll'}}>{chat.content}</Card.Text>
                    <hr />
                    <Card.Subtitle><p className={isTyping? "": "hide"}><i>{isTyping? "Typing": ""}</i></p></Card.Subtitle>
                

                <Form action="" onSubmit={(e) => chat(e, message)}>
                <Form.Group className="mb-2" controlId="messageArea">
                    <Form.Control as="textarea" rows={5} onClick={handleMessage} />
                </Form.Group>
                <Button variant="primary" type="submit">
                 Submit
                </Button>
                </Form>
                
            </Card>
            </SSRProvider>
        </Container>
        </>

    )
}

export default ChatBot