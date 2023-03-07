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
          console.log(response.status);
          if(response.status == 201){
            alert('Supplier created');
          }
          else{
            alert('Failed to create supplier')
          }
            
        } catch (exception_) {
          console.error(exception_);
          alert('Failed to create supplier');
        }
      };

return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" {...register("name")} />
      </div>
      <div>
        <label htmlFor="logo">Logo:</label>
        <input id="logo" type="file" {...register("logo")} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input id="address" type="text" {...register("address")} />
      </div>
      <button type="submit">Create Supplier</button>
    </form>


);
}

export default SupplierForm;