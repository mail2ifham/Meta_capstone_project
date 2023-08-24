import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatchDate }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [gust, setGust] = useState(1);
  const [isOccasionValid, setIsOccasionValid] = useState(true);
  const [isTimeValid, SetIsTimeValid] = useState(true);


  const timeRef = useRef();
  const occasionRef = useRef();

  // const navigate = useNavigate();

  //Occasion Array
  const occasions = ["Birthday", "Anniversary"];

  const isDateValid = !date || date === "";
  const isGustValid = gust >= 1 && gust <= 12;

  const validateForm = () => {
    let currentSelectedTime = timeRef.current.value;
    SetIsTimeValid(
      !!availableTimes.find((timeSlot) => timeSlot === currentSelectedTime)
    );

    let currentSelectedOccasion = occasionRef.current.value;
    setIsOccasionValid(
      !!occasions.find((occ) => occ === currentSelectedOccasion)
    );
  };

  // setIsOccasionValid(occasions.some(occ => occ === occasion));
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    dispatchDate({type: 'dateChange'})
  };

  return (
    <section>
      <div className="form-reservation-container">
        <h2>Book your reservation</h2>
        <form className="form-reservation" onSubmit={handleSubmit}>
          <label htmlFor="date">Choose Date</label>
          <input
            datainvalid={isDateValid ? "true" : "false"}
            type="date"
            id="date"
            className="reservation-date"
            onInvalid={(e) => e.preventDefault()}
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleDate}
          />
          {isDateValid && (
            <p className="errorMessage">Please Select the Valid Date</p>
          )}

          <label htmlFor="time">Choose Time</label>
          <select
            type="text"
            id="time"
            defaultValue="Select"
            ref={timeRef}
            datainvalid={!isTimeValid ? "true" : "false"}
          >
            {/* prettier-ignore */}
            <option value="Select" disabled> Select</option>
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>

          {!isTimeValid && (
            <p className="errorMessage">Please select the Valid time</p>
          )}

          <label htmlFor="number">Gust</label>
          <input
            type="number"
            id="number"
            datainvalid= {!isGustValid?"true": "false"}
            placeholder="Number of gust"
            min="1"
            max="12"
            onInvalid={(e) => e.preventDefault()}
            value={gust}
            onChange={(e) => setGust(e.target.value)}
          />
          {!isGustValid && (
            <p className="errorMessage">Number of Gust must be between 1-12</p>
          )}

          <label htmlFor="occasion">Occasion</label>
          <select
            type="select"
            id="occasion"
            datainvalid= {!isOccasionValid?"true": "false"}
            ref={occasionRef}
            defaultValue="Select"
            placeholder="Select"
          >
            <option value="Select" disabled>
              Select
            </option>
            {occasions.map((occasion) => (
              <option value={occasion} key={occasion}>
                {occasion}
              </option>
            ))}
          </select>

          {!isOccasionValid && (
            <p className="errorMessage">Please select the Occasion</p>
          )}
          <button type="submit">Reserve a table</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
