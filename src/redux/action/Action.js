 
 export const additem=(product)=>{
return{
    type:"ADDITEM",
    payload:product
}

}
export const deleteitem=(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
    
    }