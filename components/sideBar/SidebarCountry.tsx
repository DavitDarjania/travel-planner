"use client";

import { delete_current_trip } from "@/features/tripsSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from "../button/Button";

interface sidebarCountryProps {
  flag: string
  country_name: string;
  subregion: string;
}

export default function SidebarCountry({
  flag,
  country_name,
  subregion,
}: sidebarCountryProps) {
  const dispatch = useAppDispatch();
  // console.log(flag);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: country_name, // must match the id in SortableContext items
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg transition-all duration-200 ">
        <div className="flex items-center space-x-3">
          <div
            {...attributes}
            {...listeners}
            role="button"
            aria-disabled="false"
            aria-roledescription="sortable"
            aria-describedby="DndDescribedBy-0"
            className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded"
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
            src={flag?.png}
            alt="Flag of Australia"
            className="w-8 h-6 object-cover rounded border"
          ></img>
          <div >
            <h4
              className="font-medium text-gray-900"
            >
              {country_name}
            </h4>
            <p
              className="text-sm text-gray-500"
            >
              {subregion}
            </p>
          </div>
        </div>
        <Button
          variant='delete'
          onClick={
            () =>
              dispatch(delete_current_trip({ country_name }))
            // console.log(country_name)
          }
          content={<>
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
            >
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <path d="M3 6h18"></path>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </>}
        >
        </Button>
      </div>
    </div>
  );
}
