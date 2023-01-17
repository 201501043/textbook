import { Outlet, Link } from "react-router-dom";
import "./options.css"
const Layout = () => {
  return (
    <>
    <div className='options-content'>
        <div className='options'>
      <Link to='/textbook'><button className='btn'><h2>S E M E S T E R - I</h2></button></Link>
      <Link to="/textbook/pages/sem2"><button className='btn'><h2>S E M E S T E R - II</h2></button></Link>
      <Link to="/textbook/pages/sem3"><button className='btn'><h2>S E M E S T E R - III</h2></button></Link>
      <Link to="/textbook/pages/sem4"><button className='btn'><h2>S E M E S T E R - IV</h2></button></Link>
      <Link to="/textbook/pages/sem5"><button className='btn'><h2>S E M E S T E R - V</h2></button></Link>
      <Link to="/textbook/pages/sem6"><button className='btn'><h2>S E M E S T E R - VI</h2></button></Link>
      <Link to="/textbook/pages/sem7"><button className='btn'><h2>S E M E S T E R - VII</h2></button></Link>
      <Link to="/textbook/pages/sem8"><button className='btn'><h2>S E M E S T E R - VIII</h2></button></Link>
      
      </div><Outlet/></div>
    </>
  )
};

export default Layout;