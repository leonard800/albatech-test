import HeroBanner from "../components/homepage/HeroBanner";
import Packages from "../components/homepage/Packages";
import TechStack from "../components/homepage/TechStack";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <HeroBanner />
      <Packages />
      <TechStack />
    </div>
  );
}