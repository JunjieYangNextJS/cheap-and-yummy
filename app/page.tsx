import { Metadata } from "next";
import { Sidebar } from "@/components/businesses/sidebar";
import { playlists } from "@/data/playlists";
import { Header } from "@/components/businesses/header";
import DollarTabs from "@/components/businesses/dollar-tabs";
import GoogleMapComponent from "@/components/google-map/google-map";
import MainContent from "@/components/businesses/main-content";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function Home() {
  return (
    <>
      {/* <RestaurantsCard /> */}

      <div className="hidden md:block">
        <Header />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
