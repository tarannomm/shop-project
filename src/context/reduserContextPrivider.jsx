import React, { useReducer } from 'react';
const initialState={
    selectedItems:[],
    itemCounter:0,
    total:0,
    checkout:false,
}
const ReduserContextPrivider = () => {
    const [state,dispatch]=useReducer(initialState,cardReduser);
    return (
        <div>
            
        </div>
    );
};

export default ReduserContextPrivider;