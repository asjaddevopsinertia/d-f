import { ItemsContainer } from "./ItemsContainer";
import logo from "../assets/images/logo.png";
import phone from "../assets/images/telephone-call.png";
import helpline from "../assets/images/paper-plane.png";
import yelp from "../assets/images/yelp.png";
import insta from "../assets/images/instagram.png";
import tiktok from "../assets/images/tik-tok.png";
import facebbok from "../assets/images/facebook.png";
import footerBefore from "../assets/images/footer-before.png"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="pt-[115px] pb-[115px] lg:hidden relative">
        <div className="absolute z-[-1] right-[0] bottom-[0px]">
            <img src={footerBefore} />
        </div>
        <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-3">
            <div>
              <div>
                <img src={logo} className="mb-[21px]" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor <br /> incididunt ut labore et
                  dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div>
                <div className="flex items-center mb-[30px]">
                  <div>
                    <img src={phone} className="mr-[15px]" />
                  </div>

                  <div>
                    <p>Helpline and Support</p>
                    <p className="text-[20px] font-ArialB">+88 05 00 24 51</p>
                  </div>
                </div>
                <div className="flex items-center mb-[30px]">
                  <div>
                    <img src={helpline} className="mr-[15px]" />
                  </div>

                  <div>
                    <p>Helpline and Support</p>
                    <p className="text-[20px] font-ArialB">
                      info@doctorclean.com
                    </p>
                  </div>
                </div>

                <div className="flex space-x-[15px]">
                  <img src={yelp} />
                  <img src={insta} />
                  <img src={tiktok} />
                  <img src={facebbok} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <ol className="space-y-[12px] list-disc">
                <li>Residential</li>
                <li>Commercial</li>
                <li>Why Hire Us</li>
                <li>About Us</li>
                <li>Cleaning Tips</li>
                <li>Practically Spotless</li>
              </ol>
            </div>

            <div className="flex flex-col items-end">
              <ol className="space-y-[12px] list-disc">
                <li>Apply locally</li>
                <li>Aplicar Localmente</li>
                <li>Gift Certificates</li>
                <li>Contact Us</li>
                <li>Locations</li>
                <li>Site Map</li>
              </ol>
            </div>
          </div>
        </ItemsContainer>
      </div>
    </>
  );
};
