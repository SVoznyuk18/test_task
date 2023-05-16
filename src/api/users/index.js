import axios from "axios";

export const getUsersApiRequest = (page) => axios({
    method: 'GET',
    url: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
});

export const getOffsetUsersApiRequest = page => axios({
    method: "GET",
    url: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
})

export const createNewUserApiRequest = (params, token) => axios({
    method: 'POST',
    url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    body: params,
    headers: {Token: token}
})