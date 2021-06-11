
import {useState} from 'react';
import './App.sass';



function App() {


  const notas = [
    {
      nombre: 'Do',
      link: require('./notes/do.wav'),
      sostenido : true
    },
    {
      nombre: 'Re',
      link: require('./notes/re.wav'),
      sostenido : true
    },
    {
      nombre: 'Mi',
      link: require('./notes/mi.wav')
    },
    {
      nombre: 'Fa',
      link: require('./notes/fa.wav'),
      sostenido : true
    },
    {
      nombre: 'Sol',
      link: require('./notes/sol.wav'),
      sostenido : true
    },
    {
      nombre: 'La',
      link: require('./notes/la.wav'),
      sostenido : true
    },
    {
      nombre: 'Si',
      link: require('./notes/si.wav')
    }
  ]

  const handleClickNote = nota =>{
    // console.log(notas[0].link.default)
    console.log(nota);
    console.log(nota.nombre);

    setSonando(nota.nombre);
    const sonido = new Audio(nota.link.default);
    sonido.play();
  }

  //Hook UseState
  const [click, setClick] = useState(0);
  const [sonando, setSonando] = useState("");

  const handleClickCount = () => {
     setClick(click + 1);
  }
  console.log(click);

  // let click = 0;

  // const handleClickCount = () => {
  //   console.log(click);
  //   click = click + 1;
  // }

  setTimeout(() => {
    setSonando('')
  },300
  )  

  return (
    <div >
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Male</h2>
        <h3 className='msj'>{sonando}</h3>
        <button onClick={handleClickCount}>Has dado {click} click</button>
      </div>
      <div className="container">
        {notas.map(nota => (
          <div 
            key={Math.random() * 100}
            className={`nota ${sonando === nota.nombre && 'sonando'}`} 
            onClick={()=>handleClickNote(nota)}
          >
            {nota.sostenido && <div className="negra"></div>}
          </div>
        ))}
        {/* <div className="nota" onClick={handleClickNote}>
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div>
        <div className="nota">
          <div className="negra"></div>
        </div><div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div> */}
      </div>
    </div>
  );
}

export default App;
