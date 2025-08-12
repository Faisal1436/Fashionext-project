import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name : "fetchStatus",
  initialState : {
    fetchingDone : false , // false : Pending , true : Fetched
    currentlyFetching : false ,
  },
  reducers : {
    markFetchingDone : (state) =>{
       state.fetchingDone = true;
    },
     markFetchingStarted : (state) =>{
       state.currentlyFetching = true;
    },
     markFetchingfinished : (state) =>{
       state.currentlyFetching = false;
    }
  }
});

export default fetchStatusSlice
export const fetchStatusActions = fetchStatusSlice.actions