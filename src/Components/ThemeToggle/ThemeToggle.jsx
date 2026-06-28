// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// function ThemeToggle() {

//   const [dark, setDark] = useState(true);

//   useEffect(() => {

//     const theme = localStorage.getItem("theme");

//     if (theme === "light") {

//       setDark(false);
//       document.documentElement.classList.remove("dark");

//     } else {

//       setDark(true);
//       document.documentElement.classList.add("dark");

//     }

//   }, []);

//   const toggleTheme = () => {

//     if (dark) {

//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");

//     } else {

//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");

//     }

//     setDark(!dark);

//   };

//   return (

//     <button
//       onClick={toggleTheme}
//       className="text-2xl text-yellow-400"
//     >
//       {dark ? <FaSun /> : <FaMoon />}
//     </button>

//   );

// }

// export default ThemeToggle;