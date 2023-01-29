import { useState } from 'react';

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
export default Link