import axios from "axios";

export const getPositionApiRequest = (params) =>
  axios({
    method: "GET",
    url: "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
  });
