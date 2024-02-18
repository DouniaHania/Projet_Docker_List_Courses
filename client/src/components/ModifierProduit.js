import React, { Fragment, useState } from "react";
import axios from "axios"

const ModifierProduit = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    const body = { description };
    const response = await axios.put(
      `/api/todos/${todo.todo_id}`,
      {description}
    );
    window.location = "/";
    
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary btn-md"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Modifier
      </button>

    
      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-md"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModifierProduit;
