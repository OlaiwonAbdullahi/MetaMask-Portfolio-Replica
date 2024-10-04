import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiOptimism, SiBnbchain, SiPolygon } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";

const CoinSelect = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const networks = [
    { name: "Ethereum", icon: <FaEthereum /> },
    { name: "Optimism", icon: <SiOptimism /> },
    { name: "BNB Chain", icon: <SiBnbchain /> },
    { name: "Polygon", icon: <SiPolygon /> },
  ];

  const handleSelect = (network) => {
    setSelectedNetwork(network.name);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };
  return (
    <div className="relative w-2/3">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between gap-3 border border-text rounded-full h-14"
      >
        <div className=" flex gap-3 p-2">
          <span className="mt-1">
            {networks.find((net) => net.name === selectedNetwork)?.icon}
          </span>
          <span>{selectedNetwork}</span>
        </div>
        <div className="">
          <RxCaretDown className="w-6 h-6" />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white shadow-md mt-2 rounded z-10">
          {networks.map((network, index) => (
            <li
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(network)}
            >
              <span className="mr-2">{network.icon}</span>
              <span>{network.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinSelect;
