import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectChart = ({ projects }) => {

    const statusCounts = projects.reduce((counts, project) =>{
        counts[project.status] = (counts[project.status] || 0) + 1;
        return counts;
    }, {});

    const data = {
        labels: ["Em Progresso", "Aguardando", "Em Desenvolvimento", "Concluido"],
        datasets: [
            {
                label: "Quantidade de Projetos",
                data:[
                    statusCounts["Em Progresso"] || 0,
                    statusCounts["Aguardando"] || 0,
                    statusCounts["Em Desenvolvimento"] || 0,
                    statusCounts["Concluido"] || 0,
                ],
                backgroundColor: [
                    'rgba(75, 192, 192,)',
                    'rgba(255, 206, 86,)',
                    'rgba(54, 162, 235, )',
                    'rgb(255, 194, 199)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 194, 199, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y:{
                beginAtZero: true,
            },
        },
    };

    return(
        <div>
            <h2 className="chart__title">Gráfico de Projetos por Status</h2>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default ProjectChart;