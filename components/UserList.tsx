import { Link } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function UserList() {
  // const [data, setData] = useState<User[]>();
  // useEffect(() => {
  //   fetch("http://localhost:3333/users").then((response) => {
  //     response.json().then((users) => {
  //       setData(users);
  //     });
  //   });
  // }, []);

  const [data, setData] = useState<User[]>();

  useEffect(() => {
    axios
      .get("http://localhost:3333/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const { data } = useFetch<User[]>("http://localhost:3333/users");

  // if (!data) {
  //   return <p>carregando...</p>;
  // }

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}
