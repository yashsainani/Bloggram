import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import styles from './CreateBlog.module.css';
import { addBlog } from '../../Slices/BlogSlice';
import { firestore } from '../../Configuration/Firebase';

const CreateBlog = () => {

    const dispatch = useDispatch();
    const formRef = useRef();
    const blogsCollectionRef = collection(firestore, 'blogs');
    const navigate = useNavigate();

    const userName = useSelector(state => state.blog.userName);
    const userEmail = useSelector(state => state.blog.userEmail);

    const onBtnClick = async (e) => {
        e.preventDefault();
        const blogContent = {
            title: formRef.current.title.value,
            blog: formRef.current.blog.value,
            userName: userName,
            userEmail: userEmail
        };
        dispatch(addBlog(blogContent));

        try {
            await addDoc(blogsCollectionRef, blogContent);
            navigate('/home')
        }
        catch (err) {
            console.error("ERROR WHILE ADDING A BLOG", err);
        }
    };

    return(
        <>
            <form ref={formRef} style={{display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px'}}>
                <input type="text" placeholder='Enter Title' name='title' />
                <textarea name="blog" id="content" placeholder='Enter Blog'></textarea>
                <button type='submit' onClick={onBtnClick}>ADD</button>
            </form>
        </>
    )
};

export default CreateBlog;