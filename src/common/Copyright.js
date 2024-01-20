import { ItemsContainer } from "./ItemsContainer"

export const Copyright = () => {
    return(
        <>
        <div className="bg-[#00417A]">
        <ItemsContainer style="max-w-[1230px] pr-[30px] pl-[30px]">
        <div className="grid grid-cols-2 py-[25px]">
            <div>
                <p className="text-[14px] text-[#fff]">Copyright © 2024 Doctor Clean. All rights reserved. </p>
            </div>

            <div className="flex justify-end items-center space-x-[40px]">   
                <p className="text-[14px] text-[#fff]">Terms & Conditions</p>
                <span className="bg-[#fff] w-[1px] h-[10px]"></span>
                <p className="text-[14px] text-[#fff]">Privacy Policy, & Accessibility</p>
            </div>
        </div>
        </ItemsContainer>
        </div>
        </>
    )
}