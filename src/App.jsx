import Navbar from './component/Navbar';
import im from './gallery-04.png'
function App() {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 h-screen w-full">
        <Navbar></Navbar>
        <div className="w-full h-full flex flex-row ">
          <div className="w-1/5 h-full bg-gray-600">
            <ul className="  text-white font-bold no-underline text-xl p-4 capitalize">
                <li>home </li>
                <li>about </li>
                <li>contact </li>
            </ul>
          </div>

          
            <div className="w-3/4  grid gap-10 xl:grid-cols-3 lg:grid-cols-2 gap-0">

              <div className=" card "   >
                <img src={im} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Lorem, ipsum dolor.</span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">25 MIN</span>
              </div>

              <div className=" card"   >
                <img src={im} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Lorem, ipsum dolor.</span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">25 MIN</span>
              </div>

              <div className=" card"   >
                <img src={im} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Lorem, ipsum dolor.</span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">25 MIN</span>
              </div>
            </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
