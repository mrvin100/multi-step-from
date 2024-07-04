"use client";

import { ModeToggle } from "../components/mode-toggle";
import Sidebar from "@/components/sidebar";
import Content from "./container/[slug]"; // Import the dynamic container component
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarContext } from "./context";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const [sideContext, setSideContext] = useState("infos");

  const [selectedSlug, setSelectedSlug] = useState(params.slug || "infos");
  useEffect(() => {
    // Update selectedSlug based on router changes (optional)
    setSelectedSlug("infos"); // Set a default value initialy
  }, [params.slug]); // Re-run useEffet on query changes
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <section className="bg-white border-spacing-1 border w-full max-w-[50rem] h-full p-2 rounded-md grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-[1rem]">
        <SidebarContext.Provider value={sideContext}>
          <Sidebar setContext={setSideContext} />
          {/* i wannt to fetch container of page choosed after cliked on side bar button */}
          <Content slug={sideContext} />
          {/* Default to 'infos' if no slug */}
        </SidebarContext.Provider>
      </section>
    </main>
  );
}
