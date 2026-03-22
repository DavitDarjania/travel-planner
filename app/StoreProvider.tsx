'use client'
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@/lib/store"
import React from "react"
// import { userAgentFromString } from "next/server"
// import { useAppStore } from "@/hooks/reduxHooks"

export default function StoreProvider({
    children,
}: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}