
export default function Navbar() {
  return (
    <div className='h-20 w-screen bg-[#0D1221] text-white flex justify-between items-center pl-12 pr-12'>
      <div className='h-full'>
        <ul className='h-full text-xl flex items-center font-semibold '>
          <li className='text-orange-400 font-bold text-3xl mr-5'>Quizizz</li>
          <a href="" className='hover:text-orange-400 mr-5'><li>Categories</li></a>
          <a href="" className='hover:text-orange-400 mr-5'><li>Bonuses</li></a>
          <a href="" className='hover:text-orange-400 mr-5'><li>Live Quiz</li></a>
          <a href="#" className='hover:text-orange-400 mr-5'><li>Tournaments</li></a>
        </ul>
      </div>
      <div className='h-full flex items-center'>
        <button className='bg-[#1d243d] h-10 w-10 rounded-md text-center mr-3 '><i className="fi fi-rr-search text-gray-400 text-lg "></i></button>
        <button className='bg-[#1d243d] h-10 w-10 rounded-md mr-3'>
          <i className="fi fi-sr-envelope text-gray-400 text-lg "></i></button>

        <button className='bg-[#1d243d] h-10 w-10 rounded-md flex items-center justify-center mr-3'>
          <div className="h-6 w-6 bg-[#0D1221]"><i className="fi fi-sr-user text-gray-400 text-lg text-center "></i></div>
          </button>
        <div className='bg-[#1d243d] h-10 w-36 rounded-md text-center flex flex-col font-semibold p-[6px] mr-3'>
          <div className='flex justify-between'>
            <div className='flex text-[14px]'>
              <i className="fi fi-sr-trophy-star mr-[5px] text-red-500"></i>
              Wood
            </div>
            <div className='text-[14px]'>Level: <span className='text-orange-400'>2</span> </div>
          </div>
          <div className='w-full h-2 bg-[#0D1221] rounded-3xl overflow-hidden'>
            <div className="bg-orange-400 text-white py-1 text-center" style={{ width: "25%" }}></div>
          </div>
        </div>
        <button className='bg-[#1d243d] h-10 w-20 rounded-md text-center text-gray-400 text-xl font-semibold mr-3'>Log in</button>
        <button className='bg-orange-400 h-10 w-20 rounded-md text-center text-lg font-semibold mr-3'>Sign up</button>
        <div className='bg-[#1d243d] h-10 w-24 rounded-md text-center flex items-center justify-center '>
          <select name="languages" id="lang" className='bg-transparent outline-none'>
            <option value="English" selected>English</option>
            <option value="">Hindi</option>
            <option value="">Kannada</option>
            <option value="">Chinese</option>
          </select>
        </div>
      </div>
    </div>
  )
}