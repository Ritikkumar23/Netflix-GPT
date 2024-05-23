import React from "react"
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[12%] px-5 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>

            <div>
                <button className="bg-slate-200 text-black py-1 mt-4 md:mt-2 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:opacity-80">▶️ Play</button>
                <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50  hover:opacity-80 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
