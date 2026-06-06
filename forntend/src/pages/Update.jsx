import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"



const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [blog, setBlog] = useState({})

    const fetchSingleBlog = async () => {
        const response = await axios.get(`http://localhost:3000/blogs/${id}`)
        setBlog(response.data.data)
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setBlog({
            ...blog, // spread operator to copy the existing state
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent the default form submission behavior

        const response = await axios.patch(`http://localhost:3000/blogs/${id}`, blog)

        if (response.status === 200) {
            alert("Blog updated successfully")
            navigate("/") // navigate to the home page after successful blog creation
        } else {
            alert("Failed to update blog")
        }
    }

    return (
        <>
            <div className="container">

                <div className="form-container">
                    <h1>Update Blog</h1>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Enter blog title"
                            name="blogtitle"
                            onChange={handleChange}
                            value={blog.blogtitle || ""}
                        />

                        <input
                            type="text"
                            placeholder="Enter blog subtitle"
                            name="blogsubtitle"
                            onChange={handleChange}
                            value={blog.blogsubtitle || ""}
                        />

                        <textarea
                            rows="6"
                            placeholder="Enter blog description"
                            name="blogdescription"
                            onChange={handleChange}
                            value={blog.blogdescription || ""}
                        ></textarea>

                        <button type="submit" className="submit-btn">Update Blog</button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Update