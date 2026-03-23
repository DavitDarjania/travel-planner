"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  add_current_trips,
  clear_all,
  IPlannedTrips,
  reorder_trips,
  save_current_trip_status,
} from "@/features/tripsSlice";
import SidebarCountry from "./SidebarCountry";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Button from "../button/Button";
import { current } from "@reduxjs/toolkit";
import SideBarForm from "./sideBarForm";

interface SideBarProps {
  onOpen: () => void;
  onClose: () => void;
}

export default function SideBar({ onClose, onOpen }: SideBarProps) {
  const dispatch = useAppDispatch();
  // const { current_trips } = useAppSelector((state) => state.plan_trip);
  const [mounted, setMounted] = useState(false);
  const current_trips: Array<{
    country_name: string;
    flag: string;
    subregion: string;
  }> = useAppSelector((state: RootState) => state.plan_trip.current_trips);

  const { stage_current_trip_status } = useAppSelector(
    (state) => state.plan_trip,
  );
  useEffect(() => {
    setMounted(true);
  }, []);

  const { planned_trips } = useAppSelector((state) => state.plan_trip);

  // console.log(planned_trips)
  // console.log(planned_trips.map((item) => item.current_trip_data.flag?.png))
  // console.log('sidebar: ', current_trips)
  // console.log("here: " + current_trips.);
  if (!mounted) return null;
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 448 }}
      exit={{ width: 0 }}
      className="sticky top-0 h-screen shrink-0 overflow-hidden"
    >
      <div className="flex h-full flex-col bg-white shadow-xl w-md">
        <div className="bg-blue-600 px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-lg font-medium text-white"
              id="headlessui-dialog-title-:r2:"
              data-headlessui-state="open"
            >
              Trip Planner
            </h2>
            <Button
              variant="close"
              content={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </>
              }
              onClick={onClose}
            />
            {/* <button
              onClick={onClose}
              className="rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-6 w-6"
                aria-hidden="true"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE2MjoyNg"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button> */}
          </div>
          <p className="text-blue-100 text-sm mt-2">
            Drag countries here to add them to your trip
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-6 sm:px-6">
            <div
              onDragOver={(e) => e.preventDefault()} // required to allow drop
              onDrop={(e) => {
                const country = JSON.parse(e.dataTransfer.getData("country"));
                dispatch(
                  add_current_trips({
                    flag: country.flag,
                    country_name: country.name.common,
                    subregion: country.subregion,
                  }),
                );
              }}
              className="mb-8 min-h-50 border-2 border-dashed rounded-lg p-4 transition-colors duration-200 border-blue-300 bg-blue-50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg font-medium text-gray-900"
                  data-yw-t="true"
                >
                  Current Trip
                </h3>
              </div>
              <div className="text-center py-8 text-gray-500 flex flex-col gap-3">
                {/* <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg transition-all duration-200 ">
                    <div className="flex items-center space-x-3">
                      <div
                        role="button"
                        aria-disabled="false"
                        aria-roledescription="sortable"
                        aria-describedby="DndDescribedBy-0"
                        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded"
                        data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDQzOjg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-grip-vertical h-4 w-4"
                          aria-hidden="true"
                          data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDQ4OjEw"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <circle cx="9" cy="19" r="1"></circle>
                          <circle cx="15" cy="12" r="1"></circle>
                          <circle cx="15" cy="5" r="1"></circle>
                          <circle cx="15" cy="19" r="1"></circle>
                        </svg>
                      </div>
                      <img
                        src="https://flagcdn.com/w320/au.png"
                        alt="Flag of Australia"
                        className="w-8 h-6 object-cover rounded border"
                        data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDUwOjg"
                      ></img>
                      <div data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDU1Ojg">
                        <h4
                          className="font-medium text-gray-900"
                          data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDU2OjEw"
                        >
                          Australia
                        </h4>
                        <p
                          className="text-sm text-gray-500"
                          data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDU3OjEw"
                        >
                          Oceania
                        </p>
                      </div>
                    </div>
                    <button
                      className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors duration-200"
                      data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDYwOjY"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                        aria-hidden="true"
                        data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDY0Ojg"
                      >
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div> */}
                {current_trips.length > 0 && (
                  <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={(event) => {
                      const { active, over } = event;
                      if (active.id !== over?.id) {
                        const oldIndex = current_trips.findIndex(
                          (t) => t.country_name === active.id,
                        );
                        const newIndex = current_trips.findIndex(
                          (t) => t.country_name === over?.id,
                        );
                        dispatch(
                          reorder_trips(
                            arrayMove(current_trips, oldIndex, newIndex),
                          ),
                        );
                      }
                    }}
                  >
                    <SortableContext
                      items={current_trips.map((t) => t.country_name)}
                      strategy={verticalListSortingStrategy}
                    >
                      {current_trips.map((el) => (
                        <SidebarCountry
                          key={el.country_name}
                          country_name={el.country_name}
                          flag={el.flag}
                          subregion={el.subregion}
                        />
                      ))}
                    </SortableContext>
                  </DndContext>
                )}
                {current_trips.length == 0 && (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin h-12 w-12 mx-auto mb-4 text-blue-300"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p className="font-medium" data-yw-t="true">
                      Drop countries here
                    </p>
                    <p className="text-sm">
                      Drag countries from the list to add them to your trip
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* {(stage_current_trip_status && current_trips.length != 0) && (<><h1>some div</h1></>)} */}
            {current_trips.length != 0 && (
              <>
                {stage_current_trip_status ? (
                  <>
                    <SideBarForm />
                  </>
                ) : (
                  <Button
                    variant="save"
                    content={
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-save h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                          <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                          <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                        </svg>
                        <span>Save Trip</span>
                      </>
                    }
                    onClick={() => {
                      dispatch(save_current_trip_status(true));
                    }}
                  ></Button>
                )}
              </>
            )}

            <div>
              {planned_trips.length == 0 ? (
                <>
                  <h3
                    className="text-lg font-medium text-gray-900 mb-4"
                    data-yw-t="true"
                  >
                    Saved Trips
                  </h3>
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-12 w-12 mx-auto mb-4 text-gray-300"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <p data-yw-t="true">No saved trips</p>
                    <p className="text-sm" data-yw-t="true">
                      Create and save your first trip
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3">
                    {planned_trips.map((item) => (
                      <div
                        key={item.creation_date}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI3NTozMg"
                      >
                        <div
                          className="flex items-center justify-between mb-2"
                          data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI3OTozNA"
                        >
                          <h4
                            className="font-medium text-gray-900"
                            data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI4MDozNg"
                          >
                            {item.plan_name}
                          </h4>
                          <Button
                            variant="delete"
                            content={
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                  aria-hidden="true"
                                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI4NTozOA"
                                >
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </>
                            }
                          ></Button>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          {item.current_trip_data.length} • {item.creation_date}
                        </p>
                        <div className="flex flex-col">
                          <div className="flex space-x-2 mb-3">
                            <img
                              src={item.current_trip_data.flag?.png}
                              alt={item.current_trip_data.country_name}
                              className="w-6 h-4 object-cover rounded border space-x-2"
                            />
                          </div>
                          <button className="w-full px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                            Load Trip
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
