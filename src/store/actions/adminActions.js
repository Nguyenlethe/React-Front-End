import actionTypes from './actionTypes';
import { default as useServices} from '../../services/useServices'
import { toast } from 'react-toastify';



export const fetchGenderStart = (inputGender) => {
    // console.log(inputGender)
    return async (dispatch, getState) => {
        try{
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })

            let response = await useServices.getAllCode(inputGender)
        

            if(response && response.data.errCode === 0){
                dispatch(fetchGenderSuscess(response.data.data))
                // console.log('action',response.data.data)
        
            }else{
                dispatch(fetchGenderFAILED())
            }
        }catch(err) {
            console.log("fetchGenderStart"+ err)
            dispatch(fetchGenderFAILED())
        }
    }
}

export const fetchGenderSuscess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUSCESS,
    data: genderData
})

export const fetchGenderFAILED = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})











export const fetchPositionStart = (inputPosition) => {
    // console.log(inputPosition)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllCode(inputPosition)
            if(response && response.data.errCode === 0){
                dispatch(fetchPositionSuscess(response.data.data))
                // console.log('action2',response.data.data)
            }else{
                dispatch(fetchPositionFAILED())
            }
        }catch(err) {
            console.log("fetchPositionStart"+ err)
            dispatch(fetchPositionFAILED())
        }
    }
}

export const fetchPositionSuscess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUSCESS,
    data: positionData
})

export const fetchPositionFAILED = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})










export const fetchRoleStart = (inputRole) => {
    // console.log(inputRole)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllCode(inputRole)
            if(response && response.data.errCode === 0){
                dispatch(fetchRoleSuscess(response.data.data))
                // console.log('action3',response.data.data)
            }else{
                dispatch(fetchRoleFAILED())
            }
        }catch(err) {
            console.log("fetchRoleStart"+ err)
            dispatch(fetchRoleFAILED())
        }
    }
}

export const fetchRoleSuscess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUSCESS,
    data: roleData
})

export const fetchRoleFAILED = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})






export const createNewUser = (data) => {
    // console.log(data)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.createNewUser(data)
            // console.log(response)
            if(response && response.data.errCode === 0){
                dispatch(createNewUserSuscess())
            }else{
                dispatch(createNewUserFAILED())
            }
        }catch(err) {
            console.log("createNewUser"+ err)
            dispatch(createNewUserFAILED())
        }
    }
}

export const createNewUserSuscess = () => ({
    type: actionTypes.CREATE_USER_SUSCESS,
})

export const createNewUserFAILED = () => ({
    type: actionTypes.CREATE_USER_FAILED
})











export const fetchAllUserStart = (data) => {
    // console.log(data)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllUsers(data)
            if(response && response.data.errCode === 0){
                dispatch(fetchAllUserSuscess(response.data.users))
                // console.log(response.data.users)
            }else{
                dispatch(fetchAllUserFAILED())
            }
        }catch(err) {
            console.log("fetchAllUserStart"+ err)
            dispatch(fetchAllUserFAILED())
        }
    }
}

export const fetchAllUserSuscess = (users) => ({
    type: actionTypes.FETCH_ALL_USER_SUSCESS,
    data: users
})

export const fetchAllUserFAILED = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED,
})









//    DELETE_USER_SUSCESS
//    DELETE_USER_FAILED


export const deleteUserStart = (data) => {
    console.log(data)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.deleteUser(data);
            // console.log(response)
            if(response && response.data.errCode === 0){
                dispatch(deleteUserSuscess())

            }else{
                dispatch(fetchAllUserFAILED())
            }
        }catch(err) {
            console.log("deleteUser"+ err)
            dispatch(deleteUserFAILED())
        }
    }
}

export const deleteUserSuscess = () => ({
    type: actionTypes.DELETE_USER_SUSCESS,
})

export const deleteUserFAILED = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})





// EDIT_USER_SUSCESS: 'EDIT_USER_SUSCESS:',
// EDIT_USER_FAILED: 'EDIT_USER_FAILED',

export const editUserStart = (data) => {
    console.log(data)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.editUser(data);
            // console.log(response)
            if(response && response.data.errCode === 0){
                dispatch(editUserSuscess())
            }else{
                dispatch(editUserFAILED())
            }
        }catch(err) {
            console.log("editUser"+ err)
            dispatch(editUserFAILED())
        }
    }
}

export const editUserSuscess = () => ({
    type: actionTypes.EDIT_USER_SUSCESS
})

export const editUserFAILED = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})












// GET_TOP_DOCTOR_SUSCESS: 'GET_TOP_DOCTOR_SUSCESS: ',
// GET_TOP_DOCTOR_FAILED: 'GET_TOP_DOCTOR_FAILED',


export const fetchTopDoctorStart = (limit) => {
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getTopDocterHome(+limit);
            // console.log(response)
            if(response && response.data.errCode === 0){
                console.log(response.data.data)
                dispatch(fetchTopDoctorSuscess(response.data.data))
            }else{
                dispatch(fetchTopDoctorFAILED())
            }
        }catch(err) {
            console.log("fetchTopDoctor"+ err)
            dispatch(fetchTopDoctorFAILED())
        }
    }
}

export const fetchTopDoctorSuscess = (data) => ({
    type: actionTypes.FETCH_TOP_DOCTOR_SUSCESS,
    dataDoctor: data
})

export const fetchTopDoctorFAILED = () => ({
    type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
})




















export const fetchAllDoctorStart = () => {
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllDoctors();
            // console.log("Get All Doctor :",response)
            if(response && response.data.errCode === 0){
                dispatch(fetchAllDoctorSuscess(response.data.data))
            }else{
                dispatch(fetchAllDoctorFAILED())
            }
        }catch(err) {
            console.log("fetchAllDoctor"+ err)
            dispatch(fetchAllDoctorFAILED())
        }
    }
}

export const fetchAllDoctorSuscess = (data) => ({
    type: actionTypes.FETCH_All_DOCTOR_SUSCESS,
    allDoctor: data
})

export const fetchAllDoctorFAILED = () => ({
    type: actionTypes.FETCH_All_DOCTOR_FAILED,
})







// CREATE_DETAIL_DOCTOR_SUSCESS
// CREATE_DETAIL_DOCTOR_FAILED



export const createDetailDoctorStart = (data) => {
    return async (dispatch, getState) => {
        try{
            let response = await useServices.createDetailDoctor(data);
            console.log("create Detail Doctor :",response)
            if(response && response.data.errCode === 0){
                toast.success("Success !!!")
                dispatch(createDetailDoctorSuscess())
            }else{
                toast.error("Failed !!!")
                dispatch(createDetailDoctorFailed())
            }
        }catch(err) {
            console.log("createDetailDoctor"+ err)
            dispatch(createDetailDoctorFailed())
        }
    }
}

export const createDetailDoctorSuscess = () => ({
    type: actionTypes.CREATE_DETAIL_DOCTOR_SUSCESS,
})

export const createDetailDoctorFailed = () => ({
    type: actionTypes.CREATE_DETAIL_DOCTOR_FAILED,
})
