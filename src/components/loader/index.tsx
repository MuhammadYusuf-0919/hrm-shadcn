import Iconify from "../iconify";

function Loader() {
  return (
    <div className="w-full h-full absolute top-0 left-0 justify-center flex items-center">
      <Iconify
        width={200}
        className="text-green-400"
        icon="svg-spinners:pulse-2"
      />
    </div>
  );
}

export default Loader;
