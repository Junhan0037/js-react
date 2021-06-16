import React from "react";
import qs from 'qs';

function About({location}) { // location: Route에서 내려주는 쿼리를 가지고 있다.
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true'; // 문자열로 추출된다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
}

export default About;
