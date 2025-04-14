import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL,API_KEY)
export const enhanserAPI = async (file) =>{
    try{
        const taskId = await uploadimg(file)
        console.log(taskId)
        const enhancedimg = poolForEnhancedImg(taskId);

        return enhancedimg
    }catch(err){
        console.log(err.massege)
    }
    
}

const uploadimg = async (file) => {
    const formData = new FormData();
    formData.append("image_file",file);
    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formData,{
        headers:{
            "Content-Type":"multipart/form-data",
            "X-API-KEY":API_KEY
        }
    })

    if(!data?.data?.task_id){
        throw new Error("taskid not found")
    }

    return data.data.task_id;
}

const getEnhancedImg = async (taskId) => {
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers:{
                "X-API-KEY":API_KEY
            }
        }
    )
    console.log(data)
    return data.data;
}

const poolForEnhancedImg = async (task_id, retry = 0) => {
    const result = await getEnhancedImg(task_id);
    console.log(result);

    if (result.state === 4) {
        console.log('processing....');

        if (retry >= 20) {
            throw new Error("maximum retry reached");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 5 seconds

        return poolForEnhancedImg(task_id, retry + 1);
    }

    console.log("enhanced img ", result);
    return result;
};