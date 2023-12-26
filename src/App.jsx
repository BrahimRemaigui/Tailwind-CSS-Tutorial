import Navbar from './component/Navbar';
import im from './gallery-04.png'
import im2 from './imgs/mexican_bean_stew_75910_16x9.jpg'
import im3 from './imgs/Mexican-chilli-and-bean-stew.jpg'
import im4 from './imgs/3-bean-chilli-2.jpg'
import imlogo from './imgs/logo.png'
import { useState } from 'react';
function App() {
  const [ButtonShowIsClicked, isClisckButt] = useState(false)
  const togglevisibility =()=>{
    isClisckButt(!ButtonShowIsClicked)
  }
  const show =ButtonShowIsClicked===false?"show more ":"show less"
  return (
    <>
      <div className="bg-white dark:bg-slate-800 w-full h-full">
        <div className="w-full h-full flex flex-row md:flex-col md:w-full  ">
          <div className="w-[20%] " >
            <ul className="w-1/6 z-10 min-h-screen md:min-h-fit bg-gray-600 md:w-full  fixed text-white font-bold no-underline text-xl py-4 capitalize md:w-full md:flex md:justify-start md:py-1 ">


              <img src={imlogo} className=" w-30 h-20  mt-4 mb-8 mx-auto md:h-12 md:w-14 md:mr-auto md:my-2 md:mx-4" ></img>
              <div className="w-full h-px m1-0 bg-white md:hidden ">
              </div>

              <a className="bare2">
                <li className='flex' >
                  <svg data-slot="icon" fill="none" className="w-5 mr-4 ml-4 text-2xl md:hidden" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                  </svg>
                  home
                </li>
              </a>

              <a href="" className="bare2">
                <li className="flex" >  <svg data-slot="icon" className="w-5 mr-4 ml-4 text-2xl md:hidden " fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path>
                </svg>  about </li>
              </a>

              <a href="" className="bare2">
                <li className="flex">
                  <svg data-slot="icon" fill="none" stroke-width="1.5" className="w-5 mr-4 ml-4 text-2xl md:hidden" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                  </svg> contact </li>
              </a>
              <div className="w-full h-px m1-0 bg-white md:hidden md:items-center"></div>
              <div className="flex flex-col justify-start md:flex-row my-2 visible sm:hidden" >
                <button className="flex flex-row mx-4 my-2 items-center "> 
                <svg dataSlot="icon" fill="none" strokeWidth={1.5} className="w-5 mr-4 mt-1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                  Login</button>
                  <button  className=" flex flex-row mx-4 my-2 items-center "> 
                  <svg dataSlot="icon" fill="none" strokeWidth={1.5} className="w-5 mr-4 mt-1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  Sig up</button>
              </div>
             
            </ul>


          </div>

          {//grid parte
          }
          <div className="w-11/12 h-fit dark:bg-slate-800">

            <h1 className="font-body text-white text-4xl font-bold mx-10 my-20 border-b-2 pb-5 border-gray-500  ">Remaigui Food </h1>
            <div className="text-2xl font-semibold mx-10 text-white">The Muno</div>
            <div className="grid gap-4 w-11/12  xl:grid-cols-3 lg:grid-cols-2 ">
              <div className=" card "   >
                <img src={im2} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Mexican Bean </span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                  <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  25 MIN</span>
              </div>

              <div className=" card"   >
                <img src={im3} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Mexican chillibean.</span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                  <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  25 MIN</span>
              </div>

              <div className=" card"   >
                <img src={im4} alt="" className="h-40 w-full object-cover" />
                <span className="font-bold mx-1 mt-4">Bean Chilli.</span>
                <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                  <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  25 MIN</span>
              </div>
              {ButtonShowIsClicked && <>
                <div className=" card "   >
                  <img src={im2} alt="" className="h-40 w-full object-cover" />
                  <span className="font-bold mx-1 mt-4">Mexican Bean </span>
                  <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                  <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                    <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    25 MIN</span>
                </div>

                <div className=" card"   >
                  <img src={im3} alt="" className="h-40 w-full object-cover" />
                  <span className="font-bold mx-1 mt-4">Mexican chillibean.</span>
                  <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                  <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                    <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    25 MIN</span>
                </div>

                <div className=" card"   >
                  <img src={im4} alt="" className="h-40 w-full object-cover" />
                  <span className="font-bold mx-1 mt-4">Bean Chilli.</span>
                  <span className="block m-1 text-gray-500 text-sm object-cover">Lorem ipsum dolor sit amet.</span>
                  <span className="flex  font-bold bg-gray-300 p-2 rounded-full absolute top-0 mt-2 ml-2">
                    <svg dataSlot="icon" className="w-6" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    25 MIN</span>
                </div>

              </>}
            </div>





            <div className='w-full flex justify-center'>
              <button className="w-fit bg-gray-600 px-5 uppercase ml- py-2 text-white font-semibold text-sm hover: rounded-full text-start
              hover:text-gray-400 hover:font-bold duration-100 mb-10" onClick={() => { isClisckButt(!ButtonShowIsClicked) }}>{show}</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
