import Iconify from "../iconify";

function Loader() {
  return (
    <div className="w-full h-full absolute top-0 left-0 justify-center flex items-center">
      <Iconify
        width={100}
        className="text-primary"
        icon="svg-spinners:blocks-wave"
      />
    </div>
  );
}

export default Loader;
