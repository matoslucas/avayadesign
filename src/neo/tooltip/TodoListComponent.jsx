
import React, { useEffect, useContext } from 'react'
import { TooltipContext } from './TooltipContext';
import { Action } from './TooltipReducer';
const TodoListComponent = () => {

    const { dispatch } = useContext(TooltipContext);
    useEffect(() => {
        console.log('hey')
        
        dispatch({
            type: Action.SHOW,
            state: {
                visible: false,
                x:0,
                y:0,
                type:"none"
            }
        });
        
      },[]);

    return (
        <div >
            HOLA
        </div>
    );
}

export default TodoListComponent;