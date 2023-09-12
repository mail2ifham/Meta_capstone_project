import React, { useState } from "react";
import "./Booking.css";

function BookingForm({
  title,
  availableTimes,
  fetchDataByDate,
  submitData,
  dateFetchError,
}) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("select");
  const [gust, setGust] = useState("1");
  const [occasion, setOccasion] = useState("Select");
  const [isOccasionValid, setIsOccasionValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);

  const ERROR_MESSAGE = {
    date: "Please Select the Valid Date",
    time: "Please select the valid time",
    gust: "Number of Gust must be between 1-12",
    occasion: "Please select the Occasion",
    fetch: dateFetchError,
  };

  //Occasion Array
  const occasions = ["Birthday", "Anniversary"];

  const isDateValid = dateFetchError || !date || date === "";
  const isGustValid = gust >= 1 && gust <= 12;

  function handleDate(e) {
    setDate(e.target.value);
    fetchDataByDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsOccasionValid(occasions.some((occ) => occ === occasion));
    setIsTimeValid(availableTimes.some((timeSlot) => timeSlot === time));

    if (!isDateValid && isTimeValid && isGustValid && isOccasionValid) {
      // submitData({
      //   date,
      //   time,
      //   gust,
      //   occasion,
      // });
    }
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
            value={date}
            required
            min={new Date().toISOString().split("T")[0]}
          />
          {isDateValid && <p className="errorMessage">{ERROR_MESSAGE.date}</p>}

          <label htmlFor="time">Choose Time</label>
          <select
            type="select"
            id="time"
            required
            datainvalid={!isTimeValid || dateFetchError ? "true" : "false"}
            value={time}
            onChange={(e) => setTime(e.target.value)}
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

          {(!isTimeValid ||dateFetchError) && (
            <p className="errorMessage" >
              {dateFetchError ? ERROR_MESSAGE.fetch : ERROR_MESSAGE.time}
            </p>
          )}

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
          />
          {!isGustValid && <p className="errorMessage">{ERROR_MESSAGE.gust}</p>}

          <label htmlFor="occasion">Occasion</label>
          <select
            type="select"
            id="occasion"
            required
            datainvalid={!isOccasionValid ? "true" : "false"}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Select">Select</option>
            {occasions.map((occasion) => (
              <option data-testid={`occasion-type-${occasion}`} key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
          {!isOccasionValid && (
            <p className="errorMessage">{ERROR_MESSAGE.occasion}</p>
          )}

          <button type="submit">Reserve a table</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
