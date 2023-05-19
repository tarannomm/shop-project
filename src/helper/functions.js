//this function shorted tittles
const shorten=(title)=>{
    const splitTitle=title.split(" ");
    const newTitle=splitTitle[0]+splitTitle[1];
    return newTitle
}
//return false if dos'nt in card
const isInCart=(state,id)=>{
    const inCart=!!state.selectedItems.find(item => item.id===id);
    
    return inCart
 }
 //return number that show quantity of products
 const quantityCount=(state,id)=>{
     
var index = state.selectedItems.findIndex(item=> item.id=== id);
if(index === -1){
    return false
}
else {
    return state.selectedItems[index].quantity
}
}
export {shorten,isInCart,quantityCount}