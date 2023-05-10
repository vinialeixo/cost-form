import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }: { btnText: string }) {
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
        type={"number"}
        text={"Selecione a categoria"}
        handleOnChange={undefined}
        name={"category_id"}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
