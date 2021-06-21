const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// {id, title, body}
const posts = [
  {
    id: 1,
    title: 'abc',
    body: '리덕스 미들웨어를 직접 개발',
  },
  {
    id: 2,
    title: 'def',
    body: 'redux-thunk 비동기 작업',
  },
  {
    id: 3,
    title: 'ghi',
    body: '리액트 개발해보기',
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
};