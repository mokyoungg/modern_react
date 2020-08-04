//axios 관련 코드

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID eZ5vvtbknlFwjw0WT8QCwTHse9f_d0ppyX5Cc2zTarA",
  },
});
