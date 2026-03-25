import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface ICurrentTrips {
  length: ReactNode;
  flag: { png: string };
  country_name: string;
  subregion: string;
}


export interface IPlannedTrips {
  plan_name: string;
  creation_date: string;
  current_trip_data: ICurrentTrips;
}

interface ITrips {
  open_sidebar: boolean;
  stage_current_trip_status: boolean;
  trip_form_status: boolean;
  current_trip_name_set: string
  current_trips: ICurrentTrips[];
  planned_trips: IPlannedTrips[];
}

const initialState: ITrips = {
  open_sidebar: false,
  stage_current_trip_status: true,
  trip_form_status: false,
  current_trip_name_set: '',
  current_trips: [],
  planned_trips: []
  // typeof window !== "undefined" && localStorage.getItem("planned_trips")
  //   ? JSON.parse(localStorage.getItem("planned_trips")!)
  //   : [],
};
const tripsSlice = createSlice({
  name: "trips_slice",
  initialState,
  reducers: {
    // pass boolean state
    // dispatch(open_sidebar(boolean))
    open_sidebar: (state, action: PayloadAction<boolean>) => {
      state.open_sidebar = action.payload;
    },

    // creating current trip array
    add_current_trips: (state, action) => {
      state.current_trips = [...state.current_trips, action.payload];
      // const duplicate = state.current_trips.find(action.payload)
      // maybe handled wrong , needs to be tested
      // duplicateds needs to be handled
      // if (state.current_trips.includes(action.payload)) {
      //   return;
      // }
    },

    save_current_trip_status: (state, action: PayloadAction<boolean>) => {
      state.stage_current_trip_status = action.payload
    },
    open_trip_form: (state, action: PayloadAction<boolean>) => {
      state.trip_form_status = action.payload
    },


    current_trip_name: (state, action) => {
      state.current_trip_name_set = action.payload
    },

    // clear all button
    clear_all: (state) => {
      state.current_trips.splice(0, state.current_trips.length);
    },

    // deleting current trip
    delete_current_trip: (state, action) => {
      state.current_trips = state.current_trips.filter((trip) => trip.country_name !== action.payload.country_name)
    },

    // save planned trip
    save_planned_trip: (state, action) => {
      state.planned_trips.push(action.payload);
      // localStorage.setItem(
      //   "planned_trips",
      //   JSON.stringify(state.planned_trips),
      // );
    },

    // delete saved trip

    // this should recieve something unique so it can filter existing array
    // needs to be tested
    delete_planned_trips: (state, action) => {
      state.planned_trips = state.planned_trips.filter((plan) => plan.plan_name !== action.payload.plan_name)
      // console.log(state)
    },

    // it should receive saved element's data and display it in the current trip
    // basic editing functionality
    load_trip: (state, action) => {
      const existing_plan = state.planned_trips.find((plan) => plan.plan_name === action.payload.name)
      if (existing_plan) {
        existing_plan.plan_name = action.payload.plan_name
        existing_plan.current_trip_data = action.payload.data
      }
      state.current_trips = action.payload.data

    },


    reorder_trips: (state, action) => {
      state.current_trips = action.payload;
    },

  },
});

export const {
  open_sidebar,

  save_current_trip_status,
  open_trip_form,
  current_trip_name,

  reorder_trips,
  add_current_trips,
  clear_all,
  delete_current_trip,

  save_planned_trip,
  delete_planned_trips,

  load_trip,
} = tripsSlice.actions;

export default tripsSlice.reducer;
