import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // useEffect 에서 async 사용을 위한 함수 1
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    /*useEffect에서 async 사용을 위한 함수 2
    async () => {
      await axios.get();
    })();*/

    /*useEffect에서 async 사용을 위한 함수 3
    axios.get();
    .then((respones)=> {
      console.log(response.deat)
    })*/

    //최초 render에서 검색결과 바로 보이게
    if (term && !results.length) {
      search();
    } else {
      // term의 변화마다 검색되는 것을 제한
      const tiemoutId = setTimeout(() => {
        // 빈 문자열일 때 검색 제한
        if (term) {
          search();
        }
      }, 1000);

      // 이전 타이머를 취소하고 다시 타이머가 시작됨
      return () => {
        clearTimeout(tiemoutId);
      };
    }
  }, [term]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`http://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* 문자열로 render 되는 html 태그 수정 XSS 공격 유의*/}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
