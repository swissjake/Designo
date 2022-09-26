import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/shared/desktop/logo-dark.png";
import styles from "./Navbar.module.scss";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";

const navList: { name: string; ref: string }[] = [
  { name: "OUR COMPANY", ref: "/aboutUs" },
  { name: "LOCATIONS", ref: "/" },
  { name: "CONTACT", ref: "/contact" },
];
const Navbar: React.FC = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);

  const router = useRouter();

  return (
    <nav>
      <div
        className={`${styles.container} container md:px-[40px] xl:px-[165px]`}
      >
        <div className="hidden md:flex justify-between items-center  my-[64px]">
          <div onClick={() => router.push("/")}>
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
                  onClick={() => router.push(item.ref)}
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

      <div className="bg-white w-full fixed z-50 md:hidden">
        <div className=" flex justify-between items-center my-[35px] px-[24px]">
          <div
            onClick={() => {
              router.push("/");
              setNav(false);
            }}
          >
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
            {!nav ? (
              <BiMenu onClick={() => setNav(!nav)} className="w-8 h-8" />
            ) : (
              <MdClose onClick={() => setNav(!nav)} className="w-8 h-8" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? `fixed w-full z-50 top-[100px] left-0 overflow-hidden transition-all duration-100 ease-in-out `
              : `fixed w-full z-50 top-[100px] left-[-100%] overflow-hidden transition-all duration-100 ease-in-out`
          }
        >
          <ul className={`${styles.mobileDropdown} py-[16px] px-[24px]`}>
            {navList?.map((item, index) => (
              <li
                onClick={() => {
                  router.push(item.ref);
                  setNav(false);
                }}
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
