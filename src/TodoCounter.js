import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
      <h1 className = "TodoCounter">
        Haz completado {completed} de {total} TODOS
      </h1>  
    );
}

export {TodoCounter};