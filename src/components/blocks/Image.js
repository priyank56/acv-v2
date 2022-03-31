import React from 'react';
import styled from 'styled-components';

export const ResponsiveImage = styled.img`
  height: auto;
`;

export function StaticImage(props) {
  const { src, ...imgProps } = props;
  return <ResponsiveImage src={src} {...imgProps} />;
}

export default StaticImage;
