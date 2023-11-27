import { Container } from "@chakra-ui/react";
import Head from "next/head";
import UserList from "../../../components/UserList";

export default function Users() {
  return (
    <>
      <Head>
        <title>KT Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        minH={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <UserList />
      </Container>
    </>
  );
}
