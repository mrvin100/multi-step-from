"use client";
import Link from "next/link";
import { TbSquareRoundedNumber1 } from "react-icons/tb";
import { Button } from "./ui/button";
import styles from "@/components/sidebar.module.css";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useContext } from "react";
import { SidebarContext } from "@/app/context";

export default function Sidebar({
  setContext,
}: {
  setContext: Dispatch<SetStateAction<string>>;
}) {
  const router = useRouter();
  const sideBarContext = useContext(SidebarContext);
  const handleClick = (slug: string) => {
    // Replace # with actual root
    //router.push(`/container/${slug}`); //Update the uRL with the slug
    setContext(slug);

    console.log(sideBarContext);
  };
  return (
    <div className="bg-cover bg-no-repeat bg-center rounded-[.35rem] md:bg-[url('/bg-sidebar-desktop.svg')] md:min-h-[30rem] min-h-[10rem]  w-full md:max-w-[18rem] max-w-none bg-[url('/bg-sidebar-mobile.svg')] p-[1rem] flex md:flex-col  place-content-start place-items-start gap-4">
      <Link
        href="#"
        onClick={() => handleClick("infos")}
        className={styles.link}
      >
        <Button className={styles.btn}>
          <i>1</i>
          <span>infos</span>
        </Button>
      </Link>
      <Link
        href="#"
        onClick={() => handleClick("addons")}
        className={styles.link}
      >
        <Button className={styles.btn}>
          <i>2</i>
          <span>addons</span>
        </Button>
      </Link>
      <Link
        href="#"
        onClick={() => handleClick("plan")}
        className={styles.link}
      >
        <Button className={styles.btn}>
          <i>3</i>
          <span>plan</span>
        </Button>
      </Link>
      <Link
        href="#"
        onClick={() => handleClick("sumary")}
        className={styles.link}
      >
        <Button className={styles.btn}>
          <i>4</i>
          <span>summary</span>
        </Button>
      </Link>
    </div>
  );
}
