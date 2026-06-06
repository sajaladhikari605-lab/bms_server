import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
    const [blogs, setBlogs] = useState([]) // State to hold the list of blogs

    // Function to fetch blogs from the backend
    const fetchBlogs = async () => {
        const response = await axios.get("http://localhost:3000/blogs")
        setBlogs(response.data.data)
    }

    // Fetch blogs when the component mounts
    useEffect(() => {
        fetchBlogs()
    }, []) // Empty dependency array to run only once on mount

    return (
        <div className="container">
            <div className="blog-grid">
                {blogs.map((blog, index) => {
                    return(
                        <div className="blog-card" key={index}>
                            <h2>{blog.blogtitle}</h2>
                            <h4>{blog.blogsubtitle}</h4>
                            <p>{blog.blogdescription}</p>
                            <Link to={`/single/${blog._id}`} className="read-btn">
                                Read More
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home