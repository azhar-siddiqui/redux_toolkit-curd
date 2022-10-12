import React from "react";
import Edit from "../assets/svg/edit.svg";
import Delete from "../assets/svg/delete.svg";
import ButtonField from "../components/ButtonField";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  // const users = [
  //   {
  //     id: "1",
  //     name: "Jhon Doe",
  //     email: "jhon@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Amanda Cerny",
  //     email: "amanda@gmail.com",
  //   },
  // ];

  const handleRemoveuser = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  const renderCart = () =>
    users.map((user, i) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={i}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`/edit-user/${user.id}`}>
            <ButtonField
              children={<img src={Edit} alt="editIcons" className="w-7" />}
            />
          </Link>
          <ButtonField
            children={
              <img
                src={Delete}
                alt="deleteIcons"
                className="w-7"
                onClick={() => {
                  handleRemoveuser(user.id);
                }}
              />
            }
          />
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-user">
        <ButtonField children={"Add User"} />
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCart()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
