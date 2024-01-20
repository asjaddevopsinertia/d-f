import { ItemsContainer } from "./ItemsContainer";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-1.png";
import icon3 from "../assets/images/icon-1.png";

export const InfoBanner = () => {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
          <div class="flex items-end justify-end space-x-[100px] pt-[14px] pb-[14px]">
              <div className="flex items-center">
                <img src={icon1} className="mr-[10px]" alt="phone" />
                <p className="text-[15px] text-[#001837] font-Arial">
                  + (123) 1800-567-8990
                </p>
              </div>
            
           
              <div className="flex items-center">
                <img src={icon2} className="mr-[10px]" alt="time" />
                <p className="text-[15px] text-[#001837] font-Arial">
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                </p>
              </div>
          
              <div className="flex items-center">
                <img src={icon3} className="mr-[10px]" alt="email" />
                <p className="text-[15px] text-[#001837] font-Arial">
                  info@doctorclean.com
                </p>
              </div>
            
          </div>
          
        </ItemsContainer>
      </div>
    </>
  );
};
