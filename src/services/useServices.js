/* eslint-disable import/no-anonymous-default-export */

import axios from "../axios";

function handleLogin(email, password) {
  return axios.post("/api/login", { email, password });
  // return axios({  // SD thư viện axios Giống cách trên
  //   method: 'post',
  //   url: 'http://localhost:8080/api/login',
  //   data: {email, password }
  // });
}

function getAllUsers(inputId) {
  return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId });
}

// truyền data them user
function createNewUser(data) {
  return axios.post(`/api/create-new-user`, data);
}

// Xóa user
function deleteUser(data) {
  return axios.delete("/api/delete-user", {
    data: {
      id: data.id,
    },
  });
}

// edit user
function editUser(data) {
  return axios.put("/api/edit-user",data);
}


// edit user
function getAllCode(inputType) {
  return axios.get(`/api/allcode?type=${inputType}`);
}

// Lấy ra all thông tin 10 bs
function getTopDocterHome(limit) {
  return axios.get(`/api/top-docter-home?limit=${limit}`);
}

function getAllDoctors() {
  return axios.get(`/api/get-all-doctors`);
}
 

function createDetailDoctor(data) {
  return axios.post(`/api/save-infor-doctors`,data);
}


function getDetailInfoDoctor(id) {
  return axios.get(`/api/detail-docter-by-id?id=${id}`);
}



export default {
  handleLogin, 
  getAllUsers, 
  createNewUser, 
  deleteUser ,
  editUser,
  getAllCode,
  getTopDocterHome,
  getAllDoctors,
  createDetailDoctor,
  getDetailInfoDoctor
};
