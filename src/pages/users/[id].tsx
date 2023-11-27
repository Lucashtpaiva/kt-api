import { Container } from "@chakra-ui/react";
import Head from "next/head";
import UserDetails from "../../../components/UserDetails";

export default function User() {
  return (
    <>
      <Head>
        <title>KT User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        minH={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <UserDetails />
      </Container>
    </>
  );
}
