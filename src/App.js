import "./App.css";
import { DisplayPerson } from "./components/DisplayPerson/DisplayPerson";

const persons = [
  { name: "john", age: 38 },
  { name: "doe", age: 20 },
  { name: "joe", age: 41 },
];

const posts = [
  { title: "post 1", description: "post 1 description" },
  { title: "post 2", description: "post 2 description" },
  { title: "post 3", description: "post 3 description" },
];

function App() {
  return (
    <div>
      {/* persons.map((person) => {
        return <DisplayPerson name={person.name} age={person.age} />;
      }) */}
    </div>
  );
}

export default App;
