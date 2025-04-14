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
      setEnhancedImg(enhancedimg);
      setLoading(false)
    }catch(err){
      console.log(err)
    }

  }
  console.log(enhancedImg)
  return (
    <>
      <Navbar/>


        <ImgUpload handleImgUpload={handleImgUpload} />
        <ImgPreview loading={loading} uploadImg={uploadImg} enhancedImg={enhancedImg}/>
    </>
  )
}

export default Home