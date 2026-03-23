import Button from "@/components/button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { add_favourites, remove_favourites } from "@/features/cardSlice";
// import {add_cur}
import { RootState } from "@reduxjs/toolkit/query";
import { ICardContent } from "@/types/CardContent.interface";
import { Albert_Sans } from "next/font/google";
import { add_current_trips } from "@/features/tripsSlice";

interface ICardImage {
  imageUrl: string;
  imageAlt: string;
  imageName?: string;
  imageName2?: string;
  subRegion: string;
  isModal?: boolean;
}

const CardImage: React.FC<ICardImage> = ({
  imageUrl,
  imageAlt,
  subRegion,
  imageName,
  imageName2,
  isModal,
}) => {
  // favourite state
  const favourite_cards: string[] = useAppSelector(
    (state: RootState) => state.data_update.favourites,
  );
  const current_trip: string[] = useAppSelector(
    (state: RootState) => state.plan_trip.current_trips,
  );

  const dispatch = useAppDispatch();

  return (
    <div className="relative h-48 overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`
          w-full h-full object-cover z-0
          group-hover:scale-105 transition-transform duration-300`}
      />

      <div
        className={`
        absolute inset-0 bg-black opacity-20 
         `}
      ></div>

      <div className="absolute top-3 right-3 flex space-x-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              favourite_cards.includes(imageAlt.toLowerCase())
                ? remove_favourites(imageAlt.toLowerCase())
                : add_favourites(imageAlt.toLowerCase()),
            );
          }}
          variant={
            favourite_cards.includes(imageAlt.toLowerCase())
              ? "favourited"
              : "favourites"
          }
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
                className={`lucide lucide-heart h-4 w-4 ${favourite_cards.includes(imageAlt.toLowerCase()) ? "fill-current" : ""}`}
                aria-hidden="true"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
            </>
          }
        />
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              add_current_trips({
                flag: imageUrl,
                country_name: imageAlt,
                subregion: subRegion,
              }),
            );
          }}
          variant="add"
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
                className="lucide lucide-plus h-4 w-4"
                aria-hidden="true"
                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeUNhcmQudHN4QDE5MzoxNA"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </>
          }
        />
      </div>
      {/* } */}
    </div>
  );
};

export default CardImage;
