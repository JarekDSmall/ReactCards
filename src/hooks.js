import { useState } from 'react';

export function useFlip(initialFlipState = false) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((prevFlipState) => !prevFlipState);
  };

  return [isFlipped, toggleFlip];
}
