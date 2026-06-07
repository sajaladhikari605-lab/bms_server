import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Single = () => {
    const redirect = useNavigate()
    const {id} = useParams()
    const [blog, setBlog] = useState({})

    const fetchSingleBlog = async ()=>{
       const response = await axios.get(`https://bms-server-3.onrender.com/blogs/${id}`)
       setBlog(response.data.data)
    }
    
    useEffect(()=>{
        fetchSingleBlog()
    }, [])

    const handleDelete = async ()=>{
        await axios.delete(`https://bms-server-3.onrender.com/blogs/${id}`)
        // redirect to home page after deletion
        redirect("/")
    }
    
    return (
        <div className="container">
            <article className="single-blog">
                <p className="single-blog-tag">Featured Story</p>

                <h1>{blog.blogTitle}</h1>

                <h1>{blog.blogtitle}</h1>

                <h3>{blog.blogsubtitle}</h3>

                <div className="single-blog-content">
                {blog.blogdescription}
                </div>

                <div className="single-blog-actions">
                    <Link to="/" className="back-btn">
                        Back Home
                    </Link>
                    <Link to={`/update/${id}`} className="single-action-btn edit-btn">
                        Edit
                    </Link>
                    <button onClick={handleDelete} type="button" className="single-action-btn delete-btn">
                        Delete
                    </button>
                </div>
            </article>
        </div>
    )
}

export default Single