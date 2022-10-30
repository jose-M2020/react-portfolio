import { Gradient } from "../utils/Gradient";
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