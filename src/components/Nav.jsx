import React, { useEffect, useState } from "react";

const Nav = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <nav className="max-w-screen-xl grid grid-cols-12 items-center justify-between lg:space-y-0 space-y-1  p-4">
      <div className="lg:order-1 lg:col-span-4 col-span-6 flex justify-start">
        <a href="#" className="text-white block text-2xl font-semibold">
          <span className="text-green-400">i</span>amdhakrey
          <span className="text-green-400">.</span>dev
        </a>
      </div>
      <div className="lg:col-span-4 lg:order-3 col-span-6 flex sm:justify-start lg:justify-end md:justify-end xl:justify-end 2xl:justify-end space-x-4">
        <a href="#" target="_blank" className="text-green-400 font-source tracking-wide">/blogs</a>
        <a href="https://t.me/iamdhakrey" target="_blank" className="text-green-400 font-source tracking-wide">/telegram</a>
        <a href="https://github.com/iamdhakrey/" target="_blank" className="text-green-400 font-source tracking-wide">/github</a>
      </div>
      <div className="lg:col-span-4 lg:order-2 col-span-6 flex lg:justify-center justify-start">
        <span className="text-green-400 text-sm tracking-wide flex">
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
