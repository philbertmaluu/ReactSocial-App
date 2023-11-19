import "./Login.scss";
import { Link }from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
             <div className="card">
                <div className="left">
                    <h2>ARU Social.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                       ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                        </p>
                    <span>Dont have an account?</span>
                    <Link to="/regester" >
                    <button>Register</button>
                    </Link>
                     
                </div>
                <div className="right">
                  
                    <form action="">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password"/>
                        <button>Login</button>
                    </form>
                </div>
             </div>
        </div>
    );
}

export default Login;


