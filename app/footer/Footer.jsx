import Link from "next/link";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <section className="buttom">
        <div className="container relative">
          <img
            src="./buttomimg.png"
            alt=""
            className="absolute z-[-1] rounded-[40px]"
          />
          <div className="buttom-content">
            <h1>
              Subscribe to <br /> our Newsletter
            </h1>
            <div className="inputs">
              <input type="text" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section mt-12">
        <div className="container">
          <div className="f-content flex justify-center items-center gap-12">
            <div className="left flex items-end flex-col">
              <h3 className="text-[#525C60]">Contact Us</h3>
              <h4 className="text-[#525C60]">Email</h4>
              <p className="text-[#525C60]">needhelp@Organia.com</p>
              <h4 className="text-[#525C60]">Phone</h4>
              <p className="text-[#525C60]">666 888 888</p>
              <h4 className="text-[#525C60]">Address</h4>
              <p className="text-[#525C60]">88 road, borklyn street, USA</p>
            </div>
            <div className="hr h-64 bg-[#D4D4D4] p-[0.7px]"></div>
            <div className="center">
              <div className="flex items-center flex-col">
                <img src="./logo.png" alt="" />
                <h3 className="text-[#525C60]">Organick</h3>
                <p className="text-center text-[#525C60]">
                  Simply dummy text of the printing and typesetting industry.{" "}
                  <br />
                  Lorem Ipsum simply dummy text of the printing
                </p>
                <div className="images flex flex-row gap-2">
                  <img src="./1.svg" alt="" />
                  <img src="./2.svg" alt="" />
                  <img src="./3.svg" alt="" />
                  <img src="./4.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="hr h-64 bg-[#D4D4D4] p-[0.7px]"></div>

            <div className="right">
              <h3 className="text-[#525C60]">Utility Pages</h3>
              <div className="flex items-start flex-col gap-4">
                <Link className="text-decoration-none text-[#525C60]" href="#">
                  Style Guide
                </Link>
                <Link className="text-decoration-none text-[#525C60]" href="#">
                  404 Not Found
                </Link>
                <Link className="text-decoration-none text-[#525C60]" href="#">
                  Password Protected
                </Link>
                <Link className="text-decoration-none text-[#525C60]" href="#">
                  Licences
                </Link>
                <Link className="text-decoration-none text-[#525C60]" href="#">
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-[#525C60] text-sm text-center mb-3">
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
