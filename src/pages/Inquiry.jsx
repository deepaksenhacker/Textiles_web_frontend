import React, { useRef } from 'react';
import { MdContactMail } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const Inquiry = () => {
   const loc = useLocation()
    const details = loc.state


    
const formref =useRef()
    // sendMailfunction


const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(this);
    formData.append('service_id', 'service_b7zmajg');
    formData.append('template_id', 'template_ogyrfc9');
    formData.append('user_id', 'RJRjFhZtmP-faMvO0');

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then(() => {
    
            alert('Your Request is submitted !')
   
   

      })
      .catch((error) => {
        alert("Oops... " + JSON.stringify(error));
      });
  };
   return (
        <>
            <div className="p-3 flex items-center gap-4">
                <MdContactMail className='text-2xl text-pink-700' />
                <h2 className='text-2xl'>Inquiry Products</h2>

            </div>
            {/* form */}
            <form ref={formref} onSubmit={sendEmail} className='p-5 flex flex-col gap-5 '>


                <div className=" ">


                    <div className="flex gap-10 flex-wrap">
                        {/* 1 */}
                        <div className="text-red-500">
                            <p className="text-black ">Product Name:</p>
                            *<input type="text" name='pname' className="p-1 border text-black" value={details.name} required />
                        </div>
                        {/* 1 */}
                        
                        {/* 1 */}
                        <div className="text-red-500">
                            <p className="text-black ">Product Id:</p>
                            *<input type="text" name='id' className="p-1 border text-black" value={details.id} required />
                        </div>
                        {/* 1 */}

                        {/* 1 */}
                        <div className="text-red-500">
                            <p className="text-black ">Description:</p>
                            *<input type="text" name='pdesc' className="p-1 border text-black" value={details.description} required />
                        </div>
                        {/* 1 */}
                        {/* 1 */}
                        <div className="text-red-500">
                            <p className="text-black ">Quantity:</p>
                            *<input type="number" name='quantity' className="p-1 border text-black"  required />
                        </div>
                        {/* 1 */}
                        

                    </div>

                </div>
                {/* 1 */}
                <div className="flex gap-10 flex-wrap ">
                    {/* 1 */}
                    <div className="text-red-500">
                        <p className="text-black ">Your Mobile No.</p>
                        *<input type="number" name='mobile' className="p-1 border text-black" required />
                    </div>
                    {/* 1 */}
                    {/* 1 */}
                    <div className="text-red-500">
                        <p className="text-black ">Your Name:</p>
                        *<input type="text" name='name' className="p-1 border text-black"   required />
                    </div>
                    {/* 1 */}


                </div>
                {/* 1email*/}
                <div className="text-red-500">
                    <p className="text-black ">Email</p>
                    *<input type="email" name='email' className="p-1 border text-black" required />
                </div>
                {/* 1 */}   
                    <div className="mt-10">
                        <button type='submit' onClick={()=>sendEmail()} className=' p-2 text-white bg-pink-700 hover:bg-pink-600'>Send Inquiry</button>
                    </div>
            </form>
        </>
    );
}

export default Inquiry;
