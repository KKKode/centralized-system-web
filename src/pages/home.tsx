import userProtected from "@/hooks/userProtected";
import { PublicLayout } from "@/layouts";

const Home = () => {
  return (
    <PublicLayout>
      <section className="main-container h-screen grid place-items-center text-xl font-semibold text-gray-800">
        Home
      </section>
    </PublicLayout>
  );
};

export default userProtected(Home);
