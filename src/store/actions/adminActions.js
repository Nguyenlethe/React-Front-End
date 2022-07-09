import actionTypes from './actionTypes';
import { default as useServices} from '../../services/useServices'



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
                console.log('action',response.data.data)
            }else{
                dispatch(fetchGenderFaided())
            }
        }catch(err) {
            dispatch(fetchGenderFaided())
            console.log('fetchGenderStart error',err);
        }
    }
}

export const fetchGenderSuscess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUSCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})











export const fetchPositionStart = (inputPosition) => {
    console.log(inputPosition)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllCode(inputPosition)
            if(response && response.data.errCode === 0){
                dispatch(fetchPositionSuscess(response.data.data))
                console.log('action2',response.data.data)
            }else{
                dispatch(fetchPositionFaided())
            }
        }catch(err) {
            dispatch(fetchPositionFaided())
            console.log('fetchGenderStart error',err);
        }
    }
}

export const fetchPositionSuscess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUSCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})










export const fetchRoleStart = (inputRole) => {
    console.log(inputRole)
    return async (dispatch, getState) => {
        try{
            let response = await useServices.getAllCode(inputRole)
            if(response && response.data.errCode === 0){
                dispatch(fetchRoleSuscess(response.data.data))
                console.log('action3',response.data.data)
            }else{
                dispatch(fetchRoleFaided())
            }
        }catch(err) {
            dispatch(fetchRoleFaided())
            console.log('fetchGenderStart error',err);
        }
    }
}

export const fetchRoleSuscess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUSCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})