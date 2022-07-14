import React from "react";
import { useMenuContext, } from "../../contexts/menuContext";
import "./Home.style.css"
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { BsCashCoin } from "react-icons/bs"
import { RiNotification2Line } from "react-icons/ri"
import { FiEye } from "react-icons/fi"
import { BiComment } from "react-icons/bi"
import { Chart } from "react-google-charts"
import ReactStars from "react-rating-stars-component";
const Home = () => {
    //data to grafics
    const dataEarned = [
        ["Earned", "Dolls Earned"],
        ["January", 1399],
        ["February", 1999],
        ["March", 2260],
        ["April", 1323],
        ["May", 3220],
        ["June", 2323],
        ["July", 1230],
        ["August", 2520],
        ["September", 4320],
        ["October", 1220],
        ["November", 5220],
        ["December", 6220]];
    const dataSale = 2393;
    const totalEarned = (data) => {
        var total = 0;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (j === 1) {
                    if (typeof data[i][j] === "number") {
                        total += data[i][j]
                    }
                }

            }
        }
        return total;
    }
    //Menu active
    const { isMenuToggled, toggleMenu } = useMenuContext()
    const isMenuActive = () => {
        return isMenuToggled ? "active" : ""
    }
    return (
        <section className={"main " + isMenuActive()}>
            <div className="menuTop">
                <button className="buttonMenu" onClick={toggleMenu}><AiOutlineMenu /></button>

                <form>
                    <input type="text" placeholder="Search Here"></input>
                    <button type="submit"><AiOutlineSearch /></button>
                </form>

                <div className="userCustumer">
                    <img src="https://i.owox.com/pages/articles/authors//0/44.jpg" alt="" title="User" />
                    <button><RiNotification2Line /></button>

                </div>
            </div>
            <div className="contentMain">
                <div className="cardBox">
                    <div className="cardItem">
                        <div>
                            <h2>{dataSale}</h2>
                            <p>Sales</p>
                        </div>
                        <AiOutlineShoppingCart className="icon" />

                    </div>
                    <div className="cardItem">
                        <div>
                            <h2>{totalEarned(dataEarned).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })}</h2>
                            <p>Earned</p>
                        </div>
                        <BsCashCoin className="icon" />
                    </div>

                    <div className="cardItem">
                        <div>
                            <h2>4,532</h2>
                            <p>Daily Views</p>
                        </div>
                        <FiEye className="icon" />
                    </div>
                    <div className="cardItem">
                        <div>
                            <h2>4,532</h2>
                            <p>Comments</p>
                        </div>
                        <BiComment className="icon" />
                    </div>
                </div>
                <div className="informationContent">
                    <div className="graficEarned">
                        <div>
                            <Chart
                                data={dataEarned}
                                chartType="LineChart"
                                className="grafic"
                                options={{
                                    title: "Earned in dolls on one year",
                                    pieSliceTextText: "label"
                                }}>

                            </Chart>
                        </div>
                        <div className="informationGrafic">
                            <h4>Total earned over the year: {totalEarned(dataEarned).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })}</h4>
                            <p>All sales: {dataSale}</p>
                            <p>Price for product: ${((totalEarned(dataEarned) / dataSale).toFixed(2)).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 })} dolls</p>
                        </div>

                    </div>
                    <div className="commentsContent">
                        <div className="userInformation">
                            <div className="user">
                                <img alt="" src="https://www.lse.ac.uk/geography-and-environment/assets/images/people-images/current-academic-staff/academic-staff-100x100/michael-mason-cropped.jpg" />
                                <h5>Jhon <p>James</p></h5>
                            </div>

                            <div className="commentDescription">
                                Good Product!
                            </div>
                            <ReactStars
                                activeColor={"#8d1cb9"}
                                count={5}
                                edit={false}
                                value={4.3}
                            />
                        </div>
                        <div className="userInformation">
                            <div className="user">
                                <img alt="" src="https://www.lse.ac.uk/health-policy/assets/images/people/academic/Headshots-2019-Nov/Michael-1.jpg" />
                                <h5>Alex <p>Briam</p></h5>
                            </div>

                            <div className="commentDescription">
                                Nice!, Good Job
                            </div>
                            <ReactStars
                                activeColor={"#8d1cb9"}
                                count={5}
                                edit={false}
                                value={5}
                            />
                        </div>


                        <div className="userInformation">
                            <div className="user">
                                <img alt="" src="https://www.lse.ac.uk/health-policy/assets/images/people/phd/MackenzieMills-200x200px.jpg" />
                                <h5>Carl <p>Lane</p></h5>
                            </div>

                            <div className="commentDescription">
                                That was so Fast!
                            </div>
                            <ReactStars
                                activeColor={"#8d1cb9"}
                                count={4.5}
                                edit={false}
                                value={4.3}
                            />
                        </div>


                        <div className="userInformation">
                            <div className="user">
                                <img alt="" src="https://www.lse.ac.uk/united-states/Assets/Images/People-images/Chris-Gilson-200x200.jpg" />
                                <h5>Steve <p>Smith</p></h5>
                            </div>

                            <div className="commentDescription">
                                Good Product!
                            </div>
                            <ReactStars
                                activeColor={"#8d1cb9"}
                                count={5}
                                edit={false}
                                value={4.3}
                            />
                        </div>


                        <div className="userInformation">
                            <div className="user">
                                <img alt="" src="http://www.lse.ac.uk/law/Assets/Images/PhD/erbay-Cropped-200x200.jpg" />
                                <h5>Joseph <p>Spring</p></h5>
                            </div>

                            <div className="commentDescription">
                                I don't that product
                            </div>
                            <ReactStars
                                activeColor={"#8d1cb9"}
                                count={2}
                                edit={false}
                                value={4.3}
                            />
                        </div>

                    </div>

                </div>
            </div >
        </section >
    )
}
export default Home;