const Button = ({ children }) => {
  return (
    <div className="bg-btnBg sm:px-3 md:px-4 py-3 rounded-full text-center text-xs sm:text-sm md:text-sm h-8 sm:h-10 md:h-12 w-24 sm:w-36 md:w-36 lg:w-44 text-white hover:bg-opacity-90 transition-all duration-300 ease-in-out whitespace-nowrap font-medium font-pop">
      {children}
    </div>
  );
};

export default Button;
