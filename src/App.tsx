import { useState } from "react";
import { useAddUser } from "./routes/registerRoute";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Username: "",
    Password: "",
    PhoneNo: "",
    Country: "",
    City: "",
    PanNo: "",
    AadharNo: "",
  });

  const navigate = useNavigate();
  const { addUserHandler } = useAddUser();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    if (
      !user.FirstName ||
      !user.LastName ||
      !user.Email ||
      !user.Username ||
      !user.Password ||
      !user.PhoneNo ||
      !user.Country ||
      !user.City ||
      !user.PanNo ||
      !user.AadharNo
    ) {
      alert("Please fill all the fields in the Form");
      return;
    }
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    if (!passwordRegex.test(user.Password)) {
      alert("Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, and one number");
      return;
    }
    if (user.PhoneNo.length < 10) {
      alert("Phone number must be at least 10 digits long");
      return;
    }
    if (user.PanNo.length < 10) {
      alert("Pan number must be at least 10 digits long");
      return;
    }
    if (user.AadharNo.length < 12) {
      alert("Aadhar number must be at least 12 digits long");
      return;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(user.Email)) {
      alert("Invalid email address");
      return;
    }
    if (user.Username.length < 3) {
      alert("Username must be at least 3 characters long");
      return;
    }
    if (user.FirstName.length < 3) {
      alert("First name must be at least 3 characters long");
      return;
    }
    if (user.LastName.length < 3) {
      alert("Last name must be at least 3 characters long");
      return;
    }
    if (user.Country.length < 3) {
      alert("Country name must be at least 3 characters long");
      return;
    }
    if (user.City.length < 3) {
      alert("City name must be at least 3 characters long");
      return;
    }
    const newUser = { ...user, id: Date.now() };
    addUserHandler(newUser);
    alert("User registered successfully");
  };

  return (
    <div className="bg-primaryBg h-screen flex items-center justify-center text-primaryText">
      <div className="bg-white/30 backdrop:blur-lg p-10 rounded-lg shadow-lg">
        <div>
          <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Registration Form</h1>
            <button
              onClick={() => navigate("/showData")}
              className="text-black bg-yellow-400 hover:bg-yellow-500 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Registered Data
            </button>
          </div>
        </div>
        <form action="/register" method="post">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2" htmlFor="fname">
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fname"
                value={user.FirstName}
                required
                onChange={(e) => {
                  setUser({ ...user, FirstName: e.target.value });
                }}
                placeholder="Enter your fname"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="lname">
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lname"
                value={user.LastName}
                required
                onChange={(e) => {
                  setUser({ ...user, LastName: e.target.value });
                }}
                placeholder="Enter your lname"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={user.Email}
                required
                onChange={(e) => {
                  setUser({ ...user, Email: e.target.value });
                }}
                placeholder="Enter your email"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="username">
                Username
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                value={user.Username}
                required
                onChange={(e) => {
                  setUser({ ...user, Username: e.target.value });
                }}
                placeholder="Enter your username"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="password">
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={user.Password}
                required
                onChange={(e) => {
                  setUser({ ...user, Password: e.target.value });
                }}
                placeholder="Enter your password"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="phno">
                Ph.no
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phno"
                value={user.PhoneNo}
                required
                onChange={(e) => {
                  setUser({ ...user, PhoneNo: e.target.value });
                }}
                placeholder="Enter your Ph.no"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="country">
                Country
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="country"
                value={user.Country}
                required
                onChange={(e) => {
                  setUser({ ...user, Country: e.target.value });
                }}
                placeholder="Enter your countary"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="city">
                City
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={user.City}
                required
                onChange={(e) => {
                  setUser({ ...user, City: e.target.value });
                }}
                placeholder="Enter your city"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="panno">
                Pan No
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="panno"
                value={user.PanNo}
                required
                onChange={(e) => {
                  setUser({ ...user, PanNo: e.target.value });
                }}
                placeholder="Enter your Pan No"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="adharno">
                Aadhar No
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="adharno"
                value={user.AadharNo}
                required
                onChange={(e) => {
                  setUser({ ...user, AadharNo: e.target.value });
                }}
                placeholder="Enter your Aadhar No"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



