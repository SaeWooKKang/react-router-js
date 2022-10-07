import { useEffect, useState } from 'react';
import { RouterContext } from '.';

// 라우터 함수는 children으로 Route Component들을 받는다.
const Router = ({ children }) => {
  // path 변경시 리렌더링 시키기위해
  // path를 상태로 갖는다. 
  const [path, setPath] = useState(location.pathname);
  
  // componentDidMount시 
  // onpopstate 이벤트리스너에 등록
  useEffect(() => {
    window.addEventListener(
      'popstate', 
      () => setPath(location.pathname)
    );
  },[]);
  
  return (
    <RouterContext.Provider value={{ setPath }}>
      { 
        mountComponent(path, children) 
          || 
        <>not found</>
      }
    </RouterContext.Provider>
  );
}

export default Router;

// Route의 배열인 children을 순회하면서 
// 현재 path 상태와 같은 children의 path를 찾는다.
const mountComponent = (path, children) => {
  const component = children
    .find(Route => Route.props.path === path);

  return component?.props.component;
}