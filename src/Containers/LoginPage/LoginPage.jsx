import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../Configuration/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, addName } from "../../Slices/BlogSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.blog.userName);
    // console.log(userName);

    const navigate = useNavigate();
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (user) navigate('/home');
        dispatch(addName(user && user.userName));
        dispatch(addEmail(user && user.email));
    }, [])
    
    
    const btnClick = async() => {
        try {
            const userInfo = await signInWithPopup(auth, googleAuthProvider);
            const user = {
                userName: userInfo.user.displayName,
                email: userInfo.user.email
            }
            localStorage.setItem('userInfo', JSON.stringify(user));
            console.log(JSON.parse(localStorage.getItem('userInfo')))
            dispatch(addName(user.userName));
            dispatch(addEmail(user.email));
            navigate('/home');
        }
        catch(err) {
            console.error("ERROR WHILE LOGING IN", err);
        }
    };

    return (
        <>
            <button onClick={btnClick}>Login With Google</button>
        </>
    );
};

export default LoginPage;