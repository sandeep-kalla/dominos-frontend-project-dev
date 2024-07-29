import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const NewLaunches = () => {
  return (
    <>
      <Navbar />
      <Tag text={"New Launches"} />
      <DashBoard />
    </>
  )
}

export default NewLaunches
