import React from 'react'

const ImgPreview = (props) => {

  
  
  return (
    <div className='flex flex-wrap gap-4'>
      <div>
        <h2>original image</h2>
        <img src={props.uploadImg} alt="original" className=' h-50 border-2 border-gray-300 rounded-md p-2' />
      </div>

      <div>
        <h2>enhanced image</h2>
        <img src={props.enhancedImg} alt="enhanced" className=' border-2 border-gray-300 rounded-md p-2 h-50' />
      </div>
      <a href={props.enhancedImg} className='bg-blue-500 text-white rounded-md h-10 p-2 mt-2'>download enhanced image</a>
    </div>
  )
}

export default ImgPreview
