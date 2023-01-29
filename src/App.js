
import { useState, } from 'react';
import './App.css';
import Like from './Like';

function App() {
  let content;
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)

  function Header({ title }) {
    return <h1>{title}</h1>
  }

  const topics = [
    { id: 1, title: '컴포넌트', body: '컴포넌트는...' },
    { id: 2, title: '상태관리', body: '상태관리는...' },
  ]

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, React"></Article>
  } else if (mode === "READ") {
    const topic = topics.find((item) => item.id === id);
    content = <Article title={topic.title} body={topic.body}></Article>
  }
///////////////////////////////////////////////////////////////

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
  function Article({ title, body }) {
    return <>
      <h2>{title}</h2>
      {body}
    </>
  }

  function changeModeHeaderHandler() {
    setMode("WELCOME");
  }

  // Nav 리스트의 링크를 클릭하게되면 onClick이 changeModeNavHandler를 실행하고 이것은 mode와 id 값을 바꿔준다
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
