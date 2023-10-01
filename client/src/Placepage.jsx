
import { Link } from 'react-router-dom'
export default function Placepage() {
  return (
    <>
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-white bg-red-600" to={'/account'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        My profile
      </Link>
      <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-white bg-red-600" to={'/account/bookings'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        My bookings
      </Link>
      <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-black bg-white" to={'/account/places'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
        My accommodations
      </Link>
    </nav>
    <br></br>
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-black">
    <form noValidate="" className="space-y-6">
        <div>
            <label htmlFor="name" className="text-sm">Title</label>
            <div className="text-gray-400">Experience comfort like never before.</div>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="title" className="text-sm">Address</label>
            <div className="text-gray-400">Experience comfort like never before.</div>
            <input id="address" type="text" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="checkInDate" className="text-sm">Check-in Date</label>
            <input id="checkInDate" type="number" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="checkOutDate" className="text-sm">Check-out Date</label>
            <input id="checkOutDate" type="number" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="numberOfGuests" className="text-sm">Number of Guests</label>
            <input id="numberOfGuests" type="number" min="1" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="specialRequests" className="text-sm">Special Requests or Preferences</label>
            <div className="text-gray-400">Experience comfort like never before.</div>
            <textarea id="specialRequests" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
        </div>

        <button type="submit" className="w-full p-3 text-sm font-bold tracking-widest uppercase rounded bg-red-600 text-white">Book Accommodation</button>
    </form>
    <div className="flex flex-col justify-between">
        <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-lg lg:text-5xl text-red-600">Book Your Stay</h2>
            <div className="text-gray-400">Experience comfort like never before.</div>
        </div>
        <div className="flex w-full justify-center">
    <div id="multi-upload-button"
         className="inline-flex items-center px-4 py-2 bg-red-600 border border-red-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
        Click to browse
    </div>
    <div className="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
        <span id="multi-upload-text" className="p-2"></span>
        <button id="multi-upload-delete" className="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-700 w-3 h-3" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
        </button>
    </div>
</div>
        <img src="https://i.pinimg.com/originals/4d/e8/65/4de865d02e3199e9ad2787ce6629ea18.gif" alt="Accommodation" />
    </div>
</div>
    </>
  )
}
