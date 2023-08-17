import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-full ">
        <navbar className="w-11/12 p-4 flex justify-between items-center">
          <div>
            <li className="list-none" >
              <Link to="" className="text-5xl font-extrabold text-[#003366]">Eldesoky</Link>
            </li>
          </div>
          <div className="flex justify-between gap-5 font-extrabold text-2xl">
            <ul className="flex justify-between first-letter:uppercase gap-10">
              <li>
                <Link to="" className="">Home</Link>
              </li>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="gallery">Gallery</Link>
              </li>
              <li>
                <Link to="contact">Contact us</Link>
              </li>
            </ul>
            <div>
              <Link>EN</Link>
            </div>
          </div>
        </navbar>
      </header>
    </>
  );
};

export default Header;
