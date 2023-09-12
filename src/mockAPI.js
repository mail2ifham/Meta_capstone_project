const fetchAPI = (selectedDate) => {
  return new Promise((resolve, reject) => {
    const data =
      localStorage.getItem("bookedTimeSlot") !== null ||
      localStorage.getItem("bookedTimeSlot") !== ""
        ? getItemFromLocalStorage()
        : createLocaleStorage();

        const bookedTimeSlots = data
          .filter((date) => selectedDate === date.date)
          .map((bookedTimeSlot) => bookedTimeSlot.time);

    setTimeout(() => {
      if (bookedTimeSlots.length < 12){
        resolve(bookedTimeSlots);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  createLocaleStorage();
  addItemToLocalStorage(formData);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

function createLocaleStorage() {
  if (localStorage.getItem("bookedTimeSlot") === null)
    localStorage.setItem("bookedTimeSlot", []);
}

function addItemToLocalStorage(formData) {
  if (localStorage.getItem("bookedTimeSlot") !== "") {
    const data = JSON.parse(localStorage.getItem("bookedTimeSlot"));
    localStorage.setItem("bookedTimeSlot", JSON.stringify([...data, formData]));
  } else {
    localStorage.setItem("bookedTimeSlot", JSON.stringify([formData]));
  }
}

function getItemFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("bookedTimeSlot"));
  return data;
}

export { fetchAPI, submitAPI };
