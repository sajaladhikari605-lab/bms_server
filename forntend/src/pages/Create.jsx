import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Create = () => {
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        blogtitle: "",
        blogsubtitle: "",
        blogdescription: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setBlog({
            ...blog, // spread operator to copy the existing state
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // prevent the default form submission behavior

        try {
            const response = await axios.post("http://localhost:3000/blogs", blog)

            if (response.status === 201) {
                alert("Blog created successfully")
                navigate("/") // navigate to the home page after successful blog creation
            } else {
                alert("Failed to create blog")
            }
        } catch (error) {
            console.error("Create blog error:", error)
            alert("Unable to create blog — check server and console for details.")
        }
    }

    return (
        <>
            <div className="container">

                <div className="form-container">
                    <h1>Create Blog</h1>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Enter blog title"
                            name="blogtitle"
                            value={blog.blogtitle}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            placeholder="Enter blog subtitle"
                            name="blogsubtitle"
                            value={blog.blogsubtitle}
                            onChange={handleChange}
                        />

                        <textarea
                            rows="6"
                            placeholder="Enter blog description"
                            name="blogdescription"
                            value={blog.blogdescription}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit" className="submit-btn">Publish Blog</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Create