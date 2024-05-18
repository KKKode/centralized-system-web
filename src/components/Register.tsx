import useAuth from "@/hooks/useAuth";
import { BASE_URL, saveToLocalStorage } from "@/utils";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";

const Register = ({ showLogin }: { showLogin: () => void }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const registerData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    try {
      const response = await fetch(`${BASE_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();

      if (response?.status !== 201) {
        throw new Error("Network response was not ok " + response?.statusText);
      }
      showLogin();
      alert(data?.message);
    } catch (error) {
      console.error("Error during login:", error);
      alert("Register failed. Please check your credentials and try again.");
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex flex-col gap-4"
      >
        <div className="space-y-1">
          <p className="text-base tracking-wide">Name *</p>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={(e) => handleChange(e)}
            className="w-full border border-gray-300 rounded-md outline-none focus:outline-green-300 px-2 py-1 text-sm"
          />
        </div>
        <div className="space-y-1">
          <p className="text-base tracking-wide">Email *</p>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={(e) => handleChange(e)}
            className="w-full border border-gray-300 rounded-md outline-none focus:outline-green-300 px-2 py-1 text-sm"
          />
        </div>
        <div className="space-y-1">
          <p className="text-base tracking-wide">Password *</p>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={(e) => handleChange(e)}
            className="w-full border border-gray-300 rounded-md outline-none focus:outline-green-300 px-2 py-1 text-sm"
          />
        </div>
        <button type="submit" className="btn-primary">
          Register
        </button>
        <p className="text-sm tracking-wide text-center">
          Already have an account{" "}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={showLogin}
          >
            Login
          </span>
        </p>
      </form>
    </section>
  );
};

export default Register;
