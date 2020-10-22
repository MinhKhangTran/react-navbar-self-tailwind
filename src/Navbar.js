import React from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const linksContainerRef = React.useRef(null);
  const linksRef = React.useRef(null);
  React.useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [show]);
  return (
    <nav className="bg-pink-500">
      <div className="md:flex md:items-center md:justify-center md:w-4/5 md:mx-auto">
        <div className="header flex mx-auto w-11/12 justify-between md:w-1/4">
          <img src={logo} alt="logo" className="" />
          <button
            className="md:hidden"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FaBars className="text-pink-800" />
          </button>
        </div>
        <div
          className="container md:pl-32 overflow-hidden md:overflow-visible transition transition-all duration-300 ease-in-out"
          ref={linksContainerRef}
        >
          <div
            className="links flex flex-col md:flex-row h-auto"
            ref={linksRef}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <a
                  href={url}
                  key={id}
                  className="capitalize pl-4 hover:text-bg-700"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>

        <div className="social hidden md:flex md:w-1/4 md:justify-around ml-20">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <a href={url} key={id}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
