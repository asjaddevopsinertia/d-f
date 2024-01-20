import { ItemsContainer } from "../ItemsContainer";
import { SectionHeaders } from "../SectionHeaders";
import img1 from "../../assets/images/apartment.svg";
import img2 from "../../assets/images/sec-4-icon-2.png";
import img3 from "../../assets/images/sec-4-icon-3.png";
import img4 from "../../assets/images/sec-4-icon-4.png";
import img5 from "../../assets/images/sec-4-icon-5.png";
import img6 from "../../assets/images/sec-4-icon-6.png";

import imgW1 from "../../assets/images/apartment_white.png";
import imgW2 from "../../assets/images/clean_white.png";
import imgW3 from "../../assets/images/house-cleaning-white.png";
import imgW4 from "../../assets/images/window-cleaning-white.png";
import imgW5 from "../../assets/images/cleaning-cart-white.png";
import imgW6 from "../../assets/images/cleaner-white.png";
import circle from "../../assets/images/circle.png";
import circleb from "../../assets/images/circle-blue.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedServices,
  selectService,
  unselectService,
} from "../../store/slices/ServicesSlice";
import { useEffect, useState } from "react";
import axios from "axios";

export const ServicesCard = () => {
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    (state) => state.services.selectedServices
  );

  console.log("selected", selectedServices);

  const handleClickScroll = () => {
    const element = document.getElementById('extra-cards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (id, name, price) => {
    dispatch(selectService({ id, name, price }));
    handleClickScroll()
  };

  const handleUnselectService = (id) => {
    dispatch(unselectService({ id }));
  };

  const handleClearSelectedServices = () => {
    dispatch(clearSelectedServices());
  };

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/service/services")
      .then(function (response) {
        setServices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemsContainer style="max-w-[1500px] pr-[30px] pl-[30px]">
        <div className="flex justify-center">
          <SectionHeaders
            main="USA's highest-quality, cleaning services"
            subHeading="OUR SERVICES"
            style="text-center w-[520px]"
            subCss="text-[16px] font-ArialB mb-[25px]"
            mainCss="text-[40px] font-Arial leading-[1.3] mb-[55px]"
          />
        </div>

        <div class="grid grid-cols-4 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:gap-5 xmd:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* {Array.isArray(services) && services.length > 0
            ? services.map((x) => {
              const isSelected = selectedServices.some((service) => service.id === x.service_id);
              const cardClass = `border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer ${
                isSelected ? 'bg-[#003DDF]' : ''
              }`;
                return (
                  <div key={x.service_id} className={cardClass}>
                    <div className="absolute right-[30px] top-[30px]">
                      <div>
                        <img
                          src={img1}
                          alt="cleaning"
                          className={`${isSelected ? 'hidden' : 'block'} group-hover:hidden`}
                        />
                        <img
                          src={imgW1}
                          alt="cleaning"
                          className={`${isSelected ? 'block' : 'hidden'}  group-hover:block`}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                        <img src={circle} className="group-hover:hidden" />
                        <img
                          src={circleb}
                          className="hidden group-hover:block"
                        />
                      </div>
                      <h3 className={`text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff] ${isSelected ? 'text-[#fff]' : ''}`}>
                        {x.service_name}
                      </h3>
                      <p className={`text-[16px] group-hover:text-[#fff] ${isSelected ? 'text-[#fff]' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                    <div className="absolute right-[30px] bottom-[20px]">
                      <div>
                        {isSelected ? (
                          <button
                            onClick={() => handleUnselectService(x.service_id)}
                            className="text-[#FFEA3A] font-ArialB"
                          >
                            Unselect
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleSelectService(
                                x.service_id,
                                x.service_name,
                                parseInt(x.price)
                              )
                            }
                            className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]"
                          >
                            Book Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""} */}

          <div
            onClick={() =>
              handleSelectService(10, "Deep Cleaning of Occupied Homes", 2000)
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img2} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW2}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                One-time and Recurring Cleaning
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(
                5,
                " Move-In & Move-Out Cleaning of Vacant Homes",
                10
              )
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img3} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW3}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                Deep Cleaning
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(
                6,
                "Vacation Rentals Cleaning & Concierge Service (Airbnb)",
                10
              )
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img4} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW4}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                Move-In & Move Out <br /> Cleaning of Vacant Homes{" "}
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(7, "High-End Estates Cleaning", 10)
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img5} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW5}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                Custom Cleaning
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(
                6,
                "Vacation Rentals Cleaning & Concierge Service (Airbnb)",
                10
              )
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img4} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW4}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                Vacation Rentals Cleaning <br /> & Concierge Service (Airbnb){" "}
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(
                6,
                "Vacation Rentals Cleaning & Concierge Service (Airbnb)",
                10
              )
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img4} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW4}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                High-End Estates <br /> Cleaning{" "}
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(
                6,
                "Vacation Rentals Cleaning & Concierge Service (Airbnb)",
                10
              )
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img4} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW4}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
                Post Construction  <br /> Cleaning
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              handleSelectService(8, "Post-Construction Cleaning", 10)
            }
            className="border-2 border-[#E7E7E7] rounded-[5px] relative pt-[85px] pb-[60px] pl-[30px] pr-[30px] group hover:bg-[#003DDF] cursor-pointer"
          >
            <div className="absolute right-[30px] top-[30px]">
              <div>
                <img src={img6} alt="cleaning" className="group-hover:hidden" />
                <img
                  src={imgW6}
                  alt="cleaning"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-[-1] left-[-13px] top-[-1px]">
                <img src={circle} className="group-hover:hidden" />
                <img src={circleb} className="hidden group-hover:block" />
              </div>
              <h3 className="text-[20px] font-ArialB mb-[22px] group-hover:text-[#fff]">
              Business & Commercial <br /> Cleaning
              </h3>
              <p className="text-[16px] group-hover:text-[#fff]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute right-[30px] bottom-[20px]">
              <div>
                <button className="text-[#0142e8] font-ArialB group-hover:text-[#FFEA3A]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </ItemsContainer>
    </>
  );
};
