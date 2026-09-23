import Titel from "@/components/Titel";
import Link from "next/link";
import React from "react";

const Abouts = () => {
  return (
    <div>
      <Titel>WelCome To Abouts page</Titel>

      <nav className=" space-x-5 p-3 font-semibold">
        <Link href={"/abouts/contact"}>contact</Link>
        <Link href={"/abouts/teams"}>Teams</Link>
      </nav>
    </div>
  );
}; 

export default Abouts;
