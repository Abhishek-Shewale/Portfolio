import React from "react";
import Title from "./Title";

export default function Education() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-14 lg:gap-0 lg:flex-col items-center justify-center mt-3  ">
      <Title text="  Education  !🎓" className="mb-16" />
      <div className=" border border-3 py-7 px-10 shadow-lg  rounded-sm  mb-5">
        <p className="md:w-96 text-lg text-gray-300 mt-5">
          Jayawantrao Sawant College of Engineering Master of Computer
          Application - (8.2 CGPA) - 2021-2023
        </p>
      </div>
    </div>
  );
}
