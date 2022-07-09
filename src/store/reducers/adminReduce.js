import actionTypes from '../actions/actionTypes';

const initialState = {
   genders: [],
   roleId: [],
   position: [],
   isLoadingGender: false
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:  
            state.isLoadingGender = true;
            return {
                ...state
            }
  

        case actionTypes.FETCH_GENDER_SUSCESS:  
            // state là data của redux ,  action là dữ liệu trả về của Action
            state.genders = action.data
            console.log("reduce",action.data)
            state.isLoadingGender = false;
            return {
                ...state
            }


        case actionTypes.FETCH_GENDER_FAIDED:
            state.genders = []
            state.isLoadingGender = false;
            return {
                ...state
            }


        case actionTypes.FETCH_POSITION_SUSCESS:  
            state.position = action.data
            state.isLoadingGender = false;
            console.log("reduce2",action.data)
            return {
                ...state
            }


        case actionTypes.FETCH_POSITION_FAIDED:
            state.position = []
            state.isLoadingGender = false;
            return {
                ...state
            }




        case actionTypes.FETCH_ROLE_SUSCESS:  
             console.log("reduce3",action.data)
            state.roleId = action.data
            state.isLoadingGender = false;
            return {
                ...state
            }


        case actionTypes.FETCH_ROLE_FAIDED:
            state.roleId = []
            state.isLoadingGender = false;
            return {
                ...state
            }













        default:
            return state;
    }
}

export default adminReducer;