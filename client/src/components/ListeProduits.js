import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"

import ModifierProduit from "./ModifierProduit";

const ListeProduits = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
    const deleteTodo = await axios.delete(`/api/todos/${id}`);

    setTodos(todos.filter(todo => todo.todo_id !== id));
    
  };

  const getTodos = async () => {
    try {
      const data = await axios.get("/api/todos");
      setTodos(data.data.rows)
      //setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <ModifierProduit todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListeProduits;
