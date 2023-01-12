import React from "react";

import started from "../../../../assets/getting_started.svg";
import account from "../../../../assets/accounts.svg";
import email from "../../../../assets/email.svg";
import chat from "../../../../assets/chat.svg";

const Card = () => {
  return (
    <div className="grid gap-4 max-w-[1280px] m-auto p-4  md:grid-cols-2 sm:grid-cols-1 bg-[#F4F4F4]">
      <div className="bg-[#FFFFFF] rounded-lg lg:flex p-5">
        <div className="flex justify-center items-center">
          <img className="min-h-[150px] mr-3" src={started} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold mb-2">Getting Started</h1>
          <p>
            Dramatically recaptiualize multimedia based testing procedures
            before
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-lg lg:flex p-5">
        <div className="flex justify-center items-center">
          <img className="min-h-[150px] mr-3" src={account} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold mb-2">Accounts</h1>
          <p>
            Dynamically restore installed base imperatives through flexible
            amazing
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-lg lg:flex p-5">
        <div className="flex justify-center items-center">
          <img className="min-h-[150px] mr-3" src={email} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold mb-2">Email</h1>
          <p>
            Professionally coordinate high standards in process improvements and
            tactical
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-lg lg:flex p-5">
        <div className="flex justify-center items-center">
          <img className="min-h-[150px] mr-3" src={chat} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold mb-2">Live chat</h1>
          <p>
            Distinctively negotiate cross-media resources before value-added
            best
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
