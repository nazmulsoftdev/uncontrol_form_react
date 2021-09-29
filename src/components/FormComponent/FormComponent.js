import React,{createRef} from 'react'
import AdminIcon from '../AdminIcon/AdminIcon';
import InputComponent from '../InputComponent/InputComponent';
import { AiOutlineMail,AiFillEye} from 'react-icons/ai';

class FormComponent extends React.Component {
   
    constructor() {
        super();
        this.state = {
            userEmail: createRef(),
            userPass:createRef()
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    // Handle Submit

    handleSubmit = (even) => {
        
        even.preventDefault();
        
        console.log(this.state);
        this.setState({
            userEmail: '',
            userPass:''
        })

     }

    render() {
        const { userEmail, userPass } = this.state;
        return (
            <div className="Wrapper">
                <AdminIcon/>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent
                        ref={userEmail}
                        type="email" name="userEmail" 
                        required="required" autoComplete="off" 
                        placeholder="Email"
                    />
                    <AiOutlineMail className="EmailIcon"/>
                    <InputComponent type="password" name="userPass" 
                        ref={userPass}
                        required="required" autoComplete="off" 
                        placeholder="Password"
                    />
                    <AiFillEye className="PasswordIcon"/>
                    <InputComponent type="submit" value="Login"/>
                </form>
            </div>
        )
  }

}

export default FormComponent
