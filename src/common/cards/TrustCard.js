import { ItemsContainer } from "../ItemsContainer";
import { SectionHeaders } from "../SectionHeaders";
import icon4 from "../../assets/images/icon-4.png";
import icon5 from "../../assets/images/icon-5.png";
import icon6 from "../../assets/images/icon-6.png";

export const TrustCard = () => {
  return (
    <>
      <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
        <div className="flex justify-center">
          <SectionHeaders
            main="Your trust, security, and satisfaction are our top priorities."
            subHeading="WHY DOCTOR CLEAN"
            style="text-center w-[620px]"
            subCss="text-[16px] font-ArialB mb-[35px]"
            mainCss="text-[40px] font-Arial leading-[1.3] mb-[60px]"
          />
        </div>
        <div class="grid grid-cols-3 gap-3 text-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:gap-2 xmd:grid-cols-2">
          <div>
            <div className="flex justify-center">
              <img className="object-contain" src={icon4} alt="convenient" />
            </div>

            <div className="mt-[45px]">
              <h3 className="text-[24px] font-ArialB">Convenient</h3>
              <p className="text-[20px]">Instant online quote and booking</p>
            </div>
          </div>

          <div className="relative">
            <div className="before:bg-[#FFEA3A] before:absolute before:left-[0] before:h-[65px] before:w-[1px]">
              <div className="flex justify-center">
                <img className="object-contain" src={icon5} alt="local" />
              </div>

              <div className="mt-[45px]">
                <h3 className="text-[24px] font-ArialB">Local</h3>
                <p className="text-[20px]">Independently owned and operated</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="before:bg-[#FFEA3A] before:absolute before:left-[0] before:h-[65px] before:w-[1px]">
              <div className="flex justify-center">
                <img className="object-contain" src={icon6} alt="Quick" />
              </div>

              <div className="mt-[45px]">
                <h3 className="text-[24px] font-ArialB">Quick</h3>
                <p className="text-[20px]">Consistent and swift cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </ItemsContainer>
    </>
  );
};
