export const isInCart=(state,id)=>{
    const inCart=state.selectedItems.find(item=>item.id===id);
    return inCart

}