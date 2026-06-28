import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTip() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {

        setShow(true);

      } else {

        setShow(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    show && (

      <button

        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }

        className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-xl hover:scale-110 duration-300"

      >

        <FaArrowUp />

      </button>

    )

  );

}

export default ScrollTip;