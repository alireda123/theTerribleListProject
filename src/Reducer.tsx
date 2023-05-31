import { useState, useRef } from "react";

export default function Reducer() {
  const [file, setFile] = useState([
    {
      id: 1,
      action: "to make the BeforeUnloadEvent",
      done: false,
      editmode: false
    },
    { id: 2, action: "to make the bed", done: false, editmode: false },
    { id: 3, action: "to make the pizza", done: false, editmode: false }
  ]);
  const refer = useRef();
  const [todo, setTodo] = useState("");

  const idadder = Math.random() * 1000;
  const [value, setValue] = useState("");

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();

    const adder = {
      id: idadder,
      action: todo,
      done: false
    };

    setFile(file.concat(adder));
  };

  const deleter = (id) => {
    const remover = [...file].filter((item) => item.id !== id);
    setFile(remover);
  };

  const func = (e) => {
    return e.target.checked ? this.done === true : this.done === false;
  };

  const edit = (e, id) => {
    //const update = [...file].filter(item => item.id === id)
    const updater2 = [...file].map((item) => {
      if (item.id === id) {
        item.editmode = !item.editmode;
      }
      return item;
    });
    setFile(updater2);
    e.preventDefault();
  };

  const save = (e, id) => {
    const updater3 = [...file].map((item) => {
      if (item.id === id) {
        item.editmode = !item.editmode;
      }
      return item;
    });
    setFile(updater3);

    const updater = [...file].map((item) => {
      if (item.id === id) {
        item.action = value;
      }
      return item;
    });
    setFile(updater);
    e.preventDefault();
  };

  return (
    <div>
      <form className="form">
        <input onChange={handlechange} />
        <button onClick={handleclick}>Add</button>
        <br />
        {file.map((item) => (
          <div key={item.id}>
            <input ref={refer} type="checkbox" onClick={func} id={item.id} />
            {item.editmode ? (
              <>
                <input
                  type="text"
                  defaultValue={item.action}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={(e) => save(e, item.id)}>Save</button>
              </>
            ) : (
              <>
                <label htmlFor={item.id}>{item.action}</label>
                <button onClick={(e) => edit(e, item.id)}>Edit</button>
              </>
            )}

            <button onClick={() => deleter(item.id)}>delete</button>

            <br />
          </div>
        ))}
      </form>
    </div>
  );
}
