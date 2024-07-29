import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const ValueCombos = () => {
  return (
    <>
      <Navbar />
      <Tag text={"Value Combos"} />
      <DashBoard />
    </>
  )
}

export default ValueCombos
