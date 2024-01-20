import { ItemsContainer } from "../ItemsContainer"
import { SectionHeaders } from "../SectionHeaders"
import { Gallery } from "../carousel"

export const TestimonialCard = () => {
    return(
        <>
        <div className="bg-[#F6F6F6] mt-[100px] pb-[45px]">
        <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
        <div className="flex justify-center">
          <SectionHeaders
            main={`Trusted by thousand of people & companies.`}
            subHeading="TESTIONIALS"
            style="text-center w-[520px]"
            subCss="text-[16px] font-ArialB mb-[25px]"
            mainCss="text-[40px] font-Arial leading-[1.3] mb-[55px]"
          />
        </div>

        <Gallery />
        </ItemsContainer>
        </div>
        </>
    )
}