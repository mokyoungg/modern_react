//히스토리 객체를 생성하고 유지한다.(라우터를 반응시키는 것과는 달리)
//엑세스 권한을 얻고 사용자가 보고 있는 페이지를 변경하는것이 훨씬 쉬워질 것이다.

//import createHistory from "history/createBrowserHistory";
//export default createHistory();

import { createBrowserHistory } from "history";
export default createBrowserHistory();
