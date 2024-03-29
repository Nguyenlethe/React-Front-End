const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    // Admin 
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUSCESS: 'FETCH_GENDER_SUSCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_POSITION_SUSCESS: 'FETCH_POSITION_SUSCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    FETCH_ROLE_SUSCESS: 'FETCH_ROLE_SUSCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    CREATE_USER_SUSCESS: 'CREATE_USER_SUSCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',


    FETCH_ALL_USER_SUSCESS: 'FETCH_ALL_USER_SUSCESS:',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    DELETE_USER_SUSCESS: 'DELETE_USER_SUSCESS:',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',


    EDIT_USER_SUSCESS: 'EDIT_USER_SUSCESS:',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',


    FETCH_TOP_DOCTOR_SUSCESS: 'FETCH_TOP_DOCTOR_SUSCESS: ',
    FETCH_TOP_DOCTOR_FAILED: 'FETCH_TOP_DOCTOR_FAILED',


    FETCH_All_DOCTOR_SUSCESS: 'FETCH_All_DOCTOR_SUSCESS: ',
    FETCH_All_DOCTOR_FAILED: 'FETCH_All_DOCTOR_FAILED',


    
    CREATE_DETAIL_DOCTOR_SUSCESS: 'CREATE_DETAIL_DOCTOR_SUSCESS: ',
    CREATE_DETAIL_DOCTOR_FAILED: 'CREATE_DETAIL_DOCTOR_FAILED',

})

export default actionTypes;