import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Login.css';
import img1 from '../Assets/Image/book4.jpeg';

function Login() {
  const navigate = useNavigate();

  function show() {
    let x = document.getElementById("pw").value;
    let y = "1234";

    if (x === y) {
      toast.success('Login Successful!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      
      setTimeout(() => {
      
        navigate('/LoginAfter');
      }, 2000);
    } else {
      toast.error('Invalid password\nLogin failed!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <div>
        <img src={img1} alt="Book" className="book-imagel" />
      </div>
      <div className="left">
        <div className="container-l">
          <h3 className="lp">Login Page</h3>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" className="input" />

          <label htmlFor="pw">Password</label>
          <input type="password" name="pw" id="pw" className="input" />
          <div className="hello">
            <button onClick={show} type="button" className="bb">
              LOGIN
            </button>
            <Link to="/Home">
              <button className="back-b">Back</button>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Login;
