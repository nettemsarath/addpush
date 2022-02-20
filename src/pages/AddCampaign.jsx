import React from "react";
import { useForm } from 'react-hook-form';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import axios from "axios";
import "./addcampaign.css";

function AddCampaign () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const { mutate,  isLoading, isError, error, data, isSuccess } = useMutation(newCampaign => {
    return axios.post('https://reqres.in/api/users', newCampaign)
  })
  
  console.log(" data, isSuccess",data, isSuccess);

  const onSubmit = (data) =>{
    mutate(data);
  }
  
  return (<div className="addcampaign" >
    <form onSubmit={handleSubmit(onSubmit)} >
      <h2>Add Campaign</h2>
      <div className="inputdiv" >
        <input placeholder="Campaign Name" {...register('name', { required: true })} />
        { errors.name && <span className="red"> Campaign name is required.</span> }
        
      </div>
      <div className="inputdiv">
        <input placeholder="Campaign Url" {...register('campaignLink', { required: true })} />
        { errors.campaignLink && <span className="red" >campaignLink is required.</span> }
      </div>
      <div className="inputdiv">
        <input placeholder="Campaign Image" ref={register("campaignImage", { required: true })} {...register('campaignImage', { required: true })} />
        { errors.campaignImage && <span className="red">Campaign Image is required.</span> }
      </div>

      <div className="buttons">
        <button type="submit" > Submit </button>
       
      </div>

      <div className="inputdiv"> 
      {
        isSuccess && <span className={`green`} > Campaign has been added.</span>
      }
      
      </div>

    </form>
  </div>)
};

export default AddCampaign;
