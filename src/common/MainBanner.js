import banner from "../assets/images/banner.jpg";
import phone from "../assets/images/phone.png";

export const MainBanner = () => {
  const dynamicStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="h-[650px] relative bg-cover" style={dynamicStyle}>
        <div className="flex flex-col justify-center items-center h-[100%]">
          <div className="rounded-[20px] pr-[40px] pl-[40px] pb-[6px] pt-[6px]">
            <span className="text-[16px] text-[#001837] font-ArialB text-white">
              EXPERIENCE HASSLE FREE CLEANING
            </span>
          </div>

          <div className="">
            <h1 className="text-[48px] text-[#fff] mt-0 mb-0 font-Arial text-center leading-none mt-[35px] mb-[5px]">
              The Best Commercial & Residential
            </h1>
            <h1 className="text-[48px] text-[#fff] mt-0 mb-0 font-Arial text-center leading-none mb-[35px]">
              Cleaning Service
            </h1>
          </div>

          <div className="">
            <p className="text-[20px] text-[#fff] font-Arial mt-0 mb-0 text-center">
              {" "}
              We can't wait to help you refresh your space. <br /> Get an instant quote by clicking the button below
            </p>
          </div>

          <div className="flex justify-center items-center mt-[50px]">
            <button className="bg-[#fff] text-[16px] font-ArialB pr-[25px] pl-[25px] pt-[15px] pb-[15px] rounded-[5px] mr-[30px]">BOOK YOUR APPOINTMENT</button>
            <div className="flex">
                <a href="tel:+979 7863 999"><img className="object-contain" src={phone} alt="phone" /></a>
                <div className="flex flex-col ml-[20px]">
                    <p className="text-[20px] font-ArialB text-[#fff]">CALL US NOW</p>
                    <p className="text-[20px] font-ArialB text-[#fff]">979 7863 999</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
