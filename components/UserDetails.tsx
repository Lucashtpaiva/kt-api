import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function UserDetails() {
  const router = useRouter();

  const [data, setData] = useState<User>();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    fetch(`http://localhost:3333/users/${id}`).then((response) => {
      response.json().then((user) => {
        setData(user);
      });
    });
  }, [router.isReady]);

  return (
    <ul>
      <li>{data?.id}</li>
      <li>{data?.name}</li>
    </ul>
  );
}
