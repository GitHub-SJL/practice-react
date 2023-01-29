import { useState } from 'react';

function Link() {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
      return setCount((count) => count + 1)
    }


    return <div>
      <button onClick={clickHandler}>{count}</button>
    </div>
  }
export default Link