import { useRouter } from '../router';

const Header = () => {
  const { push } = useRouter();
  
  const movePage = (e) => {
    if (!e.target.href) return;
    e.preventDefault();

    const path = e.target.getAttribute('href');
    push(path);
  }

  return (
    <header onClick={ movePage }>
      <ul>
        <li>
          <a href="/" className="navigate">
            landing
          </a>
        </li>
        <li>
          <a href="/about" className="navigate">
            about
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

