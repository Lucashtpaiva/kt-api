import { Container } from "@chakra-ui/react";
import Head from "next/head";
import FormAddress from "../../components/FormAddress";

export default function Home() {
  return (
    <>
      <Head>
        <title>KT API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        minH={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FormAddress />
      </Container>
    </>
  );
}
