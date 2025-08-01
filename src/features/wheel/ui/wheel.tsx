import WheelSettings from "./wheelSettings";
import { useWheelState } from "../model/use-wheel-state";

const ClassicWheel = () => {
  const { canvasRef, handleRotate } = useWheelState("classic");

  return (
    <div className="flex justify-center items-center p-4">
      <canvas ref={canvasRef} />
      <WheelSettings handleRotate={handleRotate} />
    </div>
  );
};

export default ClassicWheel;
