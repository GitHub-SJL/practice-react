import './App.css';

function App() {
  function Header() {
    return <h1>React basic</h1>
  }

  function Nav() {
    return <ul>
      <li><a href='/read/1'>컴포넌트</a></li>
      <li><a href='/read/2'>상태관리</a></li>
    </ul>
  }
  function Article() {
    return <>
      <h2>Welcome</h2>
      Hello, React
    </>
  }

  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
