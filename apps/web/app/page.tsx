import { Appbar } from "../components/Appbar";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Appbar />
      <div className="flex flex-col items-center pt-24 px-4 pb-16">
        <Hero />
      </div>
    </main>
  );
}