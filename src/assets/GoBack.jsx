import {IoIosArrowBack} from "react-icons/io";
import {useNavigate}from "react-router-dom";

export default function GoBack() {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate(-1);
    };
 return (
    <div 
        className="w-8 h-8 bg-gray-900 rounded-full flex justify-center items-center mx-2 cursor-pointer"
        onClick={handleClick}
    >
        <IoIosArrowBack color="white" size="20"/>
    </div>
 )
}