import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const Beverages = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Beverages"} />
      <DashBoard url={import.meta.env.VITE_BEVERAGE_URL} />
    </>
  )
}

export default Beverages
