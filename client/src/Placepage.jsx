
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Placepage() {
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);

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
            <div className="text-gray-400">Title for your place. should be short and catchy as in advertisement</div>
            <input value={title} id="title" onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="title" className="text-sm">Address</label>
            <div className="text-gray-400">Address to this place.</div>
            <input value={address} onChange={(e)=>setAddress(e.target.value)} id="address" type="text" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="checkInDate" className="text-sm">Check-in Date</label>
            <input value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} id="checkInDate" type="date" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="checkOutDate" className="text-sm">Check-out Date</label>
            <input value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} id="checkOutDate" type="date" className="w-full p-3 rounded bg-gray-100" />
        </div>
        <div>
            <label htmlFor="numberOfGuests" className="text-sm">Number of Guests</label>
            <input value={maxGuests} onChange={(e)=>setMaxGuests(e.target.value)} id="numberOfGuests" type="number" min="1" className="w-full p-3 rounded bg-gray-100" />
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
        <br></br>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://assets.cntraveller.in/photos/60ba23dd0f3a5367ec9fe87a/master/w_1600%2Cc_limit/RAJ-Rambagh-Palace-Jaipur-1.jpg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0c/38/09/castle-mandawa-hotel.jpg?w=900&h=-1&s=1" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://www.tripsavvy.com/thmb/LgjP7gi2dRaw-aTg8YQgjyp9eG4=/2121x1413/filters:fill(auto,1)/GettyImages-95648116-5c6b61ba46e0fb0001560e17.jpg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/originals/74/2f/c5/742fc53dce9541d722b17c0de3b51ed4.jpg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/originals/a5/c2/ef/a5c2ef2a74a54e51a61e644cbd8728fa.jpg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://pix10.agoda.net/hotelImages/4865309/0/43fc597b2fe742f5fbc646be0c4f391b.jpg?s=1024x768" alt="" />
    </div>
</div>
<br></br>

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
// import {Link} from "react-router-dom";
// import {Perks} from "./Perks";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import {Navigate, useParams} from "react-router-dom";

// export default function PlacesFormPage() {
//   const {id} = useParams();
//   const [title,setTitle] = useState('');
//   const [address,setAddress] = useState('');
//   const [addedPhotos,setAddedPhotos] = useState([]);
//   const [description,setDescription] = useState('');
//   const [perks,setPerks] = useState([]);
//   const [extraInfo,setExtraInfo] = useState('');
//   const [checkIn,setCheckIn] = useState('');
//   const [checkOut,setCheckOut] = useState('');
//   const [maxGuests,setMaxGuests] = useState(1);
//   const [price,setPrice] = useState(100);
//   const [redirect,setRedirect] = useState(false);
//   useEffect(() => {
//     if (!id) {
//       return;
//     }
//     axios.get('/places/'+id).then(response => {
//        const {data} = response;
//        setTitle(data.title);
//        setAddress(data.address);
//        setAddedPhotos(data.photos);
//        setDescription(data.description);
//        setPerks(data.perks);
//        setExtraInfo(data.extraInfo);
//        setCheckIn(data.checkIn);
//        setCheckOut(data.checkOut);
//        setMaxGuests(data.maxGuests);
//        setPrice(data.price);
//     });
//   }, [id]);
//   function inputHeader(text) {
//     return (
//       <h2 className="text-2xl mt-4">{text}</h2>
//     );
//   }
//   function inputDescription(text) {
//     return (
//       <p className="text-gray-500 text-sm">{text}</p>
//     );
//   }
//   function preInput(header,description) {
//     return (
//       <>
//         {inputHeader(header)}
//         {inputDescription(description)}
//       </>
//     );
//   }

//   async function savePlace(ev) {
//     ev.preventDefault();
//     const placeData = {
//       title, address, addedPhotos,
//       description, perks, extraInfo,
//       checkIn, checkOut, maxGuests, price,
//     };
//     if (id) {
//       // update
//       await axios.put('/places', {
//         id, ...placeData
//       });
//       setRedirect(true);
//     } else {
//       // new place
//       await axios.post('/places', placeData);
//       setRedirect(true);
//     }

//   }

//   if (redirect) {
//     return <Navigate to={'/account/places'} />
//   }

//   return (
//     <div>
//        <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
//        <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-white bg-red-600" to={'/account'}>
//          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
//         </svg>
//         My profile
//      </Link>
//      <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-white bg-red-600" to={'/account/bookings'}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
//         </svg>
//         My bookings
//       </Link>
//       <Link className="inline-flex gap-1 py-2 px-6 rounded-full bg-primary text-black bg-white" to={'/account/places'}>
//        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
//          </svg>
//        My accommodations
//       </Link>
//     </nav>
//       <form onSubmit={savePlace}>
//         {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
//         <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
//         {preInput('Address', 'Address to this place')}
//         <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
//         {preInput('Photos','more = better')}
//         {preInput('Description','description of the place')}
//         <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
//         {preInput('Perks','select all the perks of your place')}
//         <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//        <Perks/>
//         </div>
//         {preInput('Extra info','house rules, etc')}
//         <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
//         {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')}
//         <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
//           <div>
//             <h3 className="mt-2 -mb-1">Check in time</h3>
//             <input type="text"
//                    value={checkIn}
//                    onChange={ev => setCheckIn(ev.target.value)}
//                    placeholder="14"/>
//           </div>
//           <div>
//             <h3 className="mt-2 -mb-1">Check out time</h3>
//             <input type="text"
//                    value={checkOut}
//                    onChange={ev => setCheckOut(ev.target.value)}
//                    placeholder="11" />
//           </div>
//           <div>
//             <h3 className="mt-2 -mb-1">Max number of guests</h3>
//             <input type="number" value={maxGuests}
//                    onChange={ev => setMaxGuests(ev.target.value)}/>
//           </div>
//           <div>
//             <h3 className="mt-2 -mb-1">Price per night</h3>
//             <input type="number" value={price}
//                    onChange={ev => setPrice(ev.target.value)}/>
//           </div>
//         </div>
//         <button className="primary my-4">Save</button>
//       </form>
//     </div>
//   );
// }
