import "./DisplayPerson.css";

export function DisplayPerson(props) {
  return (
    <div className="display_person_container">
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  );
}
