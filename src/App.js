import "./App.css";
import Confirmation from "./component/Confirmation";
import Footer from "./component/Footer";
import BookingForm from "./component/BookingForm";
import Header from "./component/Header";
import Main from "./component/Main";
import PageNotFound from "./component/PageNotFound";
import ReservationLayout from "./component/ReservationLayout";
import UnderConstruction from "./component/UnderConstruction";
import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";

function App() {
  const [availableTimes, dispatchDate] = useReducer(updateTimes, initializeTimes());

  function updateTimes(availableTimes, action) {
    if (action.type === 'dateChange') {
      return availableTimes;
    }

    return;
  }
  function initializeTimes() {
   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="reservations" element={<ReservationLayout />}>
          <Route
            index
            element={<BookingForm availableTimes={availableTimes} dispatchDate={dispatchDate}/>}
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
