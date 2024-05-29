import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {

        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
        .catch(error => {
            console.error("Google Sign-In Error: ", error);
        });
    }
  return (
    <div className="p-8">
          <div className="divider">OR</div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn w-full">
        <FaGoogle className="mr-4"></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
