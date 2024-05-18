import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { push } = useRouter();
  return (
    <nav className="w-full sticky z-[999] top-0 bg-white shadow-sm py-4">
      <section className="main-container flex items-center justify-between gap-4 text-gray-800">
        <div>
          <Link href="/">
            <h2 className="text-2xl font-bold">Logo</h2>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link href="/home">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/feature">
            <p>Feature</p>
          </Link>
          <Link href="/career">
            <p>Career</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
          {user?._id ? (
            <button
              className="btn-primary"
              onClick={() => {
                logout();
                push("/");
              }}
            >
              Logout
            </button>
          ) : null}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
