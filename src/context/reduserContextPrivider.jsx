import React, { useReducer } from 'react';
import { Terser } from 'vite';
const initialState={
    selectedItems:[],
    itemCounter:0,
    total:0,
    checkout:false,
}
const cardReduser=(state,action)=>{
  switch (action.type){
    case "ADD_ITEMS":
        if(!state.selectedItems.filter(item=>item.id===action.payload.id)){
            state.selectedItems.push({
                ...action.payload,
                quantity:1,
            })
        }
        return({
            ...state,
            selectedItems:[...state.selectedItems]
        })
    case "REMOVE_ITEM":
        const newSelectedItems= state.selectedItems.filter(item=>item.id!==action.payload.id);
        return ({
            ...state,
            ...newSelectedItems,
        })  }  

}
const ReduserContextPrivider = () => {
    const [state,dispatch]=useReducer(initialState,cardReduser);
    return (
        <div>
            
        </div>
    );
};

export default ReduserContextPrivider;