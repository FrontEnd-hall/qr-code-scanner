import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App bg-blue-300 h-screen flex justify-center items-center p-5">
      <div className="container bg-white flex  items-center w-auto  p-5 flex-col h-auto rounded-2xl ">
        <img
          src="../public/images/image-qr-code.png"
          className="  h-72  rounded-2xl"
          alt=""
        />
        <div className="content ">
          <h2 className="text-[21px] font-bold w-72 pl-4 pr-4 pt-2">
            {" "}
            Improve your front-end skills by building projects
          </h2>

          <p className="w-72 pl-4 pr-4 pt-2">
            {" "}
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
