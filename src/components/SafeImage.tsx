import React, { useState } from 'react';
import fallbackCarImg from '../assets/images/car_porsche_gt3_1791285880215.jpg';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = fallbackCarImg,
  className,
  onError,
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    if (onError) {
      onError(e);
    }
  };

  const imageSource = error || !src ? fallbackSrc : src;

  return (
    <img
      src={imageSource}
      alt={alt || 'Meritus Automobiles'}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
