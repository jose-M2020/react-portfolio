import { Gradient } from "https://gist.githack.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d/raw/35a5c7c1ddc9f97ec84fe7e1ab388a3b726db85d/Gradient.js";
import { useEffect } from "react";


const GradientAnimation = () => {
  
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])
  
  
  return (
    <canvas id="gradient-canvas"></canvas>
  )
}

export default GradientAnimation