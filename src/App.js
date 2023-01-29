
import { useState } from 'react';
import './App.css';

function App() {
  function Header({ title }) {
    return <h1>{title}</h1>
  }

  function Link() {
    let countState = useState(1000);
    let count = countState[0];
    let setCount = countState[1];

    const clickHandler = () => {
      return setCount((count) => count + 1)
    }


    return <div>
      <button onClick={clickHandler}>{count}</button>
    </div>
  }



  function Nav({ data }) {
    const topicList = [];
    // 배열을 받아서 반복문으로 풀고 
    // 각각 li 태그로 감싸줌
    // 이때, 리액트는 반복문을 사용하게되면 가상돔이기에 인식할 key가 필요 
    for (let i = 0; i < data.length; i++) {
      topicList.push(<li><a href={"/read/" + data[i].id}>{data[i].title}</a></li>)
    }
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
  const topics = [
    { id: 1, title: '컴포넌트', body: '컴포넌트는...' },
    { id: 2, title: '상태관리', body: '상태관리는...' },
  ]

  return (
    <div className="App">
      <Header title="React basic"></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, React"></Article>
      <Link></Link>
    </div>
  );
}

export default App;
