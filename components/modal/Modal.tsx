import React from "react";
import Button from "../button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { RootState } from "@/lib/store";
import {
  add_data,
  add_favourites,
  modal_open,
  remove_favourites,
} from "@/features/cardSlice";
import { ICardContent } from "@/types/CardContent.interface";
// import { ICardContent } from '@/types/CardContent.interface'

interface ITestModal {
  onClose?: () => void;
}

const Modal = ({ onClose }: ITestModal) => {
  // favourite state
  // const favourite_cards: string[] = useAppSelector((state: RootState) => state.data_update.favourites)
  const favourite_cards: string[] = useAppSelector(
    (state: RootState) => state.data_update.favourites,
  );
  const dispatch = useAppDispatch();

  const {
    flag: { png },
    name: { common, official },
    subregion,
    capital,
    population,
    currencies,
    languages,
    timezones,
    area,
  }: ICardContent | {} = useAppSelector(
    (state: RootState) => state.data_update.data,
  );

  return (
    <>
      <div
        className="fixed w-full h-full inset-0 bg-black opacity-25"
        onClick={() => {
          dispatch(modal_open(false));
        }}
      ></div>
      <div className="z-50 fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
        {/* modal image */}
        <div className="relative h-48 overflow-hidden">
          {/* image */}
          <img
            src={png}
            alt={common}
            className={`w-full h-full object-cover`}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* image overlay */}

          {/* <div className="absolute inset-0 bg-black opacity-20" ></div> */}
          <Button
            onClick={() => {
              (dispatch(add_data({})), dispatch(modal_open(false)));
            }}
            variant="close"
            content={
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
                className="lucide lucide-x h-5 w-5 text-gray-600"
                aria-hidden="true"
                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4OToyMA"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            }
          />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold text-white mb-2">{common}</h2>
            <p className="text-white text-opacity-90">{official}</p>
          </div>
        </div>

        <div className="p-6">
          {/* modal buttons */}
          <div className="flex space-x-3 mb-6">
            <Button
              onClick={() => {
                dispatch(
                  favourite_cards.includes(common.toLowerCase())
                    ? remove_favourites(common.toLowerCase())
                    : add_favourites(common.toLowerCase()),
                );
              }}
              variant={
                favourite_cards.includes(common.toLowerCase())
                  ? "modal_favourited"
                  : "modal_favourite"
              }
              content={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    className={`lucide lucide-heart h-4 w-4 ${favourite_cards.includes(common.toLowerCase()) ? "fill-white" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  <span>
                    {favourite_cards.includes(common.toLowerCase()) ? (
                      <>Favorited</>
                    ) : (
                      <>Added to Favorites</>
                    )}
                  </span>
                </>
              }
            />
            <Button
              variant="modal_add"
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span>Add to Trip</span>
                </>
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first half */}

            <div className="space-y-4">
              {/* sub region */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-map-pin h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                  data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzI6MjQ"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Region</h3>
                  <p className="text-gray-600">{subregion}</p>
                  <p className="text-sm text-gray-500">
                    something is missing here
                  </p>
                </div>
              </div>

              {/* capital */}
              <div className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5 shrink-0"></div>
                <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDU6MjY">
                  <h3
                    className="font-semibold text-gray-900"
                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDY6Mjg"
                    data-yw-t="true"
                  >
                    Capital
                  </h3>
                  <p
                    className="text-gray-600"
                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDc6Mjg"
                  >
                    {capital}
                  </p>
                </div>
              </div>

              {/* population */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-users h-5 w-5 text-green-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Population</h3>
                  <p className="text-gray-600">{population / 10000}</p>
                </div>
              </div>

              {/* area */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-map-pin h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjI6MjQ">
                  <h3
                    className="font-semibold text-gray-900"
                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjM6MjY"
                    data-yw-t="true"
                  >
                    Area
                  </h3>
                  <p
                    className="text-gray-600"
                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjQ6MjY"
                  >
                    {area} km²
                  </p>
                </div>
              </div>
            </div>

            {/* second half */}
            <div className="space-y-4">
              {/* currency */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-dollar-sign h-5 w-5 text-yellow-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Currency</h3>
                  <p className="text-gray-600">
                    {currencies[0].name} {currencies[0].symbol}
                  </p>
                </div>
              </div>

              {/* languages */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-globe h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Languages</h3>
                  <p className="text-gray-600">{languages[0].name}</p>
                </div>
              </div>

              {/* timezones */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-clock h-5 w-5 text-red-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Timezones</h3>
                  <p className="text-gray-600">{timezones[0]}</p>
                </div>
              </div>

              {/* continents */}
              <div className="flex items-start space-x-3">
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
                  className="lucide lucide-globe h-5 w-5 text-teal-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Continents</h3>
                  <p className="text-gray-600">{subregion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
