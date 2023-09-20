import { useState } from 'react';
import axios from "axios";

function useFlip(initialFlipState = false) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((prevFlipState) => !prevFlipState);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(url) {
  const [data, setData] = useState([]);

  const addData = async () => {
    try {
      const response = await axios.get(url);
      setData(oldData => [...oldData, response.data.cards[0]]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return [data, addData];
}

export { useFlip, useAxios };
