import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const PizzaMania = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Pizza Mania"} />
      <DashBoard />
    </>
  )
}

export default PizzaMania
