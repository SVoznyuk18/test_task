import axios from "axios";

export const getPositionApiRequest = () =>
  axios({
    method: "GET",
    url: "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
  });
