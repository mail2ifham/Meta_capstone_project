import "./App.css";
import Confirmation from "./component/Booking/Confirmation";
import Footer from "./component/Footer/Footer";
import BookingForm from "./component/Booking/BookingForm";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import ReservationLayout from "./component/ReservationLayout/ReservationLayout";
import UnderConstruction from "./component/UnderConstruction/UnderConstruction";
import { Route, Routes } from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";

function App() {
  // pass fetch error to date field error
  const [dateFetchError, setDateFetchError] = useState(null);

  const [availableTimes, dispatchDate] = useReducer(
    updateTimes,
    initializeTimes
  );

  const navigate = useNavigate();

  function updateTimes(availableTimes, action) {
    switch (action.type) {
      case "DATE_CHANGE":
        setDateFetchError(null);
        return (availableTimes = action.payload);

      case "INITIAL_VALUE":
        setDateFetchError(null);
        return (availableTimes = action.payload);

      case "ERROR":
        return setDateFetchError(action.payload);
      default:
        return availableTimes;
    }
  }

  async function fetchDataByDate(selectedDate) {
    const initialTimeSlots = GenerateTimeSlots(selectedDate);
    try {
      let response = await fetchAPI(selectedDate);

      const availableTimes =
        response.length !== 0
          ? initialTimeSlots.filter(
              (initialTimeSlot) =>
                !response.find((res) => res === initialTimeSlot)
            )
          : initialTimeSlots;

      dispatchDate({ type: "DATE_CHANGE", payload: availableTimes });
      return response;
    } catch (error) {
      dispatchDate({ type: "ERROR", payload: error.message });
      console.log(error.message);
    }
  }

  //Available time calculation
  function GenerateTimeSlots(selectedDate) {
    const allAvailableTimeSlots = [
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];
  
    const today = new Date(new Date().toISOString().split("T")[0]);
    const currentHour = `${new Date().getHours()}:00`; //get current Hours with '00' min
    const currentHourIndex = allAvailableTimeSlots.indexOf(currentHour);
    const availableTimeSlots =
      new Date(selectedDate).getTime() === today.getTime()
        ? allAvailableTimeSlots.slice(currentHourIndex + 1)
        : allAvailableTimeSlots;

    return availableTimeSlots;
  }

  async function initializeTimes() {
    const today = new Date().toISOString().split("T")[0];
    const initialTimeSlots = GenerateTimeSlots(today);

    try {
      const response = await fetchAPI(today);
      const availableTimes =
        response.length !== 0
          ? initialTimeSlots.filter(
              (initialTimeSlot) =>
                !response.find((res) => res === initialTimeSlot)
            )
          : initialTimeSlots;

      dispatchDate({ type: "INITIAL_VALUE", payload: availableTimes });
    } catch (error) {
      dispatchDate({ type: "ERROR", payload: error.message });
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  async function submitData(formData) {
    try {
      const response = await submitAPI(formData);
      if (response) navigate("reservations/confirm");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="reservations" element={<ReservationLayout />}>
          <Route
            index
            element={
              <BookingForm
                title="Book your reservation"
                availableTimes={availableTimes}
                dispatchDate={dispatchDate}
                submitData={submitData}
                fetchDataByDate={fetchDataByDate}
                dateFetchError={dateFetchError}
              />
            }
          />
          <Route path="confirm" element={<Confirmation />} />
        </Route>
        <Route path="underConstruction" element={<UnderConstruction />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
