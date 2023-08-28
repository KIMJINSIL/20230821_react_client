import { useEffect } from "react";
import LogoAsset from "../assets/LogoAsset";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Splash() {
    const navigate = useNavigate()
    const timeout = () => {
        setTimeout(()=>{
            navigate("/home")
        },3000)
    }
    useEffect(()=>{
        timeout();
        return()=>{
            clearTimeout(timeout);
        }
    })
 return (
    <Layout>
        <div className="w-full h-full 
                        relative
                        bg-cover bg-center 
                        bg-[url('https://plus.unsplash.com/premium_photo-1670895802275-ed748ced4309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60')]"
        >
            {/* 빈박스 */}
            <div className="w-full h-full bg-white/50" />
            {/* 로고영역 */}
            <div className="flex flex-col absolute top-[50%] left-[50%] -translate-x-[50%] items-center">
                <h1>세상의 모든 여행</h1>
                <div>
                    <LogoAsset large/>
                </div>
            </div>
        </div>
    </Layout>
 )
}