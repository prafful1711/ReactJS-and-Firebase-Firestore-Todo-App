import React, { useState, useEffect } from 'react'
import {TextField, Button} from '@material-ui/core';
import './index.css';
import Todo from './component/Todo';
import db from './firebase';
import firebase from './firebase'

const App = () => {


    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    console.log(todo);

    // Handle input
    const handleAddTodo = (event) => {
        event.preventDefault();
       
        // add to firebase 

        db.collection('todos').add({
            todo: input,
            timestamp:  new Date()
        })
       
       /*  static todo
       const newTodo = [...todo, input];
        setTodo(newTodo); 
        */


        setInput('');
    }

    // Firebase
    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot=>{
            setTodo(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo})))
        })
    }, [])

    return (
        <>
            <div className='todo-container'>
               
               <h2 className='title'>Todo App <span>🔥</span></h2>

               <form className='formArea'>

                <TextField value={input} onChange={e => setInput(e.target.value)} label="✔️ Write your todo" variant="outlined" />
                &nbsp;&nbsp;
                <Button type="submit" disabled={!input} onClick={handleAddTodo} variant="contained" color="secondary">Add</Button>
               
               </form>

                {todo.map((todo)=> (
                    <Todo mytext={todo} />
                ))

                // static data
                 //todo.map(td=><Todo text={td} />)
                }
               
            </div>
        </>
    );
};

export default App;
