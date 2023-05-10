import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }: { btnText: string }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        text={"Nome do Projeto"}
        handleOnChange={undefined}
        name={"name"}
      />

      <Input
        type="number"
        text={"Orcamento do Projeto"}
        name={"budget"}
        placeholder="Insira o orcamento total"
        handleOnChange={undefined}
      />
      <Select
        options={categories}
        text={"Selecione a categoria"}
        name={"category_id"}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
