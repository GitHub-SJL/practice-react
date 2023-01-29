import { useState } from 'react';

function Link() {
    const [count, setCount] = useState(0);
    // 리액트에서 이벤트의 값은 반드시 함수이다.

    const clickHandler = () => {
    // 클릭했을때 +3이 되려고 할때 아래처럼 작성하면 안된다.
    // 다음 상태의 +1이아닌 서로 현재 상태의 +1을 하려고 동작하게된다. 
    //   setCount(count + 1)
    //   setCount(count + 1)
    //   setCount(count + 1)
    setCount((oldState)=>{
        return oldState + 1;
    })
    setCount((oldState)=>{
        return oldState + 1;
    })
    setCount((oldState)=>{
        return oldState + 1;
    })

    }
 

    return <div>
      <button onClick={clickHandler}>{count}</button>
    </div>
  }
export default Link