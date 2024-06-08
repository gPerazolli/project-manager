import { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import ProjectForm from './components/ProjectForm';
import Search from './components/Search';
import Filter from './components/Filter';
import Project from './components/Project';
import ProjectChart from './components/ProjectChart';

function App() {

  const [search, setSearch] = useState("");
  const [ filter, setFilter] = useState("all");
  const [ sort, setSort] = useState("asc");
  const [projects, setProjects] = useState([]);

  // Carregar projetos do localStorage ao iniciar a aplicação
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, []);

  // Salvar projetos no localStorage sempre que houver uma alteração
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (text, status) =>{
    
    const newProjects = [
      ...projects,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        status,
      },
    ];

    setProjects(newProjects);
    toast.success('Projeto adicionado com sucesso!');
  }

  const removeProject = (id) =>{
    const newProjects = [...projects];

    const filteredProjects = newProjects.filter((project) => project.id !== id ? project : null)

    setProjects(filteredProjects);
    toast.info("Projeto removido com sucesso!");
  }

  const updateProjectStatus = (id, status) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? {...project, status} : project
    );

    setProjects(updatedProjects);
    toast.success("Status do projeto atualizado com sucesso!");
  };
  
  return (
    <div className="page">
      <div className="app">
        <h1>Lista de Projetos</h1>
        <ProjectForm addProject={addProject}/>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        
        <div className="project-list">
          {projects
          .filter((project) =>
            filter === "all" || project.status === filter
          )
          .filter((project) => 
            project.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          )
          .map((project) => 
            <Project key={project.id} project={project} removeProject={removeProject} updateProjectStatus={updateProjectStatus}/>
          )
          }
        </div>
          <ToastContainer
            autoClose={2000}
          />
      </div>
      <div className="chart">
        <ProjectChart projects={projects}/>
      </div>
    </div>
  );
}

export default App;
