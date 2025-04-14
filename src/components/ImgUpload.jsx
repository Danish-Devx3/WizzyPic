import React from 'react'

const ImgUpload = (props) => {


  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      props.handleImgUpload(file)
    }
  }


  return (
    <>
    <div className='max-w-7xl w-full mx-auto px-6 xl:px-0 pb-12 md:pt-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
            <div>
              <div className='w-48 h-48 md:w-96 md:h-96 relative overflow-hidden rounded-md'>
                  <video src="https://cdn3.pixelcut.app/web/cms/Hero/upscaler.mp4" autoPlay loop muted className='w-full h-full object-cover rounded-md'></video>

              </div>
              <h2>Enhance Your Image Quality Instantly with Free AI Tools</h2>
              <p>Enhance your photos in seconds with our AI-powered image upscaler. Boost quality to 4K – free and online!</p>
            </div>
        </div>
    </div>
      <h1>upload your image to start</h1>
      <input type="file" accept="image/*" onChange={showImageHandler} className='border-2 border-gray-300 rounded-md p-2' />
      <p className='text-sm text-gray-500'>Supported formats: JPG, PNG, GIF</p>
    </>
  )
}

export default ImgUpload
