import {useState,useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {login,reset} from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {

    //constructor
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    //attributes
    const {email,password} = formData;


    //wala koy nasabtan
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError,isSuccess,message} = useSelector((state) => state.auth)
    //wala koy nasabtan

    //use effect whene there are changes in the user, isloading, iserror..
    useEffect(() =>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

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

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner />
    }

  return (
    <>
    <section className='heading'>
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