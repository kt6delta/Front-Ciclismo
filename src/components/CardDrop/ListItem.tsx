import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardUser } from "@/components/reusable/user/cardUser";
import { Todo } from "@/utils/interfaces/types";
import { FaPencilAlt } from "react-icons/fa";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  onMontado: any;
}

export const ListItem: FC<Props> = ({ index, todo, todos, setTodos,  onMontado }) => {
  const handleEditNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("edit");
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  useEffect(() => {
    onMontado(2);
  }, []);
  return (
    <>
      <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
        {(draggableProvided, draggableSnapshot) => (
          <form
            className="mb-3 md:mb-5 lg:mb-7 grid"
            onSubmit={handleEditNameSubmit}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
          >
            <CardUser
              nombre={todo.nombre}
              especialidad={todo.especialidad || ""}
              tiempoAcomulado={todo.tiempo || ""}
              genero={todo.genero || ""}
              contextura={todo.contextura || ""}
              img={todo.img} //random img 0-4
            />
            <div className="flex justify-end">
              <button type="submit">
                <FaPencilAlt />
              </button>
            </div>
          </form>
        )}
      </Draggable>
    </>
  );
};
