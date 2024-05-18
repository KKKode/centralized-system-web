import useAuth from "@/hooks/useAuth";
import { BASE_URL, saveToLocalStorage } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = ({ showRegister }: { showRegister: () => void }) => {
  const { push } = useRouter();
  const { getUser, user, isUserLoading } = useAuth();
  const [userData, setUserData] = useState({
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

    const loginData = {
      email: userData.email,
      password: userData.password,
    };

    try {
      const response = await fetch(`${BASE_URL}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (response?.status !== 200) {
        throw new Error("Network response was not ok " + response?.statusText);
      }
      alert(data?.message);
      saveToLocalStorage("ACCESS_TOKEN", data?.accessToken);
      getUser();
      if (data?.role === "ADMIN") return push("/admin-panel");
      push("/home");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex flex-col gap-4"
      >
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
          Login
        </button>
        <p className="text-sm tracking-wide text-center">
          Do not have an account{" "}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={showRegister}
          >
            Register
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
