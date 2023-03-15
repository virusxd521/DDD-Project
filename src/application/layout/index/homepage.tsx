import React, { FC } from "react";
import { Navigation } from '@/application/components/navigation';
import { Articles } from "@/application/components/articles";

export const HomePage : FC = () => {
  return (
    <>
      <Navigation />
      <Articles />
    </>
  );
};