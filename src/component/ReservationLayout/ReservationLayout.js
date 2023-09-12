import React from "react";

import IntroReservation from "../IntroReservation/IntroReservation";
import { Outlet } from "react-router-dom";

function ReservationLayout() {
  return (
    <>
      <IntroReservation />
      <Outlet />
    </>
  );
}

export default ReservationLayout;
