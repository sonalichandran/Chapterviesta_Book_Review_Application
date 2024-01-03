import '../Assets/Css/Register.css'
import imgr from '../Assets/Image/book4.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Register()
{
    const navigate = useNavigate();
    function confirm(e)
    {
        e.preventDefault(); 
        let x=document.getElementById("pw").value;
        let y=document.getElementById("pw1").value;
        if(x===y)
        {
            toast.success('Registration Successful!', {
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
               navigate('/Login');
              }, 2000);
        }
        else{

            toast.error('Oops! Registration Failed', {
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
    return(
        <> <form>
        <div>
            

            <img src={imgr} alt="Book" className="book-imager" />
        </div>
       
            
          
        <div className="container1">
            <h2 className="hr">Registration Page</h2>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="input" />
            <label htmlFor="username">Email</label>
            <input type="email" name="username" id="username" className="input" />

            <label htmlFor="pw">Password</label>
            <input type="password" name="pw" id="pw" className="input" />
            <label htmlFor="pw">Confirm Password</label>
            <input type="password" name="pw" id="pw1" className="input" />
            <label htmlFor="username">Favourite Journal</label>
            <input type="text" name="username" id="username" className="input" />
            <div className="hello">
                <button onClick={confirm} type="button" className="bbr">
                    Register
                </button>
        </div>
            </div>
    </form>
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
    )
}
export default Register;