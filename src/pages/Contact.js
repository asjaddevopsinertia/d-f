import { Header } from "../common/Header";
import { InfoBanner } from "../common/InfoBanner";
import { ItemsContainer } from "../common/ItemsContainer";
import { MainBanner } from "../common/MainBanner";
import address from "../assets/images/address2.png";
import email from "../assets/images/mail2.png";
import phone from "../assets/images/phone2.png";
import { SectionHeaders } from "../common/SectionHeaders";
import { TestimonialCard } from "../common/cards/TestimonialCard";
import { Consultation } from "../common/ConsultationSec";
import { Footer } from "../common/Footer";
import { Copyright } from "../common/Copyright";

export const Contact = () => {
  return (
    <>
      <InfoBanner />
      <Header />
      <MainBanner />
      <ItemsContainer style="max-w-[1000px] pr-[30px] pl-[30px]">
        <div className="flex justify-center">
          <SectionHeaders
            main="Wnat to get in touch? We'd love to hear from you. Here's how you can reach us"
            subHeading="GET IN TOUCH"
            style="text-center w-[400px]"
            subCss="text-[40px] font-ArialB mb-[15px]"
            mainCss="text-[16px] font-Arial leading-[1.3] mb-[70px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="flex flex-col justify-center space-y-[60px]">
            <div className="flex items-center">
              <img src={address} alt="addres" className="w-[40px]" />
              <p className="ml-[25px] text-[20px] font-Arial leading-0">
                Lorem Ipsum Dlor, Lorem Ipsum <br /> Sit amet
              </p>
            </div>

            <div className="flex items-center">
              <img src={email} alt="email" className="w-[40px]" />
              <p className="ml-[25px] text-[20px] font-Arial leading-0">
                johndoe@gmail.com
              </p>
            </div>

            <div className="flex items-center">
              <img src={phone} alt="phone" className="w-[40px]" />
              <p className="ml-[25px] text-[20px] font-Arial leading-0">
                +1 979 7863 999
              </p>
            </div>
          </div>

          <div className="border-2 rounded-[10px] border-[#E7E7E7] pt-[50px] pl-[50px] pr-[50px] pb-[20px]">
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="first_name" class="font-ArialB">
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label for="last_name" class="font-ArialB mb-2">
                    Email
                  </label>
                  <input
                    type="Email"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                    placeholder="John_Doe@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label for="company" class="font-ArialB mb-2">
                    Message
                  </label>
                  <input
                    type="text"
                    id="company"
                    class="bg-gray-50 h-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="text-white bg-[#00A7EE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[8px] w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </ItemsContainer>
      <TestimonialCard /> 
       <Consultation />
        <Footer />
        <Copyright />
    </>
  );
};
