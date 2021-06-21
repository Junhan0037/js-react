const myLogger = store => next => action => {
  console.log(action);
  console.log('\tPrev', store.getState()); // 이 상태를 가져와서 출력
  const result = next(action); // 다음 미들웨어에게 전달 or reducer에게 전달
  console.log('\tNext', store.getState()); // 다음 상태를 가져와서 출력
  return result; // dispatch 결과물
};

export default myLogger;
