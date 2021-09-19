import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import DeleteAuthor from './DeleteAuthor'
const AllAuthors = (props)=> {
    const [authorList, setAuthorList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then((res)=>{
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }, [])

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/author/new'}><button type="button" className="btn btn-info" >Add an Author</button></Link>
            <h5>We have quotes by:</h5>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col" colSpan="2">Action Available</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                    authorList.map((author, index)=>(
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/author/edit/${author._id}`}>
                                            
                                            <button type="button" className="btn btn-primary" >Edit</button>
                                        
                                        </Link>
                                    </td>
                                    <td>
                                        <DeleteAuthor authorList={authorList} setAuthorList={setAuthorList} id={author._id} />
                                    </td>
                                </tr>

                    ))
                }

                    </tbody>
            </table>
            </div>
        </div>
    )

}

export default AllAuthors;
