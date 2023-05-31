export const Functions = () => {
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
};
