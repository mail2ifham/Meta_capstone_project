import React from "react";

function Confirmation() {
  return (
    <section>

      <div className="confirmation-container">
        <h2>Confirmation</h2>
        <form className="confirmation-form">
          <label htmlFor="fName">First Name</label>
          <input type="text" name="fName" />

          <label htmlFor="lName">Last Name</label>
          <input type="text" name="lName" />
          <button>Confirm</button>
        </form>

      </div>
    </section>
  );
}

export default Confirmation;
