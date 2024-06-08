 const Filter = ({filter, setFilter, setSort}) =>{
    return(
        <div className="filter">
            <h2>Filtrar:</h2>

            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">Todas</option>
                        <option value="Em Progresso">Em Progresso</option>
                        <option value="Aguardando">Aguardando</option>
                        <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                        <option value="Concluido">Concluído</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button onClick ={() => setSort("asc")}>A-Z</button>
                    <button onClick ={() => setSort("desc")}>Z-A</button>
                </div>
            </div>
        </div>
    )
 }

 export default Filter