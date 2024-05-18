type Props = {
  visible?: boolean;
};
const Loader = ({ visible }: Props) => {
  return (
    <div
      className={`absolute z-[9999] flex h-full w-full items-center justify-center bg-white ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="relative h-52 w-52">
        <div className="animate-spin h-52 w-52 rounded-full border-x-2 border-t-2 border-x-primary border-t-secondary" />
        <p className="animate-pulse">Loader...</p>
      </div>
    </div>
  );
};

export default Loader;
