import HeroBanner from "../components/homepage/HeroBanner";
import Packages from "../components/homepage/Packages";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <HeroBanner />
      <Packages />
    </div>
  );
}