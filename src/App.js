
import { useState, useEffect } from 'react';
import './App.css';
import Like from './Like';

function Header({ title, onChangeMode }) {
  function clickHandler(evt) {
    evt.preventDefault();
    onChangeMode();
  }
  return <h1><a href="/" onClick={clickHandler}>{title}</a></h1>
}

function Article({ title, body }) {
  return <>
    <h2>{title}</h2>
    {body}
  </>
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


function App() {

  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [topics, setTopics] = useState([]);
  const init = async ()=>{
    // locallhost 주소를 적으면 당연히 내 컴퓨터 환경이니까 됨
    // 리액트에게 topics를 요청하면 locallhost:3000/topics를 먼저 살펴봄 근데 응답할게 없음
    // 그러면 응답할게없을때 9999에 물어보라고 설정 (프록시)

    // 그리고 프록시를 설정하여 통신을 하면 브라우저의 sop정책과 상관없이 데이터 통신할수있게됨
    const type = await fetch('topics');
    const topics = await type.json();
    setTopics(topics);
  } 
  // deps에 []을 줘서 App이 실행될때 1번만 서버 호출을 하도록 한다.
  useEffect(()=>{
    init();
  },[]);


  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, React"></Article>
  } else if (mode === "READ") {
    const topic = topics.find((item) => item.id === id);
    content = <Article title={topic.title} body={topic.body}></Article>
  }
  ///////////////////////////////////////////////////////////////


  function changeModeHeaderHandler() {
    setMode("WELCOME");
  }


  function changeModeNavHandler(id) {
    setMode("READ")
    setId(id);
  }


  return (
    <div className="App">
      <Header title="React basic" onChangeMode={changeModeHeaderHandler}></Header>
      <Nav data={topics} onChangeMode={changeModeNavHandler}></Nav>
      {content}
      <Like></Like>
    </div>
  );
}

export default App;
