import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  function createPost(project: { cost: number; services: { name: string }[] }) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os servicos</p>
      <ProjectForm handleSubmit={createPost} btnText={"Criar Projeto"} />
    </div>
  );
}
export default NewProject;
