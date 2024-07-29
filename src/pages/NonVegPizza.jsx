import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"


const NonVegPizza = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Non Veg Pizza"} />
      <DashBoard />
    </>
  )
}

export default NonVegPizza
