import React, { useContext } from 'react'
import { userDataContext } from '../Context/UserContext'
import { listingDataContext } from '../Context/ListingContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { useState } from 'react';
import { bookingDataContext } from '../Context/BookingContext';

function Card({ title, landMark, image1, image2, image3, rent, city, id, ratings, isBooked, host }) {
    let navigate = useNavigate()
    let { userData } = useContext(userDataContext)
    let { handleViewCard } = useContext(listingDataContext)
    let [popUp, setPopUp] = useState(false)
    let {cancelBooking}=useContext(bookingDataContext)
    const handleClick = () => {
        if (userData) {
            handleViewCard(id)
        }
        else {
            navigate("/login")
        }
    }
    return (
        <div className='w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-[16px] cursor-pointer relative z-[10] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden' onClick={() => !isBooked ? handleClick() : null}>

            {isBooked && <div className='text-[green] bg-white rounded-[12px] absolute flex items-center justify-center right-3 top-3 gap-[5px] px-[8px] py-[6px] shadow-md'><GiConfirmed className='w-[18px] h-[18px] text-[green]' />Booked</div>}
            {isBooked && host == userData?._id && <div className='text-[red] bg-white rounded-[12px] absolute flex items-center justify-center right-3 top-[65px] gap-[5px] px-[8px] py-[6px] shadow-md cursor-pointer hover:shadow-lg' onClick={()=>setPopUp(true)} ><FcCancel className='w-[18px] h-[18px]' />Cancel</div>}

            {popUp && <div className='w-[300px] h-[110px] bg-white absolute top-[130px] left-[15px] rounded-[12px] shadow-xl border border-gray-200' >
            <div className='w-[100%] h-[45%] text-[#2e2d2d] flex items-center justify-center rounded-t-[12px] overflow-auto text-[18px] font-semibold p-[10px]'>Cancel Booking?</div>
                <div className='w-[100%] h-[55%] text-[16px] font-semibold flex items-center justify-center gap-[10px] text-[#986b6b] border-t border-gray-200'><button className='px-[18px] py-[6px] bg-red-500 text-white rounded-[8px] hover:bg-red-600 transition-colors' onClick={()=>{cancelBooking(id);setPopUp(false)}}>Yes</button><button className='px-[18px] py-[6px] bg-gray-400 text-white rounded-[8px] hover:bg-gray-500 transition-colors' onClick={()=>setPopUp(false)}>No</button></div>
            </div>}

            <div className='w-[100%] h-[67%] rounded-t-[16px] overflow-hidden flex '>
                <img src={image1} alt="" className='w-[100%] flex-shrink-0 object-cover' />
                <img src={image2} alt="" className='w-[100%] flex-shrink-0 object-cover' />
                <img src={image3} alt="" className='w-[100%] flex-shrink-0 object-cover' />

            </div>
            <div className='w-[100%] h-[33%] px-[16px] py-[16px] flex flex-col gap-[8px] justify-between'>
                <div className='flex items-center justify-between text-[17px]'><span className='w-[75%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434]'>In {landMark.toUpperCase()},{city.toUpperCase()}</span>
                    <span className='flex items-center justify-center gap-[3px] text-[14px]'><FaStar className='text-[#eb6262] w-[16px]' /><span className='font-semibold'>{ratings}</span></span>
                </div>
                <span className='text-[14px] w-[100%] text-ellipsis overflow-hidden text-nowrap text-gray-700'>{title.toUpperCase()} </span>
                <span className='text-[16px] font-bold text-[#c66363]'>₹{rent}/day</span>
            </div>

        </div>
    )
}

export default Card
