import React, { useState } from "react";
import "./Booking.css";
import {CgSpinner} from "react-icons/cg"

function BookingForm({
  title,
  availableTimes,
  fetchDataByDate,
  submitData,
  dateFetchError,
  isTimeLoading,
  isSubmitting
}) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("select");
  const [gust, setGust] = useState("1");
  const [occasion, setOccasion] = useState("Select");
  const [error, setError] = useState({});

  //Occasion Array
  const occasions = ["Birthday", "Anniversary"];

  const isDateValid =  !date || date === "";
  const isGustValid = gust >= 1 && gust <= 12;

  function handleDate(e) {
    setDate(e.target.value);
    fetchDataByDate(e.target.value);
  }

  function validate() {
    const validateError = {};

    if (!occasions.some((occ) => occ === occasion))
      validateError.occasion = "Please select the Occasion";

    if (!availableTimes.some((timeSlot) => timeSlot === time))
      validateError.time = "Please select the valid time";

    setError(validateError);

    return  Object.keys(validateError).length === 0 ?true:false;
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (validate() && !isDateValid && isGustValid){
            submitData({
        date,
        time,
        gust,
        occasion,
      });
    };
  }

  return (
    <section>
      <div className="form-reservation-container">
        <h2>{title}</h2>

        <form className="form-reservation" onSubmit={handleSubmit}>
          <label htmlFor="date">Choose Date</label>
          <input
            datainvalid={isDateValid ? "true" : "false"}
            type="date"
            id="date"
            className="reservation-date"
            onInvalid={(e) => e.preventDefault()}
            onChange={handleDate}
            aria-label="select the desire date"
            value={date}
            required
            min={new Date().toISOString().split("T")[0]}
          />
          {isDateValid && <p className="errorMessage">Please Select the Valid Date</p>}

          <label htmlFor="time">Choose Time</label>
          <select
            type="select"
            id="time"
            required
            datainvalid={!!error.time || dateFetchError ? "true" : "false"}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="select the desire time to book your table"
          >
            {/* prettier-ignore */}
            <option value="Select" > Select</option>
            {typeof availableTimes === "object" &&
              availableTimes.map((time) => (
                <option data-testid={`time-slot-${time}`} key={time}>
                  {time}
                </option>
              ))}
          </select>

          {
            <p className="errorMessage">
              {isTimeLoading ? "Loading..." : (dateFetchError ? dateFetchError : error.time)}
            </p>
          }

          <label htmlFor="number">Gust</label>
          <input
            type="number"
            id="number"
            required
            datainvalid={!isGustValid ? "true" : "false"}
            placeholder="Number of gust"
            min="1"
            max="12"
            onInvalid={(e) => e.preventDefault()}
            value={gust}
            onChange={(e) => setGust(e.target.value)}
            aria-label="Type number of Gust "
          />
          {!isGustValid && <p className="errorMessage">"Please select the Occasion"</p>}

          <label htmlFor="occasion">Occasion</label>
          <select
            type="select"
            id="occasion"
            required
            datainvalid={!!error.occasion ? "true" : "false"}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-label=" select one of the occasion"
          >
            <option value="Select" disabled>
              Select
            </option>
            {occasions.map((occasion) => (
              <option data-testid={`occasion-type-${occasion}`} key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
          <p className="errorMessage">{error.occasion}</p>

          <button type="submit">{isSubmitting ? <CgSpinner className="spinner" /> :"Reserve a table"}</button>

        </form>
      </div>
    </section>
  );
}

export default BookingForm;
