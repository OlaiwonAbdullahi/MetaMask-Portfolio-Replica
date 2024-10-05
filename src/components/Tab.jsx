import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Tab 1", content: "This is Tab 1 content" },
    { id: 2, label: "Tab 2", content: "This is Tab 2 content" },
    { id: 3, label: "Tab 3", content: "This is Tab 3 content" },
  ];

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-10">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          {tabs.find((tab) => tab.id === activeTab).content}
        </div>
      </div>
      <div className="">
        <MyTab />
      </div>
    </>
  );
};

export default Tab;

function MyTab() {
  const [activeTab1, setActiveTab1] = useState(1);

  const MyTabs = [
    { id: 1, label: "Tab 1", content: "This is Tab 1 content" },
    { id: 2, label: "Tab 2", content: "This is Tab 2 content" },
    { id: 3, label: "Tab 3", content: "This is Tab 3 content" },
  ];
  return (
    <div className="">
      <div className="">
        {MyTabs.map((MyTabs) => (
          <button
            key={MyTabs.id}
            onClick={() => setActiveTab1(MyTabs.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab1 === MyTabs.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {" "}
            {MyTabs.label}{" "}
          </button>
        ))}
      </div>

      <div className="">
        {MyTabs.find((MyTabs) => MyTabs.id === activeTab1).content}
      </div>
    </div>
  );
}
