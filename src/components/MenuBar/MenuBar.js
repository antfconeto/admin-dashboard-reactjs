
import "./MenuBar.style.css";
import { BiHomeAlt } from "react-icons/bi"
import { ImCoinDollar } from "react-icons/im"
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai"
import { RiContactsLine, RiAndroidLine } from "react-icons/ri";
const MenuBar = () => {

    const iconsMenu = [<BiHomeAlt fontSize="30px" />,
    <ImCoinDollar fontSize="30px" />,
    <AiOutlineShoppingCart fontSize="30px" />,
    <RiContactsLine fontSize="30px" />,
    <AiOutlineInfoCircle fontSize="30px" />];
    return (
        <div className="menuBar" >
            <div className="content">
                <h2 className="title"><span><RiAndroidLine /></span>Dashboard</h2>
                <ul>
                    {["Home", "Sell", "Products", "Contacts", "About"].map((text, index) => (
                        <li><a href="/#"><span>{iconsMenu[index]}</span>{text}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default MenuBar;