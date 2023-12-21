import { Canvas } from "../components/canvas";
import { ModeToggle } from "../components/modeToggle";

export default function Home() {
  return (
    <>
      <ModeToggle className=" absolute top-4 right-4" />
      <Canvas className="border-2" />
    </>
  );
}
