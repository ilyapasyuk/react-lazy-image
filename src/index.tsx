import React, { useState } from 'react';

import { StyledImage } from 'style';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const LazyImage = ({ src, alt, width, height, borderRadius = 2 }: Props) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <StyledImage
      img={src}
      width={width}
      height={height}
      style={{ borderRadius }}
      isLoaded={isLoaded}
    >
      <img src={src} onLoad={onLoad} alt={alt} />
    </StyledImage>
  );
};

export default LazyImage;
