import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <label>First Name</label>
        <input {...register("first_name", { required: true,  maxLength: 4 })} placeholder="First Name" className="form-control" />
        {errors.first_name && <p>Required and 4 Chars Max</p>}
        
        <label>Last Name</label>
        <input {...register("last_name", { required: true, maxLength: 6 })} placeholder="Last Name" className="form-control" />
        {errors.last_name && <p>Required and 6 Chars Max</p>}
        
        <label>Phone Number</label>
        <input type="tel" {...register("phone_number", { required: true, minLength:10 , maxLength:10})} placeholder="Phone Number" className="form-control"/>
        {errors.phone_number && <p>10 digits Only</p>}
        
        <label>Birthday</label>
        <input type="date" {...register("birthday", { required: true })} className="form-control"/>
        {errors.birthday && <p>Birthday is required</p>}
        
        <label>Gender</label>
        <select {...register("gender", { required: true })} className="form-control">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
          <option value="idk">Prefer Not to Slay</option>
        </select>
        {errors.gender && <p>Gender is required</p>}
        
        <label>Subject</label>
        <select {...register("subject", { required: true })} className="form-control">
          <option value="">Select...</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
        {errors.subject && <p>Subject is required</p>}
        
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
