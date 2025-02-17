import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  skills: string;
  email: string;
  phone: string;
  address: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    skills: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Data Submitted Successfully...! \nname: ${formData.firstName} ${formData.lastName}\nage: ${formData.age}\ngender: ${formData.gender}\nskills: ${formData.skills}\nemail: ${formData.email}\nphone: ${formData.phone}\naddress: ${formData.address}`);
    setFormData({firstName: "", 
      lastName: "",
      age: 0,
      gender: "",
      skills: "",      
      email: "",
      phone: "",
      address: ""});
  };

  return (
    <div className="vw-100">
   <div className="container w-50 p-4 border rounded shadow-lg">
    <form onSubmit={handleSubmit} >
      <h1 className="text-center mb-4">Information Form</h1>
      <div className="row mb-3">
      <div className="col-6">
        <label className="form-label">First Name:</label>
        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>

      <div className="col-6">
        <label className="form-label">Last Name:</label>
        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      </div>
      <div className="row mb-3">
      <div className="col-6">
        <label className="form-label">Age:</label>
        <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
      </div>

      <div className="col-6">
        <label className="form-label">Gender:</label>
        <div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleChange} required />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleChange} required />
            <label className="form-check-label">Female</label>
          </div>
        </div>
      </div>    
      </div>

      <div className="mb-3">
        <label className="form-label">Skills:</label>
        <select className="form-select" name="skills" value={formData.skills} onChange={handleChange} required>
          <option value="">Select a skill</option>
          <option value="JavaScript">Dancing</option>
          <option value="TypeScript">Singing</option>
          <option value="React">Painting</option>
          <option value="Node.js">Acting</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number:</label>
        <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label className="form-label">Address:</label>
        <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} required />
      </div>

      <button type="submit" className="btn offset-4 col-4 btn-primary">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default FormComponent;
