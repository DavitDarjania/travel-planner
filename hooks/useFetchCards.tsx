"use client";
import fetchData from "@/api/fetchData";
import { useQuery } from "@tanstack/react-query";
import { ICardContent } from "@/types/CardContent.interface";

interface useFetchCardsProps {
  name?: string;
}

const useFetchCards = ({ name }: useFetchCardsProps) => {
  const result = useQuery<ICardContent>({
    queryKey: ["cards", name],
    queryFn: () => fetchData({ name }),
  });
  return result;
};

export default useFetchCards;
