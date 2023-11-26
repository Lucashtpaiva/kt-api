import { Flex, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function UserList() {
  const { register, setValue } = useForm();

  function onBlurCep(ev: any) {
    const { value } = ev.target;
    if (value?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${value}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
      });
  }

  return (
    <>
      <Flex flexDirection={"column"} gap={4} width={"100%"}>
        <Input placeholder="CEP" {...register("cep")} onBlur={onBlurCep} />
        <Input placeholder="Logradouro" {...register("address")} />
        <Input placeholder="Bairro" {...register("neighborhood")} />
        <Input placeholder="Cidade" {...register("city")} />
        <Input placeholder="UF" {...register("uf")} />
      </Flex>
    </>
  );
}
