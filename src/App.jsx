import './App.css';
import Scroll from './components/Scroll';

function App() {
  return (
    <div class="pt-8 text-base font-semibold leading-7">
      <h1 className = "text-center text-sky-500 hover:text-sky-600">
          Hello World
      </h1>
      <p className='text-left text-stone-900'>
        This is my resume. It is amazing. You will see my power!!!
      </p>
      <Scroll></Scroll>
    </div>
  );
}

export default App;
