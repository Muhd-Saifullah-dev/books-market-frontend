import Card from "@/components/Card";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main container for Drawer and Card side by side */}
      <div className="flex w-full">
        {/* Drawer stays at the left */}
        <div className="w-[15vw]">
        <Drawer />
        </div>
        {/* Card container is placed next to the Drawer */}
        <div className="flex flex-wrap gap-2 p-4 w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
