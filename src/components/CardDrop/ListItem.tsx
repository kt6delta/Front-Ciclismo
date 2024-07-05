import React, {
  FC,
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardUser } from "@/components/reusable/cardUser";
import { Todo } from "@/utils/interfaces/types";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const ListItem: FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEditNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <>
      <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
        {(draggableProvided, draggableSnapshot) => (
          <form
            className="mb-3 md:mb-5 lg:mb-7 grid gap-5"
            onSubmit={handleEditNameSubmit}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
          >
            {todo.id}
            <CardUser
              nombre={todo.nombre}
              especialidad={todo.especialidad || ""}
              tiempoAcomulado={todo.tiempo || ""}
              genero={todo.genero || ""}
              contextura={todo.contextura || ""}
            />
          </form>
        )}
      </Draggable>
    </>
  );
};
