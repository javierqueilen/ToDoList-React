import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  let nombreRef = useRef(null);
  const [tarea, setTarea] = useState ([]);

  //AGREGAR TAREA CON ENTER
  const AddTarea = (e) => {
    /*2da forma/ if (e.target.value !== "" && e.keyCode === 13) {
      setTarea(prevState => {
        return [...prevState, e.target.value]
      })
    }*/
    if (e.keyCode === 13 && nombreRef.value !== ""){
      setTarea(tarea.concat(nombreRef.value));
      nombreRef.value="";
    }
  }
  //AGREGAR TAREA CON BOTON
  const AddTareaB = (e) => {
    if (nombreRef.value !== "")
      setTarea(tarea.concat(nombreRef.value));
      nombreRef.value="";
      /*2da forma/ setTarea (prevState => {
        return [...prevState, materia]
      })*/ 
  }
  //ELIMINAR TAREA
  /*const DeleteTarea = (e, index) => {
    setTarea(...prevState => {
      return {...prevState, tarea:prevState.slice(index,1)}
    })
  }*/
  const DeleteTarea = (index) => {
    tarea.splice(index,1);
    setTarea([...tarea]);
  };


  return (
    <div className="container">
      <div class="card mt-5">
        <div class="card-body">
          <h5 class="card-title text-center">To Do List </h5>
          <ul class="list-group list-group-flush">
            <div class="input-group mb-3 list-group list-group-flush">
              <input onKeyUp={AddTarea} ref={r => nombreRef =r} type="text" id="input" class="list-group-item" placeholder="What needs to be done?" />
                  <div class="input-group-append list-group list-group-flush">
                    <button onClick={AddTareaB} className="btn btn-outline-secondary" type="button" id="button">Add</button>
                  </div>
            </div>
            {
              
              !!tarea.length > 0 &&
              tarea.map((valor, index) => {
                return (
                  <li class="list-group-item"key={index}>{valor} <i className="fas fa-trash float-right" id="eliminar" onClick={() => DeleteTarea(index)}></i></li>
                )
              })
            }
          </ul>
        </div>
        <div class="card-footer text-muted">
          Nº de tareas {tarea.length}
        </div>
      </div>
    </div>



  );
}

export default App;



