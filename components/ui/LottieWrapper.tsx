'use client';
import Lottie from 'react-lottie';

export default function LottieWrapper({
  animationData,
  loop = true,
  autoplay = true,
  height = 200,
  width = 400,
}: {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  height?: number;
  width?: number;
}) {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
}