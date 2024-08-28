import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, showFilters, onFilterChange,handleResetTasks }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/user");
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  };
  
  return (
    <header className="bg-slate-900 text-white flex w-full">
      <div className="container w-lvw px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-sm md:text-2xl font-bold py-3">
          <h1 className="mb-1.5">Welcome {auth.currentUser.email || "User"}</h1>

          {showFilters && (
            <div className="flex-col md:flex-row space-x-2">
              <div className="text-[16px] font-light text-blue-300 ms-2">
                <h2>View tasks</h2>
              </div>
              <button
                onClick={() => onFilterChange("daily")}
                className="text-sm sm:text:xs font-medium py-1 px-2 my-1 sm:py-2 sm:px-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              >
                Daily
              </button>
              <button
                onClick={() => onFilterChange("weekly")}
                className="text-sm sm:text:xs font-medium py-1 px-2 my-1 sm:py-2 sm:px-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              >
                Weekly
              </button>
              <button
                onClick={() => onFilterChange("monthly")}
                className="text-sm sm:text:xs font-medium py-1 px-2 my-1 sm:py-2 sm:px-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              >
                Monthly
              </button>
              <button
                onClick={() => onFilterChange("all")}
                className="text-sm sm:text:xs font-medium py-1 px-2 my-1 sm:py-2 sm:px-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              >
                All
              </button>
              <button
                onClick={()=>{handleResetTasks()}}
                className="text-sm sm:text:xs font-medium py-1 px-2 my-1 sm:py-2 sm:px-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Reset All Tasks
              </button>
            </div>
          )}
        </div>
        <div className="p-2 sm:flex">
          <button
            className="md:hidden py-2 px-3.5 bg-gray-800 text-white rounded-md shadow-md m-2"
            onClick={toggleSidebar}
          >
            View Users
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="py-2 px-6 m-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
