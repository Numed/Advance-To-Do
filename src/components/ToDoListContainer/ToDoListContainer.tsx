import {
  ToDoList,
  CreateCheckBox,
  CreateInput,
  CreateToDo,
  ToDo,
  CheckBox,
  Label,
  CheckMark,
} from "../list/style";

type ToDoTypes = {
  name: string;
  id: number;
  completed: boolean;
  items: Array;
};

const ToDoListContainer: React.FunctionComponent<ToDoTypes> = ({ items }) => {
  const changeHandler = (e: any): void => {
    console.log(e);
  };

  return (
    <ToDoList className="productivity">
      {items.map(({ id, name, completed }) => {
        return (
          <>
            <ToDo key={id}>
              <Label className={completed ? "completed" : null}>
                <CheckBox
                  type="checkbox"
                  className="check-box"
                  onChange={(e) => changeHandler(e.target)}
                />
                <span className="todo-name">{name}</span>
                <CheckMark className="check-mark" />
              </Label>
            </ToDo>
          </>
        );
      })}
      <CreateToDo>
        <CreateCheckBox type="checkbox" />
        <CreateInput type="text" placeholder="Write your task" />
      </CreateToDo>
    </ToDoList>
  );
};

export default ToDoListContainer;
