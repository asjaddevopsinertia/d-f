import { ItemsContainer } from "../ItemsContainer";
import { SectionHeaders } from "../SectionHeaders";
import bg from "../../assets/images/sec-3-bg.jpg";

import img1 from "../../assets/images/sec-3-icon-1.png";
import img2 from "../../assets/images/sec-3-icon-2.png";
import img3 from "../../assets/images/sec-3-icon-3.png";
import img4 from "../../assets/images/sec-3-icon-4.png";

export const WorkCard = () => {
  const dynamicStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section className="mt-[95px]">
        <ItemsContainer style="max-w-[1230px]">
          <div className="pb-[58px] pr-[40px] pl-[40px]" style={dynamicStyle}>
            <div className="flex justify-center">
              <SectionHeaders
                main="The most thorough & effective cleaning service."
                subHeading="HOW IT WORKS"
                style="text-center w-[620px]"
                subCss="text-[16px] font-ArialB mb-[25px] text-[#fff]"
                mainCss="text-[40px] font-Arial leading-[1.3] mb-[70px] text-[#fff]"
              />
            </div>
            <div class="grid grid-cols-4 gap-3 text-center mb-[70px] xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:gap-2 xmd:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              <div>
                <div className="flex justify-center mb-[35px]">
                  <img src={img1} alt="service" />
                </div>

                <div className="">
                  <h3 className="text-[20px] font-ArialB text-[#fff] mb-[25px]">
                    Select the Service
                  </h3>
                  <p className="text-[16px] text-[#fff]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc us antium doloremque laudant.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-center mb-[35px]">
                  <img src={img2} alt="extras" />
                </div>

                <div className="">
                  <h3 className="text-[20px] font-ArialB text-[#fff] mb-[25px]">Select the Extras</h3>
                  <p className="text-[16px] text-[#fff]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc us antium doloremque laudant.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-center mb-[35px]">
                  <img src={img3} alt="date" />
                </div>

                <div className="">
                  <h3 className="text-[20px] font-ArialB text-[#fff] mb-[25px]">
                    Pick the Date and Time
                  </h3>
                  <p className="text-[16px] text-[#fff]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc us antium doloremque laudant.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-center mb-[35px]">
                  <img src={img4} />
                </div>

                <div className="">
                  <h3 className="text-[20px] font-ArialB text-[#fff] mb-[25px]">
                    Complete the booking
                  </h3>
                  <p className="text-[16px] text-[#fff]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc us antium doloremque laudant.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-[18px] font-ArialB text-[#fff] mr-[3px]">Home and Office Cleaning 7 days a week! Same Day Bookings.</p>
              <button className="text-[18px] font-ArialB bg-transparent decoration-solid text-[#FFEA3A]">Book Instantly</button>
            </div>
          </div>
        </ItemsContainer>
      </section>
    </>
  );
};
