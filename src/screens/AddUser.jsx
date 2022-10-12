import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import InputField from "../components/InputField";
import { addUser } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
  });
  const handleAddUser = () => {
    setvalues({ name: "", email: "" });
    // console.log(values);
    dispatch(
      addUser({
        id: uuidv4(),
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
          setvalues({ ...values, name: e.target.value });
        }}
        inputProp={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <InputField
        label={"Email"}
        value={values.email}
        onChange={(e) => {
          setvalues({ ...values, email: e.target.value });
        }}
        inputProp={{ type: "email", placeholder: "jhon@gmail.com" }}
      />
      <ButtonField children={"Submit"} onClick={handleAddUser} />
    </div>
  );
};

export default AddUser;
