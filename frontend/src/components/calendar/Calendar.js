import React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import NavBar from "../navigation/NavBar";

const Calendar = () => {
  const appointments = [
    {
      startDate: "2018-07-01T09:45",
      endDate: "2018-07-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-07-01T12:00",
      endDate: "2018-07-01T13:30",
      title: "Go to a gym",
    },
  ];

  const currentDate = "2018-07-17";

  return (
    <div>
      <NavBar />
      <Paper elevation={1}>
        <Scheduler data={appointments}>
          <ViewState currentDate={currentDate} />
          <MonthView />
          <Appointments />
          <AppointmentTooltip />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Calendar;
