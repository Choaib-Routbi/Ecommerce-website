import React , {useState ,useEffect , useContext, createContext} from "react";

export const cartContext = createContext();

export function CartCountProvider({children}){

    const [incartCount, setIncartCount] = useState(0)
    const [incartItems, setIncartItems] = useState([])
    const upCount = () => {
        setIncartCount(prev => prev + 1)
    }
    const downCount = () => {
        setIncartCount(prev => Math.max(prev - 1 , 0))
    }
    const addToCart = (product) => {
        console.log("added");
        
        setIncartItems((prev) => {
            return [...prev,product]
            // const existing = prev.find((item) => item.id === product.id)
            // if(!existing){
            //     return [...prev,product]
            // }else{
            //     console.log("already in cart");
                
            // }
        }) 
    }
    const removeFromCart = (productID) => {
        console.log("removed");
        setIncartItems((prev) => prev.filter((item) => item.id !== productID))
    }
    const contextValue = {incartCount , incartItems , upCount , downCount , addToCart , removeFromCart}
    return(
    <cartContext.Provider value={contextValue}>
        {children}
    </cartContext.Provider>
)
}