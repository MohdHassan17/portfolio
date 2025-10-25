"use client";
import { useEffect, useState } from "react";

export default function RotatingButton() {
  const roles = ["UI/UX Designer", "Frontend Developer", "Backend Engineer", "Graphic Artist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  h-10 overflow-hidden bg-white  w-60 h-15 rounded-full  flex items-center justify-center font-normal text-xl " >
      <div
        key={roles[index]} // triggers animation when text changes
        className="absolute text-xl transition-all duration-900 ease-in-out animate-slideUp"
      >
        {roles[index]}
      </div>
    </div>
  );
}
