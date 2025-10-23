import React , {useState ,useEffect , useContext, createContext} from "react";

export const countContext = createContext();

export function CartCountProvider({children}){

    const [incartCount, setIncartCount] = useState(0)
    const upCount = () => {
        setIncartCount(prev => prev + 1)
    }
    const downCount = () => {
        setIncartCount(prev => Math.max(prev - 1 , 0))
    
        
    }
    const contextValue = {incartCount , upCount , downCount}
    return(
    <countContext.Provider value={contextValue}>
        {children}
    </countContext.Provider>
)
}