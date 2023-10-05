/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[]

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
  // []대괄호 안에 number를 넣으면, 배열의 요소의 타입을 가져옴
  // 숫자를 넣어도 결과는 같은데, [0]일 경우 0은 또한 값이 아니라 타입임. number literal type
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // error

type TupNum = Tup[number]; // 유니온 타입으로 추출