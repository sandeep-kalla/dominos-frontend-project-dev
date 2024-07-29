import DashBoard from "../modules/dashboard/components/DashBoard"
import Header from "../shared/components/Header"
import Navbar from "../shared/components/NavBar"
import Tag from "../shared/widgets/Tag"

const Home = () => {
  console.log("Pizza URL:", import.meta.env.VITE_PIZZA_URL);
  return (
    <>
      <Navbar />
      <Tag text={"Recommended"} /> 
      <DashBoard url={import.meta.env.VITE_PIZZA_URL}/>  
    </>
  )
}

export default Home
