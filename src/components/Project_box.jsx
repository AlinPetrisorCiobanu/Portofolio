import {useNavigate} from "react-router-dom"

const Project_box = ({ id, name, detail ,images}) => {
    const navigate = useNavigate();
    const  go_to = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div className="box_project" onClick={()=>{go_to(id)}}>
            <div className="folder_tab"></div>

            <div className="folder_body">
                <img src={images[0]} alt={name} />

                <div className="project_content">
                    <h3>{name}</h3>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    )

}

export default Project_box;