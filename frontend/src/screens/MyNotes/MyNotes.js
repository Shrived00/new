import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen';
import axios from 'axios'


const MyNotes = () => {



    const [notes, setNotes] = useState([]);


    const deletehandler = (id) => {
        if (window.confirm("Are You Sure?")) {

        }
    };

    const fetchNotes = async () => {
        const { data } = await axios.get('/api/notes');

        setNotes(data);

    };

    useEffect(() => {
        fetchNotes();
    }, []);



    return (
        <>
            <MainScreen title="Welcome Back !!!">
                <Link to='createnote'>
                    <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg"> Create New Note</Button>
                </Link>

                {notes.map((note) => (


                    <Card style={{ margin: 10 }} key={note._id}>
                        <Card.Header style={{ display: "flex" }}>
                            <div>
                                <span style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    // fontSize: 18,
                                }}>

                                    {note.title}

                                </span>
                                <div>
                                    <Button href={`/notes/${note._id}`}>Edit</Button>
                                    <Button className=' mx-2  ' variant='danger' onClick={() => deletehandler(note._id)}>Delete</Button>

                                </div>
                            </div>
                        </Card.Header>

                        <Card.Body>
                            <h4>
                                <Badge bg="success" className='text-white'>
                                    Catergory-{note.category}
                                </Badge>
                            </h4>

                            <blockquote className="blockquote mb-0">
                                <p>{note.content}</p>
                                <footer className="blockquote-footer">
                                    Created on Date

                                </footer>
                            </blockquote>
                        </Card.Body>


                    </Card>

                ))
                }



            </MainScreen>
        </>
    )
};

export default MyNotes;
