import FavoritAsset from "../assets/FavoritAsset";
import HomeAsset from "../assets/HomeAsset";
import MenuAsset from "../assets/MenuAsset";
import QrAsset from "../assets/QrAsset";
import TourAsset from "../assets/TourAsset";

export const menuItems = [
    {icon: <HomeAsset/>, title:"home", url:"/home"},
    {icon: <TourAsset/>, title:"tour", url:"/tour"},
    {icon: <QrAsset/>, title:"qr", url:"/qr"},
    {icon: <FavoritAsset/>, title:"favorite", url:"/fav"},
    {icon: <MenuAsset/>, title:"menu", url:"/menu"},
]