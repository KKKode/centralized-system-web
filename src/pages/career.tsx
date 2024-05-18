import userProtected from "@/hooks/userProtected";
import { PublicLayout } from "@/layouts";

const Career = () => {
  return (
    <PublicLayout>
      <section className="main-container h-screen grid place-items-center text-xl font-semibold text-gray-800">
        Career
      </section>
    </PublicLayout>
  );
};

export default userProtected(Career);
