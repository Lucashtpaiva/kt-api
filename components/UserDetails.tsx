import { useFetch } from "@/pages/api/useFetch";
import { useRouter } from "next/router";

type User = {
  id: string;
  name: string;
};

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  // const [data, setData] = useState<User>();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { id } = router.query;
  //   fetch(`http://localhost:3333/users/${id}`).then((response) => {
  //     response.json().then((user) => {
  //       setData(user);
  //     });
  //   });
  // }, [router.isReady]);

  const { data } = useFetch<User>(`http://localhost:3333/users/${id}`);

  if (!data) {
    return <p>carregando...</p>;
  }

  return (
    <ul>
      <li>{data?.id}</li>
      <li>{data?.name}</li>
    </ul>
  );
}
