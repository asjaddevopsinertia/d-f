import { ItemsContainer } from "./ItemsContainer"
import img from '../assets/images/sec-7-img.png'

export const Consultation = () => {
    return(
        <>
          <div className="bg-[#FFEA3A]">
            <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
                <div className="grid grid-cols-2 pt-[110px] pb-[110px] justify-center align-center xmd:grid-cols-1">
                    <div className="relative">
                        <h1 className="text-[40px]">How can we take care of you?</h1>
                        <p className="text-[22px]">Tell us about your home, and get a price in 60 seconds.</p>
                        <div className="absolute right-[-100px] top-[-15px] lg:hidden">
                            <img src={img} />
                        </div>
                    </div>

                    <div className="text-right pt-[15px]">
                        <button className="text-[20px] text-[#fff] bg-[#0039DE] py-[20px] px-[85px] rounded-[5px]">BOOK AN APPOINTMENT</button>
                    </div>
                </div>
            </ItemsContainer>
        </div>
        </>
    )
}