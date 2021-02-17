import Button from '@material-ui/core/Button';
//import Link from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Navbar from './components/Navbar'
import Endbar from './components/Endbar'
import LeftDraw from './components/LeftDraw'
import Content from './components/Content';

function App() {
  const [test, setTest] = useState('');

  const handleChange = e => {
    console.log(e.target.value)
    setTest(e.target.value);
  }

  return (
    <div>
        <Navbar test={test} handleChange={handleChange} />
        <LeftDraw />
        {/* <div style={{ marginLeft: '15vh'}}>
          <Link to='/hola' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button variant="contained" color="secondary" >
                TO HOLA!
              </Button>
          </Link>
          <hr/>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button variant="contained" color="secondary" >
                TO HOME!
              </Button>
          </Link>
        </div> */}
        <Content />
        <Endbar />
    </div>
  );
}

export default App;
