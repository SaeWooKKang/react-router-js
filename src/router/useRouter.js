import { useContext } from 'react';
import { RouterContext } from '.';

/**
 * @returns path handler
 */
export const useRouter = () => {
  // Router에서 정의한 path handler를 가져온다. 
  const { setPath } = useContext(RouterContext);
  
  // pushState로 history를 관리하고,
  // path handler로 상태를 변경한다.
  const push = path => {
    history.pushState(null, null, path); 
    setPath(path);
  }

  return { push };
}