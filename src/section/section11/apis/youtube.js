import axios from "axios";

// youtube API 활용을 위한 API 키
// 공개적으로 사용할 수 있도록 제공된 키.
//const KEY = `AIzaSyA39oc6sa7xMOabjl3GIoVQj2Uj-Vf81dY`;

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/search`,
});
