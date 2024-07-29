import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const Breads = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Garlic Bread & More"} />
      <DashBoard />
    </>
  )
}

export default Breads
