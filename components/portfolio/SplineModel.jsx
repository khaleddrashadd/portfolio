'use client'

import Spline from '@splinetool/react-spline';

const SplineModel = () => {
  return (
    <div
      className="relative"
      id="home">
      <Spline scene="https://prod.spline.design/1lk6XqjSrOY6s43U/scene.splinecode" />
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
          <p className="text-white text-sm">Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
}
export default SplineModel