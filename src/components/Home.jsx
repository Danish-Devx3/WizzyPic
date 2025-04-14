import React, { useState } from 'react'
import ImgUpload from './ImgUpload'
import ImgPreview from './ImgPreview'
import { enhanserAPI } from '../utils/enhancerAPI';
import Navbar from './Navbar';

const Home = () => {


  const [uploadImg, setUploadImg] = useState(null);
  const [enhancedImg, setEnhancedImg] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleImgUpload = async (file) => {
    setUploadImg(URL.createObjectURL(file));
    setLoading(true);
    

    console.log(URL.createObjectURL(file))


    try{
      const enhancedimg = await enhanserAPI(file);
      setEnhancedImg(enhancedimg.image);
      setLoading(false)
    }catch(err){
      console.log(err)
    }

  }
  console.log(enhancedImg)
  return (
    <>
      <Navbar/>




      <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-3'>AI Image Enhancer</h1>
      <p className='text-sm'>Enhance your images with AI</p>
      </div>
        <ImgUpload handleImgUpload={handleImgUpload} />
        <ImgPreview loading={loading} uploadImg={uploadImg} enhancedImg={enhancedImg}/>
    </>
  )
}

export default Home