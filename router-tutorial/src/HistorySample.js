import React, {useEffect} from "react";

function HistorySample({history}) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  }

  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나십니까?');
    return () => { // Clean up the subscription
      unblock();
    }
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로 가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;