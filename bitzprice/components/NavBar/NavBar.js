import Link from "next/link";

const NavBar = () => (
  <>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        color: white;
        background: #333;
        list-style: none;
        display: flex;
      }
      ul li {
        font-size: 18px;
        margin-right: 20px;
      }
      ul li a {
        text-decoration: none;
        color: white;
      }
    `}</style>
  </>
);

export default NavBar;
