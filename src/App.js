import "./App.css";
import GifComponent from "./component/GifComponent";

function App() {

  return (
    <div className="min-h-screen max-w-[100vw] background flex flex-col gap-10 items-center p-10">

      <h1 className="w-11/12 bg-slate-50 text-xl lg:text-3xl mb-10 p-4 text-center font-bold rounded-2xl border">RANDOM GIFS</h1>

      <GifComponent className='bg-green-400'/>

      <GifComponent className="bg-blue-400" isInputGif={true}/>

    </div>
  );
}

export default App;
