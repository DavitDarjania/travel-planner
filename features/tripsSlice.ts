import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICurrentTrips {
  flag: { png: string };
  country_name: string;
  subregion: string;
}

interface IPlannedTrips {
  plan_name: string;
  creation_date: string;
  current_trip_data: ICurrentTrips;
}

interface ITrips {
  open_sidebar: boolean;
  current_trips: ICurrentTrips[];
  planned_trips: IPlannedTrips[];
}

const initialState: ITrips = {
  open_sidebar: false,
  current_trips: [],
  planned_trips:
    typeof window !== "undefined" && localStorage.getItem("planned_trips")
      ? JSON.parse(localStorage.getItem("planned_trips")!)
      : [],
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

      // maybe handled wrong , needs to be tested
      // duplicateds needs to be handled
      if (state.current_trips.includes(action.payload)) {
        return;
      }
    },

    // clear all button
    clear_all: (state) => {
      state.current_trips.splice(0, state.current_trips.length);
    },

    // deleting current trip
    delete_current_trip: (state, action) => {
      state.current_trips = state.current_trips.filter(
        (trip) => trip.country_name !== action.payload.country_name,
      );
    },

    // save current trip should recieve object as described in interface

    // dispatch(save(current_trip(
    // {
    // plan_name: 'name',
    // creation_date : '3/21/2026',
    // current_trips: {flag:['usa','iraq' ], country_name : ['this','that']}
    // subregion:

    // }
    //  )))
    save_planned_trip: (state, action) => {
      state.planned_trips.push(action.payload);
      localStorage.setItem(
        "planned_trips",
        JSON.stringify(state.planned_trips),
      );
    },

    // delete saved trip

    // this should recieve something unique so it can filter existing array
    // needs to be tested
    delete_planned_trips: (state, action) => {
      const arg = action.payload;
      const deleted_index = state.planned_trips.find(
        (id) => id.plan_name == arg.plan_name,
      );
      state.planned_trips = state.planned_trips.filter(
        (id) => id !== deleted_index,
      );
    },

    // it should receive saved element's data and display it in the current trip
    load_trip: (state, action) => {
      state.current_trips = action.payload;
    },
    reorder_trips: (state, action) => {
      state.current_trips = action.payload;
    },
  },
});

export const {
  open_sidebar,
  reorder_trips,
  add_current_trips,
  clear_all,
  delete_current_trip,

  save_planned_trip,
  delete_planned_trips,

  load_trip,
} = tripsSlice.actions;

export default tripsSlice.reducer;
