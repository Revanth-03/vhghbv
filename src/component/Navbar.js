// import {} from 'react-router-dom';
import "../styles.css";
function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href={"/"}> Home </a>
        </li>
        <li>
          <a href={"/create-post"}>CreatePost</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
