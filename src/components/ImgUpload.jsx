import React from "react";

const ImgUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.handleImgUpload(file);
    }
  };

  return (
    <>
      <div className="max-w-7xl w-full mx-auto px-6 xl:px-0 pb-12 md:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
          <div className="flex flex-col text-start justify-center pb-16 " >
            <div className="w-48 h-48 md:w-48 md:h-48 mt-24 relative overflow-hidden rounded-md">
              <video
                src="https://cdn3.pixelcut.app/web/cms/Hero/upscaler.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-md"
              ></video>
            </div>
            <h2 className="text-amber-300 font-bold text-4xl mt-6 leading-12">
              Enhance Your Image Quality Instantly with Free AI Tools
            </h2>
            <p className="leading-5 mt-6">
              Enhance your photos in seconds with our AI-powered image upscaler.
              Boost quality to 4K – free and online!
            </p>
          </div>

          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-300"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm ] ">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" onChange={showImageHandler} className="hidden" />
            </label>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ImgUpload;
