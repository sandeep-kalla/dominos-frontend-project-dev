import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const CheeseVolcano = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Cheese Volcano"} />
      <DashBoard />
    </>
  )
}

export default CheeseVolcano
