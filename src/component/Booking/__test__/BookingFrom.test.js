import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../BookingForm";

const availableTimes = ["18:00", "18:30", "19:00", "19:30"];
const today = new Date().toISOString().split("T")[0];
const mockedFunction = jest.fn();
const dateFetchError = "No available times for the selected date."

describe("BookingForm", () => {
  it("should render heading", () => {
    render(<BookingForm title="booking" availableTimes={availableTimes} />);
    const headingElement = screen.getByRole("heading", { name: /booking/i });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render date input field", async () => {
    render(
      <BookingForm
        title="booking"
        availableTimes={availableTimes}
        fetchDataByDate={jest.fn()}
        submitData={jest.fn()}
        dateFetchError={""}
      />
    );
    // should render input felid as a date type
    const inputDateElement = screen.getByLabelText(/choose date/i);
    expect(inputDateElement).toHaveAttribute("type", "date");

    // should render valid date
    fireEvent.change(inputDateElement, { target: { value: today } });
    expect(inputDateElement).toHaveValue(today);
    // should render error message  when invalid date entered
    fireEvent.change(inputDateElement, { target: { value: "2023-08-mm" } });
    const paragraphErrorElement = await screen.findByText(
      /Please Select the Valid Date/
    );
    expect(paragraphErrorElement).toBeInTheDocument();
  });

  it("should render time input field", async () => {
    render(
      <BookingForm
        title="booking"
        availableTimes={availableTimes}
        fetchDataByDate={jest.fn()}
        submitData={jest.fn()}
        dateFetchError={dateFetchError}
      />
    );
    // should render input felid as a select type
    const inputTimeElement = screen.getByLabelText(/choose time/i);
    expect(inputTimeElement).toHaveAttribute("type", "select");

    // should render valid times
    fireEvent.change(inputTimeElement, { target: { value: "18:00" } });
    expect(inputTimeElement).toHaveValue(availableTimes[0]);

    // should render multiple time slots
    const optionElement = await screen.findAllByTestId(/time-slot-/i);
    expect(optionElement.length).toBe(4);

    // should render error message  when invalid time entered
    fireEvent.change(inputTimeElement, { target: { value: "Select" } });
    const ButtonElement = screen.getByRole("button", {
      name: /reserve a table/i,
    });
    fireEvent.click(ButtonElement);

    const paragraphErrorElement = await screen.findByText(
      !dateFetchError
        ? /please select the valid time/i
        : /no available times for the selected date./i
    );
    expect(paragraphErrorElement).toBeInTheDocument();
  });

  it("should render gust input field", async () => {
    render(
      <BookingForm
        title="booking"
        availableTimes={availableTimes}
        fetchDataByDate={jest.fn()}
        submitData={jest.fn()}
        dateFetchError={""}
      />
    );
    // should render input felid as a number type
    const inputGustElement = screen.getByLabelText(/gust/i);
    expect(inputGustElement).toHaveAttribute("type", "number");

    // should render valid  number of gust
    fireEvent.change(inputGustElement, { target: { value: "5" } });
    expect(Number(inputGustElement.value)).toBeLessThanOrEqual(12);
    expect(Number(inputGustElement.value)).toBeGreaterThanOrEqual(1);

    // should render error message  when invalid number of gust entered
    fireEvent.change(inputGustElement, { target: { value: "200" } });
    const paragraphErrorElement = await screen.findByText(
      /number of gust must be between 1\-12/i
    );
    expect(paragraphErrorElement).toBeInTheDocument();
  });

  it("should render time input field", async () => {
    render(
      <BookingForm
        title="booking"
        availableTimes={availableTimes}
        fetchDataByDate={jest.fn()}
        submitData={jest.fn()}
      />
    );
    // should render input felid as a select type
    const inputOccasionElement = screen.getByLabelText(/occasion/i);
    expect(inputOccasionElement).toHaveAttribute("type", "select");

    // should render valid occasion
    fireEvent.change(inputOccasionElement, { target: { value: "Birthday" } });
    expect(inputOccasionElement).toHaveValue("Birthday");

    // should render multiple Occasion
    const optionElement = await screen.findAllByTestId(/occasion-type-/i);
    expect(optionElement.length).toBe(2);

    // should render error message  when occasion not selected
    fireEvent.change(inputOccasionElement, { target: { value: "Select" } });
    const ButtonElement = screen.getByRole("button", {
      name: /reserve a table/i,
    });
    fireEvent.click(ButtonElement);
    const paragraphErrorElement = await screen.findByText(
      /please select the occasion/i
    );
    expect(paragraphErrorElement).toBeInTheDocument();
  });
});
