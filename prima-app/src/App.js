import './App.css';
import CambiaNome from './CambiaNome';
import FetchComponent from './FetchComponent';
import LoginForm from './LoginForm';
import RenderCondizionale from './renderCondizionale';


function App() {
  return (
    <div className="App">
      <CambiaNome></CambiaNome>
      <LoginForm></LoginForm>
      <RenderCondizionale></RenderCondizionale>
      <FetchComponent></FetchComponent>
    </div>
  );
}

export default App;