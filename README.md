# 리액트 쌩 기초

## HTML 코딩

## 컴포넌트 만들기
* 컴포넌트는 독립적 단위의 모듈(높은 재사용성)
* 페이지를 구성하는 최소단위
* Header, Nav, Article
![image](https://user-images.githubusercontent.com/116176170/215314584-bfddcdad-ed37-4523-85c5-695ac8fc7cd8.png)
## netlify에 배포 하기
* npx netlify-cli deploy -d build 
    * build 폴더에 있는 빌드된 파일을 배포

## Props
* 컴포넌트에 원하는 값을 넘겨줄때 사용
    * 변수,함수,객체, 배열 등
    * 컴포넌트의 재사용을 위해 사용
![image](https://user-images.githubusercontent.com/116176170/215315879-eab47c35-cd3c-49b5-a2f1-46d1079aec7a.png)

## State
* 컴포넌트 내에서 유동적으로 변할 수 있는 값을 저장
* 자바스크립트에서 처럼 let으로 값을 바꾸면 적용 안됨

## 코드 분산 & 리팩토링
* 여러개의 js파일에 컴포넌트를 분리
![image](https://user-images.githubusercontent.com/116176170/215317633-488a4359-b81b-4ea4-ab6a-c0600887f34c.png)


## ajax를 이용해서 글목록 가져오기
* json-server 생성 : Restfull API를 제공하는 서버 생성 라이브러리
    * npm i -g json-server
    * json-server --watch db.json --port 9999
![image](https://user-images.githubusercontent.com/116176170/215319694-cbdeda0d-daa5-4bc8-b0e0-0e0a8f705858.png)

## 프록시 서버 설정

## Open AI
* 학습한 모델들을 제공해주고 직접 다운받는게 아닌 Rest API로 요청을 해서 AI를 처리 
* 물어보는 정보들을 Prompt
* Prompt를 모델이 처리해서 우리에게 제공

## 생성 구현
![image](https://user-images.githubusercontent.com/116176170/215323373-a395b367-9728-4e51-a60c-d802cc75f1b0.png)
![image](https://user-images.githubusercontent.com/116176170/215326996-4d7566cb-dfa3-469b-a5a0-9901a5c51589.png)

## Props 와 state 차이점
* Props는 컴포넌트라는 제품을 사용하는 사용자의 인터페이스
* State는 컴포넌트 내부에서 사용하는 인터페이스

## 불변성
![image](https://user-images.githubusercontent.com/116176170/215325583-e2e08da7-42f6-41c0-af09-d7584df1fec2.png)
* 코드를 작성하는 의도는 b만 [1,2]가 나오도록 하려고 했음
* 해결 하기 위해 데이터를 불변하게 유지
    * 불변함은 원본을 복제해서 복제본을 바꾼다, 그러면 원본은 안바뀜
![image](https://user-images.githubusercontent.com/116176170/215325708-2f38b6c8-49e3-4e12-8378-33737280eb17.png)

* 값이 원시타입은 무조건 불변  
![image](https://user-images.githubusercontent.com/116176170/215325773-5b418400-6cea-4e5f-b22a-f7eb5dae65c0.png)
* 컬렉션일때는 바뀐다.  
![image](https://user-images.githubusercontent.com/116176170/215325869-807fdd09-2380-4bb0-8956-91db3868af77.png)  

* push vs concat
    * push는 원본데이터를 바꾼다 (가변성)
    * concat은 원본데이터는 유지가 된다 (불변성)
![image](https://user-images.githubusercontent.com/116176170/215326057-91b6935d-1193-4ab4-9cbc-f123db21d3cc.png)


## 삭제
![image](https://user-images.githubusercontent.com/116176170/215328043-c9a50729-776e-496c-9438-566f032cecc2.png)

## 업데이트
![image](https://user-images.githubusercontent.com/116176170/215329672-97058ab6-1175-4066-983b-0aadaa328e61.png)  
![image](https://user-images.githubusercontent.com/116176170/215329740-1bf056ef-abc7-47b9-9f5d-1f734e02a05a.png)  
![image](https://user-images.githubusercontent.com/116176170/215329770-55b4f697-2b74-4471-95c9-9f1323c90738.png)  
* 생성에 읽기를 합친 느낌