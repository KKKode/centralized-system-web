import userProtected from "@/hooks/userProtected";
import { PublicLayout } from "@/layouts";

const Contact = () => {
  return (
    <PublicLayout>
      <section className="main-container h-screen grid place-items-center text-xl font-semibold text-gray-800">
        Contact
      </section>
    </PublicLayout>
  );
};

export default userProtected(Contact);
