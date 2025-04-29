import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const Body = () => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const options = {
      strings: [
        "Run 'clear' for clearing the information",
        "Run 'info' Displays information about me",
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1500,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        setPlaceholder(self.strings[arrayPos]);
      },
      onComplete: (self) => {
        setPlaceholder(self.strings[0]);
      },
    };

    const typed = new Typed(".typed-placeholder", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="pt-0 font-source space-y-3 h-[83vh] max-w-screen-xl text-white p-4">
      <div></div>
      <div>
        <i className="text-white cursor-shadow block text-left">
          iamdhakrey:~#
          <input
            type="text"
            className="bg-black font-source cursor-shadow text-white border-none outline-none w-full h-full flex justify-start animate-fade-in typed-placeholder"
            placeholder={placeholder}
            value=""
          />
        </i>
      </div>
    </div>
  );
};

export default Body;
