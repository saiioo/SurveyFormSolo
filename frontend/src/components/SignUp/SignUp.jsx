// import React from 'react';
// import { useState } from 'react';
// import { Link,useNavigate} from 'react-router-dom';
// import './SignUp.css'
// import axios from "axios";

// function SignUp() {
//   // const [dir,setDir] = useState(false)
//  function setBodyColor({color}) {
//     document.documentElement.style.setProperty('--bodyColor', color)
// };
//   setBodyColor({color: "transparent linear-gradient(0deg, #6ED4FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box"})
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     profession: '',
//     password: '',
//     confirmPassword: '',
//     termsAgreed: false,
//   });


//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: checked,
//     }));
//   };
// const navigate = useNavigate()

//  const handleSubmit = async (event) => {
//   console.log("i came here")
//     event.preventDefault();
//     try{
//       const url = 'https://surveyform-backend.onrender.com/user/register'
//       const {formData:res} = await axios.post(url, formData)
//       navigate('/')
//       console.log(res.message)
//     }catch(error){
//       if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
//     }
//   };
//   return (
//     <div className='container'>
//       <div className='left-container'>
//         <h1 className='left-h1-1st'>Welcome To</h1>
//         <h1 className='left-h1-2nd'>MAP Survey to Create Survey</h1>
//         <p className='left-p-1st'>Sign in to continue access pages</p>
//         <p className='left-p-2nd'>
//           Already Have An Account{' '}
//           <Link to='/' className='left-link'>
//             <button>
//             Sign In
//             </button>
//           </Link>
//         </p>
//       </div>
//       <div className='right-container'>
//         <div className='right-first-div'>
//           <h2>Register</h2>
//           <p>Register to continue access pages</p>
//         </div>
//         <div className='right-second-div'>
//           <form onSubmit={handleSubmit}>
//             <div className='form-grid-block'>
//               <label>
//                 <input
//                   placeholder='Name'
//                   type='text'
//                   name='name'
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder='email'
//                   type='email'
//                   name='email'
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder='phone'
//                   type='number'
//                   name='phone'
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder='profession'
//                   type='text'
//                   name='profession'
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder='password'
//                   type='password'
//                   name='password'
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder='confirm password'
//                   type='password'
//                   name='confirmPassword'
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>
//             </div>
//             <label className='check-box-lable'>
//                   <input
//                     type='checkbox'
//                     name='termsAgreed'
//                     checked={formData.termsAgreed}
//                     onChange={handleCheckboxChange}
//                     required
//                   />
//                   I agree to Terms & Condition receiving promotional materials
//                 </label>
//                 {error && <div className='error_msg'>{error}</div>}
//             <button type='submit' className='btn'>
//                 Register
//               </button>
//           </form>
//           <div className='error-block'>
//             <p id='error-message'  className='error-message'></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;









import React from 'react';
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './SignUp.css'
import axios from "axios";

function SignUp() {
  localStorage.removeItem('theme-color')
  // const [dir,setDir] = useState(false)
 function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
};
  setBodyColor({color: "transparent linear-gradient(0deg, #6ED4FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box"})
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };
const navigate = useNavigate()

 const handleSubmit = async (event) => {
  console.log("i came here")
    event.preventDefault();
    try{
      const url = 'https://survey-from-backend.onrender.com/user/register'
      const {formData:res} = await axios.post(url, formData)
      navigate('/')
      console.log(res.message)
    }catch(error){
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
    }
  };
  return (
    <div className='signup-container'>
      <div className='inside-main-container' >
      <div className='left-container'>
        <h1 className='left-h1-1st'>Welcome To</h1>
        <h1 className='left-h1-2nd'>MAP Survey to Create Survey</h1>
        <p className='left-p-1st'>Sign in to continue access pages</p>
        <p className='left-p-2nd'>
          Already Have An Account{'?'}
          <Link to='/' className='left-link'>
            <button className='login-nav-button'>
            Sign In
            </button>
          </Link>
        </p>
      </div>
      <div className='right-container'>
        <div className='right-first-div'>
          <h2>Register</h2>
          <p>Register to continue access pages</p>
        </div>
        <div className='right-second-div'>
          <form onSubmit={handleSubmit}>
            <div className='form-grid-block'>
              <label>
                <input
                  placeholder='Name'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  placeholder='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  placeholder='phone'
                  type='number'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  placeholder='profession'
                  type='text'
                  name='profession'
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  placeholder='password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  placeholder='confirm password'
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <label className='check-box-lable'>
                  <input
                    type='checkbox'
                    name='termsAgreed'
                    checked={formData.termsAgreed}
                    onChange={handleCheckboxChange}
                    required
                  />
                  I agree to Terms & Condition receiving promotional materials
                </label>
                {error && <div className='error_msg'>{error}</div>}
            <button type='submit' className='register-signup-button' >
                Register
              </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SignUp;