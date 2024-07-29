import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const VegPizza = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Veg Pizza"} />
      <DashBoard />
    </>
  )
}

export default VegPizza
