import "./Register.scss";
import { Link }from 'react-router-dom';

const Regester = () => {
    return (
        <div className="Register">
             <div className="card">
                <div className="left">
                    <h2>ARU Social Tech.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                       ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                        </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                     <button>Login</button>
                     </Link>
                </div>
                <div className="right">
                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Phone" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password"/>
                        
                        <button>Register</button>
                       
                    </form>
                </div>
             </div>
        </div>
    );
}

export default Regester;



