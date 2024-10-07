import { useState } from "react";
import ReceiveTab from "./ReceiveTab";
import StalkPool from "./StalkPool";
import StalkValidator from "./StalkValidator";

const StalkTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "MetaMask Pool", content: <StalkPool /> },
    { id: 2, label: "MetaMask Validators", content: <StalkValidator /> },
    { id: 3, label: "Receive", content: <ReceiveTab /> },
  ];

  return (
    <div className="w-full mx-auto mt-10 bg-white p-4 rounded-lg flex flex-col">
      <div className="flex space-x-4 border-b justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-btnBg text-btnBg"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4  rounded-lg bg-white">
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
};

export default StalkTab;
