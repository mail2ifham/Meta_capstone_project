import Confirmation from "./Confirmation";
import ReservationLayout from "../ReservationLayout/ReservationLayout";
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
