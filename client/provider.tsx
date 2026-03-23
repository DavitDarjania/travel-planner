"use client"
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { client } from "./client";
export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = client
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

}