import { Login, Register } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isClick, setIsClick] = useState(true);
  return (
    <section className="main-container h-screen grid place-items-center text-xl font-semibold text-gray-800">
      {isClick ? (
        <Login showRegister={() => setIsClick(false)} />
      ) : (
        <Register showLogin={() => setIsClick(true)} />
      )}
    </section>
  );
}
