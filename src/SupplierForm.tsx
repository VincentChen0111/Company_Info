import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
    name: string;
    logo: FileList;
    address: string;
  };

export function SupplierForm() {

    const { register, handleSubmit } = useForm<FormValues>();


    const onSubmit = async (data: FormValues) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('logo', data.logo[0]);
        formData.append('address', data.address);
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/supplier', formData);
          if(response.status == 201){
            alert('Supplier created');
          }
          else{
            alert('Failed to create supplier');
          }
            
        } catch (error) {
          console.error(error);
          alert('Failed to create supplier');
        }
      };

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Supplier Info Uploading Form</h1>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <label htmlFor="name">Name:</label>
            <input size={50} id="name" type="text" {...register("name")} />
        </div>
        <br></br>
        <div>
            <label htmlFor="logo">Logo:</label>
            <input id="logo" type="file" {...register("logo")} />
        </div>
        <br></br>
        <div>
            <label htmlFor="address">Address:</label>
            <input size={50} id="address" type="text" {...register("address") } />
        </div>
        <br></br>
        <br></br>
        <button type="submit">Create Supplier</button>
        </form>


    );
}

export default SupplierForm;