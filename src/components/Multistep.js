import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ItemsContainer } from "../common/ItemsContainer";
import {
  showForm,
  closeForm,
  showButton,
} from "../store/slices/MultistepSlice";
import img from "../assets/images/x-mark.png";
import check from "../assets/images/checked.png";

import { loginAsync } from "../store/slices/UserSlice";

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const selectedExtras = useSelector((state) => state.extras.selectedExtras);
  const selectedServices = useSelector(
    (state) => state.services.selectedServices
  );
  const [userError, setUserError] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const formState = useSelector((state) => state.form.show);

  const totalExtrasPrice = selectedExtras.reduce(
    (total, extra) => total + extra.price,
    0
  );
  const totalServicesPrice = selectedServices.reduce(
    (total, service) => total + service.price,
    0
  );

  const totalPrice = totalExtrasPrice + totalServicesPrice;

  console.log("Total Price:", totalPrice);

  useEffect(() => {
    setPaymentData((prevPaymentData) => ({
      ...prevPaymentData,
      amount: totalPrice,
    }));
  }, [selectedServices, selectedExtras]);

  console.log("selected extras", selectedExtras);
  console.log("selected services", selectedServices);

  const [step, setStep] = useState(1);

  const [paymentData, setPaymentData] = useState({
    userId: null,
    amount: null,
    appointmentId: null,
  });

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [userLoginData, setUserLoginData] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [addressData, setAddressData] = useState({
    user_id: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const [selectedExtrasInput, setSelectedExtras] = useState(selectedExtras);
  const [selectedServicesInput, setSelectedServices] =
    useState(selectedServices);

  const [formData, setFormData] = useState({
    userId: null,
    appointments: [
      {
        serviceId:
          Array.isArray(selectedServices) && selectedServices.length > 0
            ? selectedServices[0].id
            : null, // Assuming selectedServicesInput has an 'id' property
        addressId: null,
        extras: selectedExtras.map((extra) => extra.id), // Assuming extras have an 'id' property
      },
    ],
    appointmentDate: null,
  });

  useEffect(() => {
    console.log("extras", selectedExtrasInput);
    console.log("services", selectedServicesInput);
    // Update the form data when selectedServices or selectedExtras change
    setFormData((prevFormData) => ({
      ...prevFormData,
      appointments: [
        {
          ...prevFormData.appointments[0],
          serviceId:
            Array.isArray(selectedServices) && selectedServices.length > 0
              ? selectedServices[0].id
              : null,
          extras: selectedExtras.map((extra) => extra.id),
        },
      ],
    }));
  }, [selectedExtras, selectedServices]);

  const handleLogin = async () => {
    // Call your axios method with userData
    // dispatch(loginAsync(userData));
    axios
      .post("http://localhost:4000/user/register", userData)
      .then(function (response) {
        // console.log(response.data.userId);
        // setUserId(response.data.userId);
        setPaymentData((prevPaymentData) => ({
          ...prevPaymentData,
          userId: response.data.userId,
        }));
        setFormData((prevFormData) => ({
          ...prevFormData,
          userId: response.data.userId,
        }));
        setAddressData((prevAddressData) => ({
          ...prevAddressData,
          user_id: response.data.userId,
        }));
        setStep(2);
      })
      .catch(function (error) {
        console.log("this is the error", error.response.data.message);
        console.log(error);
        if (error.response.data.message === "User already exists") {
          setUserError(true);
        }
      });
  };

  const [loading, setLoading] = useState(false);
  const [execution, setExecutionState] = useState();

  const delay = async (ms) =>
    await new Promise((resolve) => setTimeout(resolve, ms));

  const goToNext = async () => {
    setLoading(true);
    try {
      const response1 = await axios.post(
        "http://localhost:4000/user/address",
        addressData
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        appointments: [
          {
            ...prevFormData.appointments[0],
            addressId: response1.data.addressId,
          },
        ],
      }));

      const formD = {
        ...formData,
        appointments: [
          {
            ...formData.appointments[0],
            addressId: response1.data.addressId,
          },
        ],
      };

      console.log("formddd", formD);

      await delay(2000);

      const response2 = await axios.post(
        "http://localhost:4000/appointment/select-service",
        formD
      );
      console.log("response", response2);
      setPaymentData((prevPaymentData) => ({
        ...prevPaymentData,
        appointmentId: response2.data.appointmentIds[0],
      }));
      setLoading(false);
      setStep(3);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (event) => {
    const appointmentDate = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      appointmentDate,
    }));
  };

  const pay = () => {
    console.log("payment", paymentData);
    axios
      .post("http://localhost:4000/payment/make-payment", paymentData)
      .then((response) => {
        setStep(4);
        setTimeout(() => {
          dispatch(closeForm());
        }, 2000);
        dispatch(showButton());
      })
      .catch((error) => console.log(error));
  };

  const closeModal = () => {
    dispatch(closeForm());
  };

  useEffect(() => {
    // Disable scrolling when the modal is open

    console.log("formmmmmm", formState);
    // if (formState) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }

    // Revert the scroll when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formState]);
  // console.log("form", formData);

  const loginUser = () => {
    axios
      .post("http://localhost:4000/user/login", userLoginData)
      .then(function (response) {
        // console.log(response.data.userId);
        // setUserId(response.data.userId);
        setPaymentData((prevPaymentData) => ({
          ...prevPaymentData,
          userId: response.data.userId,
        }));
        setFormData((prevFormData) => ({
          ...prevFormData,
          userId: response.data.userId,
        }));
        setAddressData((prevAddressData) => ({
          ...prevAddressData,
          user_id: response.data.userId,
        }));
        setStep(2);
      })
      .catch(function (error) {
        console.log("this is the error", error.response.data.message);
        console.log(error);
        if (error.response.data.message === "User already exists") {
          setUserError(true);
        }
      });
  };

  const previous = () => {
    setStep(step - 1);
  };

  const [allServices, setAllServices] = useState();
  const [allTypes, setAllTypes] = useState();
  const [allAddons, setAddons] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/service/services")
      .then((response) => setAllServices(response.data));
    axios
      .get("http://localhost:4000/type/getAlltypes")
      .then((response) => setAllTypes(response.data.type));
    axios
      .get("http://localhost:4000/extra/extras")
      .then((response) => setAddons(response.data));
  }, []);

  console.log("allll", allServices);
  console.log("allll types", allTypes);
  console.log("allll extras", allAddons);

  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [total, setTotal] = useState("");
  const [type, setType] = useState("");
  const [serv, setSer] = useState("");

  // Sample type and service prices from API response
  const typePrices = {
    // Replace these values with actual type prices from API
    type1: 30,
    type2: 40,
    type3: 50,
  };

  const servicePrices = {
    // Replace these values with actual service prices from API
    service1: 20,
    service2: 30,
    service3: 40,
  };

  // Calculate total price function
  const calculateTotalPrice = (r, b, t, s) => {
    const roomPrice = (r || numberOfRooms) * 48;
    const bathroomPrice = (b || numberOfBathrooms) * 72;

    var mainPrice =
      type === "Apartment"
        ? roomPrice + bathroomPrice
        : (roomPrice + bathroomPrice) * 1.2;
    var basePrice =
      type === "Apartment"
        ? roomPrice + bathroomPrice
        : (roomPrice + bathroomPrice) * 1.2;

    console.log("******serv**********", serv);
    if (serv === "Regular") {
      basePrice = basePrice * 1.125;
    } else if (serv === "Heavy") {
      basePrice = basePrice * 1.4;
    }

    if (type === "House" || type === "Apartment") {
      const totalPrice = basePrice;
      console.log(totalPrice.toFixed(2));
      setTotal(totalPrice.toFixed(2));
    } else if (type === "Move In/Out") {
      const MovePrice = mainPrice * 0.89;
      const totalPrice = (MovePrice * basePrice) / mainPrice;
      console.log(totalPrice.toFixed(2));
      setTotal(totalPrice.toFixed(2));
    } else if (type === "Rental Property") {
      const RentalPrice = mainPrice * 0.85;
      const totalPrice = (RentalPrice * basePrice) / mainPrice;
      console.log(totalPrice.toFixed(2));
      setTotal(totalPrice.toFixed(2));
    } else if (type === "Post Construction") {
      const RentalPrice = mainPrice * 1.97;
      const totalPrice = (RentalPrice * basePrice) / mainPrice;
      console.log(totalPrice.toFixed(2));
      setTotal(totalPrice.toFixed(2));
    }
  };

  // Event handlers for user input changes
  const handleRoomsChange = (event) => {
    setNumberOfRooms(parseInt(event.target.value, 10));
    calculateTotalPrice(parseInt(event.target.value, 10), null, null, null);
  };

  const handleBathroomsChange = (event) => {
    setNumberOfBathrooms(parseInt(event.target.value, 10));
    calculateTotalPrice(null, parseInt(event.target.value, 10), null, null);
  };

  const handleTypeChange = (event) => {
    console.log("e", event.target);
    const value = parseFloat(event.target.value);
    setSelectedType(value);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];

    // Access the title attribute of the selected option
    const title = selectedOption.getAttribute("title");

    // Now you can use the 'title' variable as needed
    setType(title);
    calculateTotalPrice();
  };

  const handleServiceChange = (event) => {
    const value = parseFloat(event.target.value);
    setSelectedService(value);

    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];

    // Access the title attribute of the selected option
    const title = selectedOption.getAttribute("title");

    // Now you can use the 'title' variable as needed
    setSer(title);
    calculateTotalPrice();
  };

  console.log("numberofroooms", numberOfRooms);
  console.log("numberofbathrooms", numberOfBathrooms);
  console.log("seletectedType", selectedType);
  console.log("selectedService", selectedService);

  console.log("toal", total);

  return (
    <>
      {formState ? (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-[#EDEDED] z-2 opacity-[0.85]"></div>
          <div className="absolute top-[-400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] max-w-[800px] w-[100%]">
            <ItemsContainer style="max-w-[1230px]">
              <div className="flex items-center justify-center h-screen w-full">
                <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
                  <div className="flex justify-end cursor-pointer">
                    <img
                      onClick={closeModal}
                      src={img}
                      className="w-[25px] mt-[-5px]"
                    />
                  </div>

                  {/* <h2 className="text-lg font-medium mb-4">Step {step} of 4</h2> */}
                  <div className="flex mb-4 justify-between pt-[15px]">
                    <div className="flex items-center justify-center">
                      <div
                        className={`${
                          step === 1
                            ? "bg-[#6A64F1] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#fff] flex justify-center items-center"
                            : "bg-[#DDE3E3] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#536387] flex justify-center items-center"
                        }`}
                      >
                        1
                      </div>

                      <div className="">
                        <p>Select Service</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className={`${
                          step === 2
                            ? "bg-[#6A64F1] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#fff] flex justify-center items-center"
                            : "bg-[#DDE3E3] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#536387] flex justify-center items-center"
                        }`}
                      >
                        2
                      </div>

                      <div className="">
                        <p>Login</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className={`${
                          step === 2
                            ? "bg-[#6A64F1] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#fff] flex justify-center items-center"
                            : "bg-[#DDE3E3] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#536387] flex justify-center items-center"
                        }`}
                      >
                        2
                      </div>

                      <div className="">
                        <p>Add Address</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className={`${
                          step === 3
                            ? "bg-[#6A64F1] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#fff] flex justify-center items-center"
                            : "bg-[#DDE3E3] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#536387] flex justify-center items-center"
                        }`}
                      >
                        3
                      </div>

                      <div className="">
                        <p>Details</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className={`${
                          step === 4
                            ? "bg-[#6A64F1] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#fff] flex justify-center items-center"
                            : "bg-[#DDE3E3] w-[36px] h-[36px] mr-[10px] rounded-[50%] text-[#536387] flex justify-center items-center"
                        }`}
                      >
                        4
                      </div>

                      <div className="">
                        <p>Confirmation</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] h-[1px] bg-[#DDE3EC] mb-4"></div>
                  {step === 1 ? (
                    <Step1
                      allServices={allServices}
                      allTypes={allTypes}
                      allAddons={allAddons}
                      handleRoomsChange={handleRoomsChange}
                      handleBathroomsChange={handleBathroomsChange}
                      handleTypeChange={handleTypeChange}
                      handleServiceChange={handleServiceChange}
                      calculateTotalPrice={calculateTotalPrice}
                      total={total}
                      step={step}
                      setStep={setStep}
                    />
                  ) : step === 2 ? (
                    <Step2
                      userData={userData}
                      setUserData={setUserData}
                      login={handleLogin}
                      userError={userError}
                      setLoginState={setLoginState}
                      loginState={loginState}
                      userLoginData={userLoginData}
                      setUserLoginData={setUserLoginData}
                      loginUser={loginUser}
                    />
                  ) : step === 3 ? (
                    <Step3
                      services={selectedServices}
                      extras={selectedExtras}
                      setAddressData={setAddressData}
                      // handleAddress={handleAddress}
                      addressData={addressData}
                      handleDateChange={handleDateChange}
                      goToNext={goToNext}
                      loading={loading}
                    />
                  ) : step === 4 ? (
                    <Step4
                      pay={pay}
                      amount={totalPrice}
                      services={selectedServices}
                      extras={selectedExtras}
                      previous={previous}
                    />
                  ) : (
                    <Step5 />
                  )}

                  {/* <div className="flex justify-between mt-6">
                  {step > 1 && (
                    <button
                      className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                      // onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                  {step < 2 ||
                    (step < 3 && (
                      <button
                        className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                        // onClick={handleNext}
                      >
                        Next
                      </button>
                    ))}
                </div> */}
                </div>
              </div>
            </ItemsContainer>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const Step1 = ({
  allServices,
  allTypes,
  allAddons,
  handleServiceChange,
  handleBathroomsChange,
  handleRoomsChange,
  handleTypeChange,
  calculateTotalPrice,
  total,
  step = { step },
  setStep = { setStep },
}) => (
  <>
    {" "}
    <div className="flex flex-col">
      <div className="flex justify-between space-x-[20px]">
        <div className="flex flex-1 flex-col">
          <label>Select Service</label>
          <select
            class="w-full bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            onChange={handleServiceChange}
          >
            {Array.isArray(allServices) && allServices.length > 0
              ? allServices.map((x) => {
                  return (
                    <option
                      x={x.service_id}
                      title={x.service_name}
                      value={x.price}
                    >
                      {x.service_name}
                    </option>
                  );
                })
              : null}
          </select>
        </div>

        <div className="flex flex-1 flex-col">
          <label>Select Type</label>
          <select
            class="w-full bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            onChange={handleTypeChange}
          >
            {Array.isArray(allTypes) && allTypes.length > 0
              ? allTypes.map((x) => {
                  return (
                    <option x={x.id} title={x.type} value={x.price}>
                      {x.type}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
      </div>

      <div className="flex justify-between space-x-[20px] mt-[20px]">
        <div className="flex flex-1 flex-col">
          <label>Number of rooms</label>
          <input
            class="w-full bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            type="text"
            onChange={handleRoomsChange}
          />
        </div>

        <div className="flex flex-1 flex-col">
          <label>Number of bathrooms</label>
          <input
            class="w-full bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            type="text"
            onChange={handleBathroomsChange}
          />
        </div>
      </div>

      <div className="flex justify-between space-x-[20px] mt-[20px]">
        <div className="flex flex-1 flex-col">
          <label>Select Addons</label>
          <select class="w-full bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2">
            {Array.isArray(allAddons) && allAddons.length > 0
              ? allAddons.map((x) => {
                  return <option x={x.extra_id}>{x.extra_name}</option>;
                })
              : null}
          </select>
        </div>
      </div>

      <p className="mt-[20px]" onClick={() => calculateTotalPrice()}>
        Total Price : {total}
      </p>
    </div>
    <div className="flex justify-end">
      <button
        className="mt-[20px] text-black bg-[#EDEDED] hover:bg-[#0142E8] focus:ring-4 focus:outline-none hover:text-[white] focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
        onClick={() => setStep(step + 1)}
      >
        Next
      </button>
    </div>
  </>
);

const Step2 = ({
  userData,
  setUserData,
  login,
  userError,
  loginState,
  userLoginData,
  setUserLoginData,
  loginUser,
  setLoginState,
}) => (
  <div>
    {loginState ? (
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          // Manually trigger the form validation
          if (e.target.checkValidity()) {
            // If the form is valid, proceed with your logic (e.g., login())
            loginUser();
          }
        }}
      >
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="bg-[#FFF] border border-[#DDE3EC] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userLoginData.email}
            onChange={(e) =>
              setUserLoginData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
            required={true}
          />
        </div>

        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password"
          >
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userLoginData.password}
            onChange={(e) =>
              setUserLoginData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-[10px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
        />
      </form>
    ) : (
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          // Manually trigger the form validation
          if (e.target.checkValidity()) {
            // If the form is valid, proceed with your logic (e.g., login())
            login();
          }
        }}
      >
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="name"
          >
            Username *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userData.username}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                username: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userData.email}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="phone"
          >
            Phone *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userData.phone_no}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                phone_no: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password"
          >
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            value={userData.password}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            required={true}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-[10px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[5px] sm:w-auto px-5 py-2.5 text-center"
        />
      </form>
    )}

    {userError ? (
      <>
        <div className="flex flex-col mt-[15px]">
          <p>
            User Already Exist Please{" "}
            <buton
              className="underline text-[#0000FF] cursor-pointer"
              onClick={() => setLoginState(true)}
            >
              Login
            </buton>
          </p>
        </div>
      </>
    ) : null}
  </div>
);

const Step3 = (props) => {
  return (
    <div>
      <div className="mb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            // Manually trigger the form validation
            if (e.target.checkValidity()) {
              // If the form is valid, proceed with your logic (e.g., login())
              props.goToNext();
            }
          }}
        >
          <div className="flex flex-col">
            <div className="flex justify-between space-x-[20px]">
              <div className="flex-1">
                <label className="mt-[15px]" htmlFor="address">
                  Address Line 1 *
                </label>
                <input
                  className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                  type="text"
                  id="address"
                  name="address_line1"
                  value={props.addressData.address_line1}
                  placeholder="address line 1"
                  onChange={(e) =>
                    props.setAddressData((prevData) => ({
                      ...prevData,
                      address_line1: e.target.value,
                    }))
                  }
                  required={true}
                />
              </div>

              <div className="flex-1">
                <label className="mt-[15px]" htmlFor="address">
                  Address Line 2
                </label>
                <input
                  className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                  type="text"
                  id="address"
                  name="address_line2"
                  value={props.addressData.address_line2}
                  placeholder="address line 2"
                  onChange={(e) =>
                    props.setAddressData((prevData) => ({
                      ...prevData,
                      address_line2: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex justify-between mt-[18px] space-x-[20px]">
              <div className="flex-1">
                <label className="mt-[15px]" htmlFor="address">
                  State *
                </label>
                <input
                  className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                  type="text"
                  id="address"
                  name="state"
                  value={props.addressData.state}
                  placeholder="state"
                  onChange={(e) =>
                    props.setAddressData((prevData) => ({
                      ...prevData,
                      state: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex-1">
                <label className="mt-[15px]" htmlFor="address">
                  City *
                </label>
                <input
                  className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                  type="text"
                  id="address"
                  name="city"
                  value={props.addressData.city}
                  placeholder="city"
                  onChange={(e) =>
                    props.setAddressData((prevData) => ({
                      ...prevData,
                      city: e.target.value,
                    }))
                  }
                  required={true}
                />
              </div>
            </div>

            <div className="flex justify-between mt-[18px] space-x-[20px]">
              <div className="flex-1">
                <label className="mt-[15px]" htmlFor="address">
                  Zip Code *
                </label>
                <input
                  type="text"
                  id="address"
                  name="zip_code"
                  className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                  value={props.addressData.zip_code}
                  placeholder="zip"
                  onChange={(e) =>
                    props.setAddressData((prevData) => ({
                      ...prevData,
                      zip_code: e.target.value,
                    }))
                  }
                  required={true}
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col">
                  <label htmlFor="appointmentDate">
                    Choose Appointment Date:
                  </label>
                  <input
                    className="bg-[#FFF] border border-[#DDE3EC] text-[#536387] text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                    type="datetime-local"
                    id="appointmentDate"
                    onChange={props.handleDateChange}
                    required={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            {/* <input
              type="submit"
              value="Submit"
              className="mt-[20px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
              onClick={props.handleAddress}
            />  */}

            <input
              type="submit"
              value={props.loading ? "Loading ... " : "Next"}
              className="mt-[20px] text-black bg-[#EDEDED] hover:bg-[#0142E8] focus:ring-4 focus:outline-none hover:text-[white] focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const Step4 = (props) => (
  <div>
    <div>
      <h3 className="text-[20px] mt-[10px] mb-[10px]">Your Service :</h3>
      {Array.isArray(props.services) && props.services.length > 0
        ? props.services.map((x) => (
            <h4
              className="text-[20px] font-bold leading-[34px] pb-[10px]"
              key={x.id}
              value={x.id}
            >
              {x.name}
            </h4>
          ))
        : null}

      <h3 className="mb-[10px] mt-[10px] text-[20px]">Extras Selected:</h3>

      <ol
        className="list-disc pl-[20px] space-y-[10px]"
        name="extras"
        id="extras"
      >
        {Array.isArray(props.extras) && props.extras.length > 0
          ? props.extras.map((x) => (
              <li key={x.id} value={x.id}>
                {x.name}
              </li>
            ))
          : null}
      </ol>
      <h3 className="mb-[5px] mt-[30px] border border-[#000] text-[18px] rounded-[5px] flex justify-between px-[8px] py-[10px]">
        Total Amount: <p>{"$" + props.amount}</p>
      </h3>

      <div className="flex justify-between">
        <button
          className="mt-[20px] text-black bg-[#EDEDED] hover:bg-[#0142E8] focus:ring-4 focus:outline-none hover:text-[white] focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
          onClick={() => props.previous()}
        >
          Previous
        </button>

        <button
          className="mt-[20px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[8px] sm:w-auto px-5 py-2.5 text-center"
          onClick={() => props.pay()}
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
);

const Step5 = () => (
  <div className="flex flex-col justify-center items-center pt-[80px] pb-[80px]">
    <img src={check} className="w-[64px]" />
    <h3 className="text-[25px] mt-[10px]">
      Your appointment has been successfully submitted
    </h3>
  </div>
);

export default MultiStepForm;
