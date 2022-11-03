import { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import "./Login.css"
import { Admin, Guest, NoSign } from "../../Redux/Actions";






function Login() {
  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setuser((event.target as HTMLInputElement).value)
  }
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword((event.target as HTMLInputElement).value)
  }

  return (
    <div>
      <div className="mb-md-5 mt-md-4 pb-5">
        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>
        <div className="form-outline form-white mb-4">
          <input type="email" id="typeEmailX" className="form-control form-control-lg" value={user} onChange={handleUserNameChange} />
          <label className="form-label" htmlFor="typeEmailX">Email</label>
        </div>
        <div className="form-outline form-white mb-4">
          <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={handlePasswordChange} />
          <label className="form-label" htmlFor="typePasswordX">Password</label>
        </div>
        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
        <button className="btn btn-outline-light btn-lg px-5" onClick={changeUser}>Login</button>
        <div className="d-flex justify-content-center text-center mt-4 pt-1">
          <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
          <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
          <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
        </div>
      </div>
      <div>
        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
      </div>
    </div>
  )


  function changeUser() {
    const { classList } = document.body;
    classList.remove("open");
    classList.add("closed");

    if (user == "Admin") {
      dispatch(Admin())
    }
    else if (user == "Guest") {
      dispatch(Guest())
    }
    else {
      dispatch(NoSign())
    }
  }
}


export default Login;







{/* <form action="">

<h2>Log in</h2>




        <div className="md-textbox">
          <input type="email" id="textbox" className="{}" onChange={handleChange} />

          <label htmlFor="textbox">Your Email</label>
        </div>
        <div className="md-textbox">
          <input type="password" id="textbox" className="{}" onChange={handleChange} />

          <label htmlFor="textbox">Your password </label>
        </div>




      </form> */}






// function App() {
//   const counter = useSelector((state: any) => state.counter);
//   const isLogged = useSelector((state: any) => state.isLogged);
//   const dispatch = useDispatch();
//   return (
//       <div>
//           <h1>Redux Terms Adv</h1>
//           <h3>Counter = {counter}</h3>
//           <button onClick={() => dispatch(increment())}>+</button>
//           {isLogged ?
//               <button onClick={() => dispatch(decrement())} >-</button>
//               :
//               <button disabled>-</button>
//           }
//           <p>
//               {isLogged ? "You are logged-in" : "Hello guest"}
//           </p>
//           <p>
//               {isLogged ?
//                   <button onClick={() => dispatch(signout())}>Sign out</button>
//                   :
//                   <button onClick={() => dispatch(signin())}>Sign in</button>
//               }

//           </p>
//       </div>
//   );
// }