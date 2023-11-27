import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<User>();

  useEffect(() => {
    fetch(`http://localhost:3333/users/${id}`).then((response) => {
      response.json().then((user) => {
        setData(user);
      });
    });
  }, []);

  return (
    <ul>
      <li>{data?.id}</li>
      <li>{data?.name}</li>
    </ul>
  );
}
