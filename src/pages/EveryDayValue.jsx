import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const EveryDayValue = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Every Day Value Page"} />
      <DashBoard url={import.meta.env.VITE_EVERYDAY_URL}/>
    </>
  )
}

export default EveryDayValue
