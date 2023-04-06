import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/todos"}>Todos List</NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
          <Route path={"/todos/:id"} element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
