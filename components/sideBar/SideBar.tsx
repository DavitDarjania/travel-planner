"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { add_current_trips, reorder_trips } from "@/features/tripsSlice";
import SidebarCountry from "./SidebarCountry";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface SideBarProps {
  onOpen: () => void;
  onClose: () => void;
}

export default function SideBar({ onClose, onOpen }: SideBarProps) {
  const dispatch = useAppDispatch();
  const { current_trips } = useAppSelector((state) => state.plan_trip);
  console.log("here: " + current_trips);

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
            <button
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
            </button>
          </div>
          <p
            className="text-blue-100 text-sm mt-2"
            data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE2NToyMg"
            data-yw-t="true"
          >
            Drag countries here to add them to your trip
          </p>
        </div>
        <div
          className="flex-1 overflow-y-auto"
          data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE3MToyMA"
        >
          <div
            className="px-4 py-6 sm:px-6"
            data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE3MjoyMg"
          >
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
              className="mb-8 min-h-[200px] border-2 border-dashed rounded-lg p-4 transition-colors duration-200 border-blue-300 bg-blue-50"
              data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE3NDoyNA"
            >
              <div
                className="flex items-center justify-between mb-4"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE4MjoyNg"
              >
                <h3
                  className="text-lg font-medium text-gray-900"
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE4MzoyOA"
                  data-yw-t="true"
                >
                  Current Trip
                </h3>
              </div>
              <div
                className="text-center py-8 text-gray-500 flex flex-col gap-3"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE5NToyOA"
              >
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
                      data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE5NjozMA"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p
                      className="font-medium"
                      data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE5NzozMA"
                      data-yw-t="true"
                    >
                      Drop countries here
                    </p>
                    <p
                      className="text-sm"
                      data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDE5ODozMA"
                      data-yw-t="true"
                    >
                      Drag countries from the list to add them to your trip
                    </p>
                  </div>
                )}
              </div>
            </div>
            {current_trips.length != 0 && (
              <button
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mb-5"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDIyMjozMA"
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
                  className="lucide lucide-save h-4 w-4"
                  aria-hidden="true"
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDIyNjozMg"
                >
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                <span
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDIyNzozMg"
                  data-yw-t="true"
                >
                  Save Trip
                </span>
              </button>
            )}
            <div data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI2MzoyNA">
              <h3
                className="text-lg font-medium text-gray-900 mb-4"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI2NDoyNg"
                data-yw-t="true"
              >
                Saved Trips
              </h3>
              <div
                className="text-center py-8 text-gray-500"
                data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI2NzoyOA"
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
                  className="lucide lucide-calendar h-12 w-12 mx-auto mb-4 text-gray-300"
                  aria-hidden="true"
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI2ODozMA"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <p
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI2OTozMA"
                  data-yw-t="true"
                >
                  No saved trips
                </p>
                <p
                  className="text-sm"
                  data-yw="c3JjL2NvbXBvbmVudHMvVHJpcFBsYW5uZXIudHN4QDI3MDozMA"
                  data-yw-t="true"
                >
                  Create and save your first trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
