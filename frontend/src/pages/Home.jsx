import React, { useContext } from 'react';
import Nav from '../Component/Nav';
import Card from '../Component/Card';
import { listingDataContext } from '../Context/ListingContext';

function Home() {
  const { newListData, listingLoading } = useContext(listingDataContext);

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div
        className="w-[100vw] h-[50vh] bg-cover bg-center relative overflow-hidden mt-[165px]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 69, 0.6), rgba(92, 46, 46, 0.6)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=600&fit=crop')`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-[20px] z-10">
          <h1 className="text-[42px] md:text-[56px] font-bold text-white mb-[15px] leading-tight">
            Discover Your Perfect Stay
          </h1>
          <p className="text-[16px] md:text-[20px] text-gray-100 max-w-[600px]">
            Explore unique properties and book your next adventure with us
          </p>
        </div>
      </div>

      {/* Listings Section */}
      <div className="w-[100vw] flex items-center justify-center gap-[25px] flex-wrap py-[50px] px-[20px] bg-white">
        {listingLoading ? (
          <div className="flex flex-col items-center justify-center py-[80px] gap-[20px]">
            {/* Spinner Animation */}
            <div className="relative w-[60px] h-[60px]">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#eb6262] border-r-[#eb6262] rounded-full animate-spin"></div>
            </div>
            <p className="text-[18px] text-gray-600 font-semibold">Loading listings...</p>
          </div>
        ) : newListData && newListData.length > 0 ? (
          newListData.map((list) => (
            <Card
              key={list._id} // Added unique key prop
              title={list.title}
              landMark={list.landMark}
              city={list.city}
              image1={list.image1}
              image2={list.image2}
              image3={list.image3}
              rent={list.rent}
              id={list._id}
              ratings={list.ratings}
              isBooked={list.isBooked}
              host={list.host}
            />
          ))
        ) : (
          <div className="text-center py-[40px]">
            <p className="text-[20px] text-gray-600">No listings available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;