'use client'

import Spline from '@splinetool/react-spline';

const SplineModel = () => {
  return (
    <div
      className="relative"
      id="home">
      <Spline scene="https://prod.spline.design/1lk6XqjSrOY6s43U/scene.splinecode" />
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div className="shadow-md p-4 flex items-center justify-center bg-transparent rounded-3xl ">
          <p className="text-neutral-200 bg-transparent text-xs md:text:sm">
            drag to orbit
          </p>
        </div>
      </div>
    </div>
  );
}
export default SplineModel