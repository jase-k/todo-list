import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import {useState} from 'react'

const List = (props) => {
    let [itemList, setItemList] = useState([]);
    let [newItemName, setNewItemName] = useState("")
    function handleCheckbox(e, idx){
        itemList[idx].done = !itemList[idx].done
        setItemList([...itemList])
    }
    function handleDelete(e, idx){
        console.log(idx)
        let item = itemList.splice(idx, 1)
        setItemList([...itemList])
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log("add")
        if(newItemName != ""){
            let newItem = {
                name: newItemName,
                done: false
            }
            setItemList([...itemList, newItem])
        }
    }
    function handleNewItem(e){
        setNewItemName(e.target.value)
    }
    return (
        <div>
            <h1>Add to List</h1>
            <form onSubmit={handleSubmit} className="form-control sm">
                <input type="text" name="todo" id="todo" onChange={handleNewItem}/>
                <button type="submit">Add</button>
            </form>
            <h2>ToDo List: </h2>
            <table className="table table-sm">
                <tbody>
                    {itemList.map((item, idx)=>{
                        return(
                            < Item 
                            item = {item}
                            idx = {idx}
                            handleCheckbox = {handleCheckbox}
                            handleDelete = {handleDelete}
                            key={idx}
                            />
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
};

List.propTypes = {};

export default List;