import { useState } from 'react';
import axios from "axios";

function useFlip(initialFlipState = false) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((prevFlipState) => !prevFlipState);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    const finalUrl = `${baseUrl}${endpoint}`;
    // console.log("Endpoint:", endpoint);
    // console.log("Constructed URL:", finalUrl);

    // console.log("Making request to:", finalUrl);

    try {
      const response = await axios.get(finalUrl);
      setData(oldData => [...oldData, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearData = () => {
    setData([]);
  };

  return [data, addData, clearData];
}


export { useFlip, useAxios };
