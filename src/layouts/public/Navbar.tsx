import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sticky z-[999] top-0 bg-white shadow-sm py-4">
      <section className="main-container flex items-center justify-between gap-4 text-gray-800">
        <div>
          <Link href="/">
            <h2 className="text-2xl font-bold">Logo</h2>
          </Link>
        </div>
        <div className="flex justify-end gap-4">
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
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
