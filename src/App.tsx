import { Hero } from "./components/Hero";
import { Vision } from "./components/Vision";
import { ChocolateTypes } from "./components/ChocolateTypes";
import { Products } from "./components/Products";
import { Fillings } from "./components/Fillings";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Vision />
      <ChocolateTypes />
      <Products />
      <Fillings />
      <CallToAction />
      <Footer />
    </div>
  );
}
