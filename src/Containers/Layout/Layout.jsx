import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { addEmail, addName } from '../../Slices/BlogSlice';

const Layout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOutFn = () => {
        localStorage.clear();
        navigate('/');
        dispatch(addName(""));
        dispatch(addEmail(""));
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (!user) navigate('/');
        dispatch(addEmail(user && user.email));
        dispatch(addName(user && user.userName));
    }, [])

    return(
        <>
            <nav style={{width: '300px', display: 'flex', justifyContent: 'space-evenly'}}>
                <Link to={'/home'}>Home</Link>
                <Link to={'/create'}>CreateBlog</Link>
                <button onClick={signOutFn}>SIGN OUT</button>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;