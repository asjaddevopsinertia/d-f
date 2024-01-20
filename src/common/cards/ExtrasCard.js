import { ItemsContainer } from "../ItemsContainer";
import { SectionHeaders } from "../SectionHeaders";
import img1 from "../../assets/images/sec-5-icon-1.png";
import img2 from "../../assets/images/sec-5-icon-2.png";
import img3 from "../../assets/images/sec-5-icon-3.png";
import img4 from "../../assets/images/sec-5-icon-4.png";
import img5 from "../../assets/images/sec-5-icon-5.png";
import img6 from "../../assets/images/sec-5-icon-6.png";
import img7 from "../../assets/images/sec-5-icon-7.png";
import img8 from "../../assets/images/sec-5-icon-8.png";
import img9 from "../../assets/images/sec-5-icon-9.png";
import img10 from "../../assets/images/sec-5-icon-10.png";
import img11 from "../../assets/images/sec-5-icon-11.png";
import img12 from "../../assets/images/sec-5-icon-12.png";
import img13 from "../../assets/images/sec-5-icon-13.png";
import img14 from "../../assets/images/sec-5-icon-14.png";
import img15 from "../../assets/images/sec-5-icon-15.png";
import img16 from "../../assets/images/sec-5-icon-16.png";
import img17 from "../../assets/images/sec-5-icon-17.png";
import img18 from "../../assets/images/sec-5-icon-18.png";
import img19 from "../../assets/images/sec-5-icon-19.png";
import img20 from "../../assets/images/sec-5-icon-20.png";
import info from '../../assets/images/info.png';
import houseImg from '../../assets/images/sec-5-before.png'
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedExtra,  selectExtra, unselectExtra } from "../../store/slices/ExtrasSlice";
import axios from 'axios'
import { useEffect, useState } from "react";

export const ExtrasCard = () => {
  const dispatch = useDispatch();
  const selectedExtras = useSelector((state) => state.extras.selectedExtras);

  const [extras, setExtras] = useState([])


  useEffect(() => {
    axios
      .get("http://localhost:4000/extra/extras")
      .then(function (response) {
          setExtras(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])


  console.log("selected", selectedExtras)

  const handleSelectService = (id, name, price) => {
    dispatch(selectExtra({ id, name, price }));
  };

  const handleUnselectService = (id) => {
    dispatch(unselectExtra({ id }));
  };

  const handleClearSelectedServices = () => {
    dispatch(clearSelectedExtra());
  };
  return (
    <>
    <div id="extra-cards" className="relative">
      <div className="absolute z-[-1] right-[0] bottom-[-100px]">
        <img src={houseImg} />
      </div>
      <ItemsContainer style="max-w-[1500px] pr-[30px] pl-[30px]">
        <SectionHeaders
          main="Select any extras needed"
          subHeading="Extras"
          style="w-[620px]"
          subCss="text-[40px] font-Arial mb-[0px]"
          mainCss="text-[20px] font-Arial mb-[30px]"
        />

        <div class="grid grid-cols-7 gap-6 text-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-5 xmd:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {Array.isArray(extras) && extras.length > 0 ? extras.map((x, index) => {
             const isSelected = selectedExtras.some((extra) => extra.id === x.extra_id);
            

            return(
              <div onClick={() => (isSelected ? handleUnselectService(x.extra_id) : handleSelectService(x.extra_id, x.extra_name, parseInt(x.price)))}>
              <div className={`border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center cursor-pointer ${isSelected ? 'bg-[#FFEA3A]' : ''}`}>
                <img src={img1} />
              </div>
              <div className="flex items-start mt-[24px] justify-center">
                <h3 className="text-[17px] leading-none">{x.extra_name}</h3>
                <img src={info} className="mt-[1px] ml-[5px]"/>
              </div>
            </div>
            )
          }) : ''}
          {/* <div onClick = {() => handleSelectService(19, "Heavy Duty" , 100)}>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img1} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Heavy Duty</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div onClick = {() => handleSelectService(20, "Heavy Duty" , 1000)}>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img2} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Heavy Duty</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div onClick = {() => handleSelectService(2, "Use Eco-Friendly Green Products" , 30)}>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img3} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Use Eco-Friendly <br /> Green Products</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div onClick = {() => handleSelectService(3, "Use Eco-Friendly Green Products" , 40)}>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img4} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Inside Fridge</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img5} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Inside Oven</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img6} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Clean Kitchen Hood</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img7} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Pet(s)</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img8} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Clean Fireplace</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img9} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Interior Walls</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img10} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Clean Interior Windows</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img11} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Detail Window Bind</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img12} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">Detail Baseboards</h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img13} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">CNEW! - Clean & <br /> Refresh Mattress</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img14} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">
                Inside Kitchen <br />
                Cabinets (Empty)
              </h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img15} />
            </div>
            <div>
              <h3 className="mt-[24px] text-[17px]">
                Inside Kitchen <br />
                Cabinets (Full)
              </h3>
              <img></img>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img16} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none"> Wash 1 Sink Full <br /> of Dishes</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img17} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">Inside Washer <br /> & Dryer</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img18} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">  NEW - Mold/Mildew <br />
                Shower+Tub Removel <br />& Treatment</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img19} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">  Disinfection & <br />
                Sanitization</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
            
          </div>

          <div>
            <div className="border-2 rounded-[8px] border-[#FFEA3A] pt-[22px] pr-[50px] pl-[50px] pb-[22px] flex justify-center">
              <img src={img20} />
            </div>
            <div className="flex items-start mt-[24px] justify-center">
              <h3 className="text-[17px] leading-none">  Ozone Deodorizer</h3>
              <img src={info} className="mt-[1px] ml-[5px]"/>
            </div>
          </div> */}
        </div>
      </ItemsContainer>
      </div>
    </>
  );
};
