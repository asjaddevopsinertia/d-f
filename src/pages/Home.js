import { InfoBanner } from "../common/InfoBanner";
import { MainBanner } from "../common/MainBanner";
import { ExtrasCard } from "../common/cards/ExtrasCard";
import { TrustCard } from "../common/cards/TrustCard";
import { WorkCard } from "../common/cards/WorkCard";
import { ServicesCard } from "../common/cards/ServicesCard";
import { TestimonialCard } from "../common/cards/TestimonialCard";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Copyright } from "../common/Copyright";
import { Consultation } from "../common/ConsultationSec";
import MultiStepForm from "../components/Multistep";
import { ItemsContainer } from "../common/ItemsContainer";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../store/slices/MultistepSlice";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Home = () => {
  const dispatch = useDispatch();

  const selectedServices = useSelector(
    (state) => state.services.selectedServices
  );
  const buttonState = useSelector((state) => state.form.buttonState);

  const show = () => {
    Array.isArray(selectedServices) && selectedServices.length > 0 ? dispatch(showForm()) : enqueueSnackbar('No Service Selected')
  };

  return (
    <>
      <SnackbarProvider variant="error"/>
      <InfoBanner />
      <Header />
      <MainBanner />
      <TrustCard />
      <WorkCard />
      

      <div className="relative">
      <ServicesCard />
      <ExtrasCard />
        <MultiStepForm />
      </div>
      
      
      <TestimonialCard />
      <Consultation />
      <Footer />
      <Copyright />
    </>
  );
};
