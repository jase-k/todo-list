import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <tr>
            <td><label htmlFor={props.item.name} >
                { props.item.done ?
                    <s>{props.item.name}</s>
                    : props.item.name
                }
                </label></td>
            <td><input type="checkbox" 
            name={props.item.name} 
            id={props.item.name} 
            onChange={(e)=>{
                props.handleCheckbox(e, props.idx)
            }}/></td>
            <td>{ !props.item.done ?
                    " "
                    : (<button 
                        className="btn btn-danger" 
                        onClick={(e) => {props.handleDelete(e, props.idx)}}>
                            Delete</button>
                            )
                }
                </td>
        </tr>
    );
};

Item.propTypes = {};

export default Item;