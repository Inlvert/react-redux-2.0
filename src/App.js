import Counter from "../src/components/Counter";
import CarCreatorForm from "./components/CarCreatorForm";
import TakeAllCars from "./components/TakeAllCars";
import TaskList from "./components/TaskList";
import UserCreationForm from "./components/UserCreationForm";

function App(props) {
  
  return (
    <>
      <TaskList />
      <UserCreationForm />
      <Counter/>
      <CarCreatorForm />
      <TakeAllCars />
    </>
  );
}

export default App;