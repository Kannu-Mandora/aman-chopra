import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function VedicScriptures() {
  return (
    <>
      <Navbar bg="bg-yellow-500" />
      <div className="flex flex-col justify-center items-center work-sans">
        <h1 className="font-semibold text-4xl uppercase">
          Read Vedic scriptures online for free
        </h1>
        <hr className="hrClass h-0.5 bg-[color:var(--primary)]" />
        <span className="text-[color:var(--brown)] my-10">
          Choose the scripture you want to read and click on the link given
          below there and read any scripture of your choice.
        </span>
      </div>
      {/* GetVedicBook.jsx */}
      <div className="flex items-center justify-around work-sans">
        <div>
          <h1>
            Join our Telegram Group for accessing more Vedic Granths for Free.
          </h1>
          <span className="flex w-96 my-10">
            Click on the telegram button or search “Bhagavad Gita Knowledge”
            Channel in your telegram app/website for joining our Telegram Group.
            Telegram
          </span>
        </div>
        <div>
            <img src="https://ik.imagekit.io/egkxyv8la/Aman-Chopra_Website_/assests/Telegram_2019_Logo.svg_msKmj_RdN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668004249207" alt="" className="w-40 bg-[color:var(--telegram)] hover:bg-[color:var(--lightBlue)] hoverEffect p-4 rounded-md" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VedicScriptures;