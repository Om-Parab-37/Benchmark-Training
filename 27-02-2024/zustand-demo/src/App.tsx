import { Badge, Button } from "antd";
import { useBearsStore } from "./stores/bearsStore";

const App = () => {
  const bears = useBearsStore((state) => state.bears);

  return (
    <>
      <h1>{bears}</h1>
      <Button
        type="primary"
        onClick={useBearsStore((state) => state.increasePopulation)}
      >
        Increament Bears
      </Button>
      <Button
        onClick={useBearsStore((state) => state.decreamentPopulation)}
        type="primary"
      >
        Decreament Bears
      </Button>
    </>
  );
};

export default App;
