
import './Head.css'
const Head = () => {
  return (
    <div>
        <div className="flex">
  <div className="w-3/4 py-16 px-12 justify-items-center m-15">
    <h1 className="text-5xl font-bold">Find Places To Stay</h1>
    <br></br>
    <h2 className='text-2xl font-light'>Discover entire homes and rooms perfect for any trip.</h2>
    <br></br>
    <button className="bg-transparent hover:bg-red-400 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
  Book Now
</button>
  </div>
  <div className="w-1/2 py-16 px-12 h-1/2 ">
    <img className="h-781 w-781" src="https://ugokawaii.com/wp-content/uploads/2023/04/plane.gif"></img>
  </div>
</div>
  <div className="flex">
  <div className="w-1/2 py-16 px-8 justify-items-center">
  <img className="h-781 w-781" src="https://static.wixstatic.com/media/2acacf_e6ac84adf24a466f93ae6f27ac9bfa6e~mv2.gif"></img>
  </div>
  </div>

      
    </div>
  )
}

export default Head
