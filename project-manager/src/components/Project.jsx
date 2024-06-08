import React, {useState} from 'react';

const Project = ({project, removeProject, updateProjectStatus}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newStatus, setNewStatus] = useState(project.status);

    const handleStatusChange =(event) => {
        setNewStatus(event.target.value);
    }

    const saveStatus = () =>{
        updateProjectStatus(project.id, newStatus);
        setIsEditing(false);
    }

    return(
            <div className="project">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Projeto</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td-text">{project.text}</td>
                            <td>
                                {isEditing ? (
                                    <select value={newStatus} onChange={handleStatusChange}>
                                        <option value="Em Progresso">Em Progresso</option>
                                        <option value="Aguardando">Aguardando</option>
                                        <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                                        <option value="Concluido">Concluído</option>
                                    </select>       
                                ) : (
                                    project.status
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="remove" onClick={() => removeProject(project.id)}>X</button>
                    {isEditing ? (
                        <button className="save" onclick={saveStatus}>Salvar</button>
                    ) : (
                        <button className="update" onClick={() => setIsEditing(true)}>Atualizar</button>
                    )}
                </div>
            </div>
    )
}

export default Project