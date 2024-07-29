import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const SpicyPizza = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Spicy Pizza"} />
      <DashBoard />
    </>
  )
}

export default SpicyPizza
