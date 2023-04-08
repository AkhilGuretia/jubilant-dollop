import { useState } from "react";
import ProductList from "./ProductList";
import userService, { User } from "../Services/userService";
import useUsers from "../../hooks/useUsers";

const Backend = () => {
  const [name, setName] = useState("");
  const { users, err, isLoading, setUsers, setErr } = useUsers();
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Indiana Jones" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setErr(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((err) => {
      setErr(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setErr(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <div>
        {err && <p className="text-danger">{err}</p>}
        {isLoading && <div className="spinner-border"></div>}
        <button onClick={addUser} className="btn btn-primary mb-2">
          Add
        </button>
        <ul className="list-group mb-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  onClick={() => updateUser(user)}
                  className="btn btn-outline-secondary mx-1"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUser(user)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <label htmlFor="Choose Name" className="for-label">
          Choose Name
        </label>
        <select
          id="Choose Name"
          className="form-select"
          onChange={(event) => setName(event.target.value)}
        >
          <option value=""></option>
          <option value="French Montana">French montana</option>
          <option value="Posty's Universe">Posty's universe</option>
          <option value="Cardi B">Cardi B</option>
        </select>
        <ProductList effectHookDemo={name} />
      </div>
    </>
  );
};

export default Backend;
