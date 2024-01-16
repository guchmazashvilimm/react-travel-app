import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../components/signup.css";
function SignUp(){


    return (
        <>
        <div className="container">
           <div className="form-box">
            <h1>Sign Up</h1>
            <form>
                <div className="input-group">
                    <div className="input-field">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name"></input>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-field">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" placeholder="Email"></input>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-field">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Password"></input>
                    </div>
                    <p>Lost password<a href="#">Click Here</a></p>

                </div>
                <div className="btn-field">
                    <button type="button">Sign up</button>
                    <button type="button">Sign in</button>
                </div>
            </form>
           </div>

        </div>
        </>

        
    )

}
export default SignUp;