import {useNavigate} from "react-router-dom"

const Project_box = ({ id, name, detail ,images}) => {
    const navigate = useNavigate();
    const  go_to = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div className="box_project" onClick={()=>go_to(id)}>
            <h2>{name} : Proyecto número {id}</h2>
            <img src={images[0]} alt={name}/>
            <h2>{detail}</h2>
        </div>
    )

}

export default Project_box;