
import { Input } from 'antd'
import React from 'react'
import { Table,Button } from 'react-bootstrap'
import './NotesApp.css'


const NotesApp = () => {
    const [notes, setNotes] = React.useState([{"id":1,"title":"Note 1","content":"This is note 1"},{"id":2,"title":"Note 2","content":"This is note 2"},{"id":3,"title":"Note 3","content":"This is note 3"}])
    const [newNoteTitle, setNewNoteTitle] = React.useState('')
    const [newNoteContent, setNewNoteContent] = React.useState('')

    const addNote = () => {
        setNotes([...notes, {id: notes.length + 1, title: newNoteTitle, content: newNoteContent}])
        setNewNoteTitle('')
        setNewNoteContent('')
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }



    




  return (
    <div style={{
       backgroundColor: 'black',
         color: 'white',
            padding: '10px',
            margin: '10px',
           
    }}>
    <div >
        <h1 style={{color:"white"}}>Notes</h1>
        <Table variant='dark' striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {notes.map(note => (
                <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.content}</td>
                <td><Button style={{width:"20%",height:"20%",color:"red", backgroundColor:"red"}} onClick={() => deleteNote(note.id)}>Delete</Button></td>
                </tr>
            ))}
        </tbody>
        </Table>
        <h1 style={{color:"white"}}>Add Note</h1>
        <Input style={{backgroundColor:"black",color:"white", width:"25%", height:"25%"}}  placeholder="Title" value={newNoteTitle} onChange={e => setNewNoteTitle(e.target.value)} />
        <Input  style={{backgroundColor:"black",color:"white",width:"25%",height:"25%"}} placeholder="Content" value={newNoteContent} onChange={e => setNewNoteContent(e.target.value)} />
        <Button style={{backgroundColor:"black",width:"10%",height:"10%"}} variant="dark" onClick={addNote}>    
        Add
        </Button>


    </div>
    </div>
  )
}

export default NotesApp