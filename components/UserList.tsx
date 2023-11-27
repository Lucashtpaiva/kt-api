import { Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function UserList() {
  const [data, setData] = useState<User[]>();
  useEffect(() => {
    fetch("http://localhost:3333/users").then((response) => {
      response.json().then((users) => {
        setData(users);
      });
    });
  }, []);

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}
