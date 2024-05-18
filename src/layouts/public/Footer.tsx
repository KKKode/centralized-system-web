const Footer = () => {
  return (
    <footer className="py-4 w-full bg-gray-800">
      <p className="text-white tracking-wider text-center">
        ©{new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
