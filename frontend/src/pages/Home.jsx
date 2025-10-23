import React, { useContext } from 'react';
import Nav from '../Component/Nav';
import Card from '../Component/Card';
import { listingDataContext } from '../Context/ListingContext';

function Home() {
  const { newListData } = useContext(listingDataContext);

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="w-[100vw] h-[50vh] bg-gradient-to-b from-[#8b4545] to-[#5c2e2e] relative overflow-hidden mt-[165px]">
        {/* Background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

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
        {newListData && newListData.length > 0 ? (
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