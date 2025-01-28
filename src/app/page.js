import Drawer from "@/components/Drawer";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col  h-screen">
      {/* Main container for Drawer and Card side by side */}
      <div className="flex flex-grow max-sm:flex-col ">
        {/* Drawer stays at the left with fixed width */}
        <div className="w-[15vw] z-10 h-full bg-white">
          <Drawer />
        </div>

        {/* Card container is placed next to the Drawer */}
        <div className="flex flex-wrap gap-2 max-sm:flex-col max-sm:items-center p-4 bg-white w-full ">
          {/* Cards will fill the available space */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Footer stays at the bottom of the page or content */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
