import React, { useState } from 'react';
import './style.css';
import todoimg from './homework.png'
import addbtn from './plus.png'
import {Container, Row } from 'reactstrap';

const Todo = () =>{
    
    const [item,setItem] = useState(' ');
    const [list,setList] = useState([]);

  const addItem = () => {
    setList( (oldItem) => {
        return[...oldItem,item];
    })
    setItem("");
  };

  const delItem = (index) => {
 setList((oldItem) => {
     return oldItem.filter((arrele,id) => {
         return index !==id ;
     })
 })
  };

    return(
        <div className="main">
            <div>
                <Container>
                    <Row>
                       <img src={todoimg} alt="todo icon" className="todoImg"/>
                    </Row>
                    <Row>
                        <h2 className="todo-header">Todo List</h2>
                    </Row>
                    <Row>
                       <input type="text" className="input-bar" placeholder="Add your task" onChange={ (e) => {
                           setItem(e.target.value);
                       }} />
                       <img src={addbtn} alt="add btn" className="add-btn" onClick={addItem} />
                    </Row>
                </Container>
                <div className="lists">
               { list.map( (item,index) => {
                   return(
                    <ul className="list1" key={index} >
                        <li>{item} <button className="delBtn" onClick={ () => delItem(index)}>X</button></li>

                    </ul>)

                })
            }
              </div>
            </div>            
        </div>
    )
}

export default Todo;