import React, { useReducer } from "react";
const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
const cardReducer = (state , action) => {
  switch(action.type){
    case "ADD_ITEM":
        if(!state.selectedItems.find(item=>item.id===action.payload.id)){
          state.selectedItems.push({
            ...action.payload,
            quantity:1
          })
        }
        return{
            ...state,
            selectedItems:[...state.selectedItems],
             
        }
    case "REMOVE_ITEM":
        const newSelected=state.selectedItems.filter(item=>item.id !== action.payload.id);
        return{
            ...state,
            selectedItems:[...newSelected],
    
        }
    case "INCREASE":
        const IndexI=state.selectedItems.findIndex(item=> item.id === action.payload.id);
        state.selectedItems[IndexI].quantity++;
        return{
            ...state,
             
        }    
    case "DECREASE":
        const IndexD=state.selectedItems.findIndex(item=> item.id === action.payload.id);
        state.selectedItems[IndexD].quantity--;
        return{
            ...state,
            
        }   
    case "CHECKOUT":
        return{
            selectedItems:[],
            total:0,
            itemCounter:0,
            checkout:true
        }     
    case "CLEAR":
        return{
            selectedItems:[],
            total:0,
            itemCounter:0,
            checkout:false
        }   
    default:
        return{
            state
        }     

}

};

export const reducerContext = React.createContext();
const ReducerContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cardReducer,initialState );
  return (
    <div>
      <reducerContext.Provider value={{state,dispatch}}>
        {children}
      </reducerContext.Provider>
    </div>
  );
};

export default ReducerContextProvider;
