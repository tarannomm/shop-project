import React, { useReducer } from 'react';
const initialState={
    selectedItems:[],
    itemCounter:0,
    total:0,
    checkout:false,
}
const cardReduser=(state,action)=>{
  switch (action.type){
    case "ADD_ITEMS":
        if(!selectedItems.filter(item=>item.id===action.payload.id)){
            selectedItems.push({
                ...action.payload,
                quantity:1,
            })
        }
        return({
            ...state,
            selectedItems:[...state.selectedItems]
        })
    

  }  

}
const ReduserContextPrivider = () => {
    const [state,dispatch]=useReducer(initialState,cardReduser);
    return (
        <div>
            
        </div>
    );
};

export default ReduserContextPrivider;