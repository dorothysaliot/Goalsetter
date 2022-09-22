import {useState,useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa'

function Login() {

    //constructor
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    //attributes
    const {email,password} = formData;

    //methods
    //studyhi kay liboogg
    const onChange = (e) =>{
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <>
    <section className='header'>
        <h1>
            <FaSignInAlt/> Login
        </h1>
        <p>Login and start setting goals</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>

        <div className="form-group">
                <input 
                    type='email' 
                    className='form-control' 
                    name='email' 
                    id='email' 
                    value={email} 
                    placeholder='Enter your email' 
                    onChange={onChange} 
                />
        </div>

        <div className="form-group">
                <input 
                    type='password' 
                    className='form-control' 
                    name='password' 
                    id='password' 
                    value={password} 
                    placeholder='Enter your password' 
                    onChange={onChange} 
                />
        </div>
        
      

        <div className="form-group">
            <button className='btn btn-block' type="submit">Submit</button>
        </div>


        </form>
    </section>
    </>
  )
}

export default Login