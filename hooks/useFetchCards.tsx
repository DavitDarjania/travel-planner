// "use client"
import fetchData from "@/api/fetchData"
import { useQuery } from "@tanstack/react-query"
import { ICardContent } from "@/types/CardContent.interface"

const useFetchCards = () => {
    const result = useQuery<ICardContent>({
        queryKey: ['cards'],
        queryFn: fetchData
    })
    return result
}

export default useFetchCards