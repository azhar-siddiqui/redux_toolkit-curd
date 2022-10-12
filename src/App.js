import { Route, Routes } from "react-router-dom";
import AddUser from "./screens/AddUser";
import EditUser from "./screens/EditUser";
import UserList from "./screens/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD with redux toolkit
      </h1>

      <Routes>
        <Route path="/" exact element={<UserList />} />
        <Route path="/add-user" exact element={<AddUser />} />
        <Route path="/edit-user/:id" exact element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
