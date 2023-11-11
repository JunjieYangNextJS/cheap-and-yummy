import { Metadata } from "next";
import { Sidebar } from "@/components/businesses/sidebar";

import { Header } from "@/components/businesses/header";

import MainContent from "@/components/businesses/main-content";

export const metadata: Metadata = {
  title: "Cheap And Yummy",
  description:
    "This website gives you the best and cheapest foods around your area",
};

export default function Home() {
  return (
    <div className="hidden md:block">
      <Header />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}
