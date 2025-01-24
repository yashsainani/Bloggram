import styles from './BlogCard.module.css';

const BlogCard = ({title, blog, userEmail, userName}) => {

    return (
        <div style={{border: '2px solid black', margin: '10px', padding: '5px', width: 'fit-content'}}>
            <h3>USER NAME : {userName}</h3>
            <h4>TITLE : {title}</h4>
            <p>BLOG : {blog}</p>
            <span>CREATED BY : {userEmail}</span>
        </div>
    )
};

export default BlogCard;