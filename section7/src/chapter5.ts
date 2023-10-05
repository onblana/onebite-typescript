/**
 * Promise
 */

// 프로미스 생성자 호출 시 new Promise<number> 이렇게 type변수를 할당해주면
// 비동기 처리 결과값의 type을 직접 명시할 수 있다!
//
// 타입변수정의 <>를 빼먹으면 기본적으로 결과값이 unknown타입으로 추론된다
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20); // 성공한 경우
  }, 3000);
});

// Promise는 resolve나 reject로 전달하는 결과값의 타입을 자동으로 추론할 수 없음
promise.then((response) => {
  // response의 타입이 <number>를 통해 number로 추론됨. <>이 없으면 unknown.
  console.log(response * 10); // 20
});

const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject('~~때문에 실패'); // 실패한 경우
  }, 3000);
});

promise2.catch((err) => {
  if (typeof err === 'string') {
    console.log(err);
  }
});

/**
 * 실제 promise는 어떤 데이터를 불러오는 함수의 반환값으로 자주 쓰이므로,
 * Promise를 반환하는 함수의 타입을 정의해보기
 * => 서버로부터 하나의 게시글 데이터를 불러오는 함수를 만든다고 가정
 */

interface Article {
  id: number;
  title: string;
  content: string;
}

function fetchArticle(): Promise<Article> { // 함수의 반환값 타입을 명시하는 걸 추천. 리턴문에 명시하는 것보다 가독성이 좋음.
  return new Promise /*<Article>*/((resolve, reject) => { // 리턴문 명시보다는 반환값 타입으로 명시
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 내용',
      });
    }, 3000);
  });
}

const articleRequest = fetchArticle();

articleRequest.then((post) => {
  post.id;
})
