import Image from "next/image";
import { ModeToggle } from "./components/mode-toggle";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <section className="bg-white border-spacing-1 border w-full max-w-md max-h-96 h-full p-4 rounded-md"></section>
    </main>
  );
}
