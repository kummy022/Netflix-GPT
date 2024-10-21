

const VideoTitle =({title, overview})=>{
  return(
    <div className="w-screen aspect-video pt-48 px-20 absolute bg-gradient-to-r from-black ">
      <h1 className="text-2xl font-bold my-2 text-white">{title}</h1>
      <p className="w-1/4 text-sm text-white">{overview}</p>

      <button className=" my-4  py-2 px-10 rounded-sm hover:bg-opacity-80 bg-gray-500 text-white">Play</button>
      <button className=" my-4 mx-4  py-2 px-10 rounded-sm hover:bg-opacity-80 bg-gray-500 text-white">more info</button>

    </div>
  )
};

export default VideoTitle;