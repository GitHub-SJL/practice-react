
import './App.css';
import Like from './Like';
import { useState, useEffect } from 'react';
import { Article } from './Article';


function Header({ title, onChangeMode }) {
  function clickHandler(evt) {
    evt.preventDefault();
    onChangeMode();
  }
  return <h1><a href="/" onClick={clickHandler}>{title}</a></h1>
}

function Nav({ data, onChangeMode }) {
  const topicList = data.map(item => <li key={item.id}>
    <a
      href={`/read/${item.id}`}
      onClick={evt => {
        evt.preventDefault();
        onChangeMode(item.id);
      }}
    >{item.title}</a>
  </li>);

  return <ul>
    {topicList}
  </ul>
}


// jsx의 라벨값을 바꾸려면 value를 바꿔야함 (일반적인 js에서는 열린,닫힌태그 사이에 넣는 차이점이 있음)
// e.target을 통해 form의 값을 불러올수있다.
function Create({ onCreate }) {
  return <form action="" onSubmit={(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    onCreate(title, body);
  }}>
    <h1>Create</h1>
    <p><input type="text" placeholder='title' name="title" /></p>
    <p><textarea placeholder='body' name='body' ></textarea></p>
    <p><input type="submit" value="create" /></p>
  </form>
}


function App() {

  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [topics, setTopics] = useState([]);
  const init = async () => {
    // locallhost 주소를 적으면 당연히 내 컴퓨터 환경이니까 됨
    // 리액트에게 topics를 요청하면 locallhost:3000/topics를 먼저 살펴봄 근데 응답할게 없음
    // 그러면 응답할게없을때 9999에 물어보라고 설정 (프록시)

    // 그리고 프록시를 설정하여 통신을 하면 브라우저의 sop정책과 상관없이 데이터 통신할수있게됨
    const type = await fetch('topics');
    const topics = await type.json();
    setTopics(topics);
  }
  // deps에 []을 줘서 App이 실행될때 1번만 서버 호출을 하도록 한다.
  useEffect(() => {
    init();
  }, []);


  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, React"></Article>
  } else if (mode === "READ") {
    const topic = topics.find((item) => item.id === id);
    content = <Article title={topic.title} body={topic.body}></Article>
  } else if (mode === "CREATE") {
    // Create 컴포넌트에서 form에 입력한 데이터들을 불러왔고 여기서는 UI만 처리 
    //불러온 데이터들은 함수를 걸어서 바깥에서 db와통신하고 돌아오기
    content = (
      <Create
        onCreate={async (title, body) => {
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
          };
          const type = await fetch("/topics", options);
          // topics에 새로운 form에 입력한 값으로 만든 topic을 추가
          // 불변성때문에 기존 배열들을 다시 불러와서 새롭게 추가해야한다.
          // 즉, 리액트는 값이 달라져야 리랜더링을 하는데 그냥 setTopics로 값을 바꾸면 리액트는 값이 바뀐줄 모른다.
          const topic = await type.json();
          const newTopics = [...topics];
          newTopics.push(topic);
          setTopics(newTopics);
          setMode('READ');
          setId(topic.id);
        }}
      ></Create>);

  }
  ///////////////////////////////////////////////////////////////


  function changeModeHeaderHandler() {
    setMode("WELCOME");
  }


  function changeModeNavHandler(id) {
    setMode("READ")
    setId(id);
  }

  // 삭제는 링크로 하면 안됨
  // 버튼을 이용하고, fetch를 이용해 삭제해보자
  // filter는 불변하기때문에 복제할 필요가 없음
  return (
    <div className="App">
      <Header title="React basic" onChangeMode={changeModeHeaderHandler}></Header>
      <Nav data={topics} onChangeMode={changeModeNavHandler}></Nav>
      {content}
      <Like></Like>
      <ul>
        <li><a href='/create' onClick={(e) => {
          e.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        <li><button onClick={async () => {

          const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          };
          const type = await fetch("/topics/" + id, options);
          const topic = await type.json();
          const newTopics = topics.filter(item => {
            if (item.id === id) {
              return false;
            } else {
              return true;
            }
          });
          setTopics(newTopics);
          setMode('WELCOME');

        }}>delete</button>
        </li>
      </ul>


    </div>
  );
}

export default App;
