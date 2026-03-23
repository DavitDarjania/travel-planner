"use client";
import { client } from "@/client/client";
import Providers from "@/client/provider";
// import Card from '@/components/card/Card'
import Header from "@/components/header/Header";
import StoreProvider from "../StoreProvider";
import Card from "@/components/card/Card";
import SideBar from "@/components/sideBar/SideBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// import React from 'react'

const PlanPage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <StoreProvider>
      <Providers>
        <div className="flex h-screen overflow-hidden">
          <div className="flex-1 transition-all duration-300 overflow-auto">
            <Header isMain={false} onOpen={() => setIsOpenSidebar(true)} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300">
              <div className="grid gap-6 transition-all duration-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card />
              </div>
            </main>
            <div id="headlessui-portal-root"></div>
          </div>
          <AnimatePresence>
            {isOpenSidebar && (
              <SideBar
                onOpen={() => setIsOpenSidebar(true)}
                onClose={() => setIsOpenSidebar(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </Providers>
    </StoreProvider>
  );
};

export default PlanPage;
