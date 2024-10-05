import { useState } from "react";
import SendTab from "./SendTab";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Send", content: <SendTab /> },
    { id: 2, label: "Transfer", content: "This is Tab 2 content" },
    { id: 3, label: "Receive", content: "This is Tab 3 content" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto mt-10 bg-white border-text border p-4 rounded-lg flex flex-col">
      <div className="flex space-x-4 border-b justify-between">
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

export default Tab;
