import Image from 'next/image'
import profilePic from '../public/profile.png'

export const Hero = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
           I'm Claudio. I'm an experienced T-Shaped developer with deep interest in modern web development.
          </p>
        </div>
      </div>
    </div>
        </>
  );
};
