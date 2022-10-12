import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import InputField from "../components/InputField";
import { editUser } from "../redux/userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name: name,
    email: email,
  });
  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    console.log(values);
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 mx-w-xl mx-auto">
      <InputField
        label={"Name"}
        value={values.name}
        onChange={(e) => {
          setValues({ ...values, name: e.target.value });
        }}
        inputProp={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <InputField
        label={"Email"}
        value={values.email}
        onChange={(e) => {
          setValues({ ...values, email: e.target.value });
        }}
        inputProp={{ type: "email", placeholder: "jhon@gmail.com" }}
      />
      <ButtonField children={"Edit"} onClick={handleEditUser} />
    </div>
  );
};

export default EditUser;
