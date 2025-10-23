import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authDataContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const listingDataContext = createContext();

function ListingContext({ children }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [category, setCategory] = useState('');
  const [adding, setAdding] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [newListData, setNewListData] = useState([]);
  const [cardDetails, setCardDetails] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [refresh, setRefresh] = useState(false); // Added for better dependency management

  const { serverUrl } = useContext(authDataContext);

  const handleAddListing = async () => {
    setAdding(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image1', backEndImage1);
      formData.append('image2', backEndImage2);
      formData.append('image3', backEndImage3);
      formData.append('description', description);
      formData.append('rent', rent);
      formData.append('city', city);
      formData.append('landMark', landmark);
      formData.append('category', category);

      const result = await axios.post(`${serverUrl}/api/listing/add`, formData, { withCredentials: true });
      setAdding(false);
      console.log(result);
      navigate('/');
      toast.success('Listing added successfully');
      resetFormFields();
      setRefresh(!refresh); // Trigger re-fetch
    } catch (error) {
      setAdding(false);
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to add listing');
    }
  };

  const handleViewCard = async (id) => {
    try {
      const result = await axios.get(`${serverUrl}/api/listing/findlistingbyid/${id}`, { withCredentials: true });
      console.log(result.data);
      setCardDetails(result.data);
      navigate('/viewcard');
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch listing details');
    }
  };

  const handleSearch = async (data) => {
    if (!data || data.trim() === '') {
      //console.warn('Search query is empty. Skipping API call.');
      setSearchData([]); // Clear search results if query is empty
      return;
    }
  
    try {
      const result = await axios.get(`${serverUrl}/api/listing/search?query=${data}`);
      setSearchData(result.data);
    } catch (error) {
      setSearchData([]); // Clear search results on error
      console.error('Error during search:', error.response?.data?.message || error.message);
    }
  };

  const getListing = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/listing/get`, { withCredentials: true });
      setListingData(result.data);
      setNewListData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const resetFormFields = () => {
    setTitle('');
    setDescription('');
    setFrontEndImage1(null);
    setFrontEndImage2(null);
    setFrontEndImage3(null);
    setBackEndImage1(null);
    setBackEndImage2(null);
    setBackEndImage3(null);
    setRent('');
    setCity('');
    setLandmark('');
    setCategory('');
  };

  useEffect(() => {
    getListing();
  }, [refresh]); // Trigger re-fetch when refresh changes

  const value = {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
    handleAddListing,
    setAdding,
    adding,
    listingData,
    setListingData,
    getListing,
    newListData,
    setNewListData,
    handleViewCard,
    cardDetails,
    setCardDetails,
    updating,
    setUpdating,
    deleting,
    setDeleting,
    handleSearch,
    searchData,
    setSearchData,
  };

  return <listingDataContext.Provider value={value}>{children}</listingDataContext.Provider>;
}

export default ListingContext;