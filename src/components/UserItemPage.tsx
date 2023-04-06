import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
  [id: string]: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useNavigate();

  useEffect(() => {
    fetchUser();
  });

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => history("/users")}>Back</button>
      <h1>{user?.name} user page</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.city} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
