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

## 코드 분산
* 여러개의 js파일에 컴포넌트를 분리
