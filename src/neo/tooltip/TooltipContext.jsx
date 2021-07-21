import React, { createContext, useReducer } from 'react';
import { TooltipReducer } from './TooltipReducer';

export const TooltipContext = createContext();

const TooltipContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TooltipReducer,{})
    
    

    return (
        <TooltipContext.Provider value={{ state, dispatch }}>
            {children}
        </TooltipContext.Provider>
    )
}
export default TooltipContextProvider;