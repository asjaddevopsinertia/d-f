import { InfoBanner } from "../common/InfoBanner"
import { MainBanner } from "../common/MainBanner"
import { ExtrasCard } from "../common/cards/ExtrasCard"
import { ServicesCard } from "../common/cards/ServicesCard"
import { TestimonialCard } from "../common/cards/TestimonialCard"
import { Header } from "../common/Header"
import { Footer } from "../common/Footer"
import { Copyright } from "../common/Copyright"
import { Consultation } from "../common/ConsultationSec"

export const Services = () => {
    return(
        <>
        <InfoBanner />
        <Header />
        <MainBanner />
        <ServicesCard />
        <ExtrasCard />
        <TestimonialCard /> 
        <Consultation />
        <Footer />
        <Copyright />
        </>
    )
}