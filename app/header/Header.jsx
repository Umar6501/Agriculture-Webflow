import Link from "next/link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="flex h-20 shadow-md items-center fixed right-0 left-0 bg-white top-0">
      <div className="container">
        <div className="nav flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="logo-content flex items-center gap-2 text-decoration-none"
            >
              <img src="./logo.png" alt="logo" />
              <h1 className="text-4xl my-2 text-[#274C5B]">Organick</h1>
            </Link>
          </div>
          <div className="navlinks flex gap-8">
            <Link href="/" className="text-decoration-none text-black">
              Home
            </Link>
            <Link href="#" className="text-decoration-none text-black">
              About
            </Link>
            <Link href="#" className="text-decoration-none text-black">
              Pages
            </Link>
            <Link href="#" className="text-decoration-none text-black">
              Shop
            </Link>
            <Link href="#" className="text-decoration-none text-black">
              Projects
            </Link>
            <Link href="#" className="text-decoration-none text-black">
              News
            </Link>
          </div>
          <div className="actions flex gap-3">
            <form className="d-flex">
              <input
                type="text"
                class="search-input rounded-full outline-none border-2"
                placeholder="search..."
              />

              <button type="submit">
                <img src="./search.svg" alt="search" className="search-btn" />
              </button>
            </form>
            <div className="second-action d-flex items-center border-2 rounded-full gap-2">
              <img src="./cart.svg" alt="" className="cart-img" />
              <p>Cart (0)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
