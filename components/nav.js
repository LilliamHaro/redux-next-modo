import Link from "next/link";

const Nav = props => (
  <nav>
    <div>logo</div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        transition:all 0.3s;
        }

        nav ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style:none;
          margin:0;
        }

        nav ul li {
          margin-left: 25px;
        }
        nav ul li a {
          transitiion: all 0.3s;
        }
    `}</style>
  </nav>
);

export default Nav;
