import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/shared/desktop/logo-dark.png";
import styles from "./Navbar.module.scss";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const navList: { name: string; ref: string }[] = [
  { name: "OUR COMPANY", ref: "/" },
  { name: "LOCATIONS", ref: "/" },
  { name: "CONTACT", ref: "/" },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav>
      <div
        className={`${styles.container} container md:pl-[165px] md:pr-[165px]`}
      >
        <div className="hidden md:flex justify-between items-center  my-[64px]">
          <div>
            <Image
              alt="logo"
              src={logo}
              width={202}
              height={27}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          <div>
            <ul className="flex">
              {navList?.map((item, index) => (
                <li
                  className={`${styles.listItem} ml-[42px] cursor-pointer`}
                  key={index}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}

      <div className=" md:hidden">
        <div className="flex justify-between items-center my-[35px] px-[24px]">
          <div>
            <Image
              alt="logo"
              src={logo}
              width={202}
              height={27}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          <div>
            {nav ? (
              <BiMenu onClick={() => setNav(!nav)} className="w-8 h-8" />
            ) : (
              <MdClose onClick={() => setNav(!nav)} className="w-8 h-8" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? `fixed w-full left-0 overflow-hidden transition-all duration-100 ease-in-out `
              : `fixed w-full left-[-100%] overflow-hidden transition-all duration-100 ease-in-out`
          }
        >
          <ul className={`${styles.mobileDropdown} py-[16px] px-[24px]`}>
            {navList?.map((item, index) => (
              <li
                className={`${styles.moblieListItem} my-[32px] cursor-pointer`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
