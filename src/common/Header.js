import { ItemsContainer } from "./ItemsContainer";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px] pb-[16px] lg:hidden">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-3">
          <div className="flex items-center justify-center">
            <img src={logo} className="mt-[-10px]" />
          </div>

          <div className="flex items-center justify-center">
            <ul className="flex">
              <Link to="/">
              <li className="mr-[55px]">Home</li>
              </Link>
              <Link to="/about-us">
              <li className="mr-[55px]">About</li>
              </Link>
              <Link to="/services">
              <li className="mr-[55px]">Services</li>
              </Link>
              <Link to="/pricing">
              <li className="mr-[55px]">Pricing</li>
              </Link>
              <Link to="/blog">
              {/* <li className="mr-[55px]">Blog</li> */}
              </Link>
              <Link to="/contact">
              <li>Contact</li>
              </Link>
              
              
             
              
              
            </ul>
          </div>

          <div className="flex items-center justify-end">
            <button className="font-ArialB text-[#fff] px-[30px] bg-[#00A7EE] py-[15px] rounded-[5px]">Book Now</button>
          </div>
        </div>
      </ItemsContainer>
    </>
  );
};
