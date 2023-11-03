import {useNavigate} from 'react-router-dom'
function Sidebar (){
    const navigate = useNavigate();
    const handle=()=>{
        navigate('/');
    }
    const handler=()=>{
        navigate('/filters');
    }
    return (
        <div id="sidebar">
            <h3>Dashboard</h3>
            <hr></hr>
            <button class="btn btn-primary btn-lg" onClick={handle}>Home</button>
            <hr></hr>
            <button class="btn btn-primary btn-lg" onClick={handler}>Filter</button>
            <hr></hr>
        </div>
    );
}
export default Sidebar;