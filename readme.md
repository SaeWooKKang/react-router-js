# React Router 구현 

## 실행 
```
npm install
npm run dev
```

## 설명

### Router, Route
Router 컴포넌트(Router.jsx)는 Route 컴포넌트(Route.js)들을 children으로 받는다.

Router 컴포넌트는 path를 상태로 가지며

path에 맞는 컴포넌트를 

Route로 이루어진 children 배열에서 찾아서 마운트한다.

또한 useEffect 함수로 history 변경시 

path에 맞는 컴포넌트를 리렌더링하기 위해

popstate 이벤트를 등록한다.

### useRouter
컴포넌트에서 페이지 이동시

useRouter 훅을 사용하여 

history를 변경하고, Router 함수의 path 상태를 변경한다. 

그러면 상태변경으로 Router 컴포넌트가 리렌더링되고, 

현재 path에 맞는 컴포넌트가 마운트 된다.

