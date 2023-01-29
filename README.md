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