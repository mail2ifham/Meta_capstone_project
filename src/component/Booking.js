import "../styles/reservation.css";
import Confirmation from "./Confirmation";
import ReservationLayout from "./ReservationLayout";
import BookingForm from "./BookingForm";


const Booking = () => {

  return (
    <>
      <ReservationLayout />
      <BookingForm  />
      <Confirmation />
      
    </>
  );
};

export default Booking;
