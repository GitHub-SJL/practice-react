import {useEffect, useState} from 'react';
export function Article({ title, body }) {
  const [category, setCategory] = useState(null);
  useEffect(()=>{
    // 경고, 아래 코드를 실제 서비스에서 쓰지 마세요!!!! 
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "아래의 내용은 기술, 예술, 스포츠, 정치 카테고리 중에 어디에 속해?\n"+body,
        "max_tokens": 50,
        "temperature": 0
      })
    })
    .then(res => res.json())
    .then(res => {
      setCategory(res.choices[0].text);
    })
    .catch(err => console.log(err))
  },[title, body]);
  return <>
    <h2>{title}</h2>
    {body}
    <div>{category}</div>
  </>;
}

