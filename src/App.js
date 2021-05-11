import React, { useState, useEffect, useRef } from 'react'
import { Container, Card, Button, Modal } from 'react-bootstrap';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import GlobalStyle from './theme/globalStyles';

const initChirps = [
    {
        key: uuidv4(),
        username: 'Leonardo',
        content: `I'm going to order a pizza 🍕`,
        date: 1620274875000
    },
    {
        key: uuidv4(),
        username: 'Michaelangelo',
        content: `Cowabunga 🐢`,
        date: 1620278475000
    },
    {
        key: uuidv4(),
        username: 'Raphael',
        content: `Duuuuuude! 🤘`,
        date: 1620279615000
    }
]

const App = () => {
    
    const [chirps, setChirps] = useState(initChirps);
    const [username, setUsername] = useState('');
    const [chirpContent, setChirpContent] = useState('');
    const [chirpContentPlaceholder, setChirpContentPlaceholder] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const chirpContentRef = useRef(null);

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleChirpContentChange = e => {
        setChirpContent(e.target.value);
    }

    const handleChirp = () => {
        if (username && chirpContent !== '') {
            setShow(false);
            setChirps(chirps => [
                ...chirps,
                {
                    key: uuidv4(),
                    username: username,
                    content: chirpContent,
                    date: Date.now()
                }
            ])
            setChirpContent('');
        } else {
            setChirpContentPlaceholder('Please make sure you have set your username and provided Chrip content.');
        }
    }

    const printChirps = chirps.map(val => {
        return (
            <Card key={val.key} className="rounded-3 mb-3">
                <Card.Body>
                    <Card.Title>@{val.username.toLowerCase()}</Card.Title>
                    <Card.Text>
                        {val.content}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">{moment(val.date).calendar()}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }).reverse();

    useEffect(() => {
        if (show && chirpContentRef.current) {
            chirpContentRef.current.focus();
          }
    }, [show]);
    
    return (
        <>
            <GlobalStyle />
            <nav className="navbar sticky-top navbar-dark bg-info p-3 mb-5">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">🐦 Chirper</a>
                    <div className="d-flex">
                        <Button variant="warning" onClick={handleShow}>Chirp</Button>
                    </div>
                </div>
            </nav>
            <Container>
                
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        {printChirps}
                    </div>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>What's happening?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea className="form-control border-0" id="chirpContent" rows="3" ref={chirpContentRef} onChange={handleChirpContentChange} placeholder={chirpContentPlaceholder}>{chirpContent}</textarea>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <div className="input-group w-50">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input id="username" value={username} type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={handleUsernameChange} />
                    </div>
                    <div className="d-flex">
                        <Button variant="secondary" className="me-2" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleChirp}>
                            Chirp
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default App