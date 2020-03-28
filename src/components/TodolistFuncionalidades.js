import React, { useState,  useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './CSS/TodolistFuncionalidades.css'
import 'font-awesome/css/font-awesome.min.css'
export default function TodolistFuncionalidades(){
    
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('to-do-list')) || []);

    function registrarInputCambios(e){
        e.preventDefault();
        setNuevaTarea(e.target.value)
    }

    function nuevatodo(e){
        e.preventDefault();
        if(nuevaTarea ==='') return alert("Campo vacio")
        setTareas([...tareas, {id: uuidv4(), text:nuevaTarea}])
       
        e.target.reset();
    }

    function eliminarTarea(id){
        setTareas(tareas.filter((tarea) => tarea.id !== id))

    }

    useEffect(() => {
        // Guardo peliculas en el LocalStorage
        localStorage.setItem('to-do-list',JSON.stringify(tareas));
     }, [tareas])

    return(
        <div className="container todolist m-auto">
            <h3><span>TO-DO-LIST</span></h3>
                        <form onSubmit={nuevatodo}> 
                <input type="text" className="form-control" placeholder="Ingrese una tarea" onChange={registrarInputCambios}></input>
                <ul className="lista">
                {tareas.map((tarea) =>
                <li className="tarea" key={tarea.id}>{tarea.text}
                <a  type="button" className="btn " href="" onClick={()=>eliminarTarea(tarea.id)} > <i className="fa fa-trash-o" aria-hidden="true"></i>  </a>
                {/* <button type="submit" onClick={()=>eliminarTarea(tarea.id)}>x</button> */}
                </li>
                )}

                </ul>
         </form>
        </div>

    )

    
}