import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


import styles from './Home.module.css'
import { firestore } from '../../Configuration/Firebase';
import BlogCard from '../../Components/BlogCard/BlogCard';

const Home = () => {

    const [userData, setUserData] = useState({});
    
    const showList = async () => {
        try {
            const userEmail = useSelector(state => state.blog.userEmail);
            const blogsCollectionRef = collection(firestore, 'blogs');
            const queryFilter = query(blogsCollectionRef, where('userEmail', '==', userEmail));
            const userInfo = await getDocs(blogsCollectionRef, queryFilter);
            // console.log(userData.docs[0].data());
            setUserData(userInfo);
        }
        catch (err) {
            console.log('ERROR WHILE GETTING DATA FROM FILESTORE', err);
        }
    };

    showList();

    return(
        <>
            {Object.keys(userData).length > 0 && userData.docs.map(blog => <BlogCard key={blog.id} {...blog.data()} />)}
        </>
    );
};

export default Home;