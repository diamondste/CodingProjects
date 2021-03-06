import React, {useState} from "react";
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label style={{textAlign: "right", marginRight: "15px"}}>Title</label>
                <input type="text" onChange ={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label style={{textAlign: "right", marginRight: "15px"}}>Price</label>
                <input type="text" onChange ={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label style={{textAlign: "right", marginRight: "15px"}}>Description</label>
                <input type="text" onChange ={(e)=>setDescription(e.target.value)}/>
            </p>
            <button>Create</button>
        </form>
    )
}

export default ProductForm;
