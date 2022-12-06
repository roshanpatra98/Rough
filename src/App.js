import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import ContactUs from './components/ContactUs';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Navbar from './components/NavBar/Navbar';
import ProfileInfo2 from './components/ProfileInfo/ProfileInfo2';
import Footer from './components/Footer/Footer';
import MyJobs from './components/MyJobs';

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor: '#00637A'}}>
                <Navbar/>
            </Box>
            <Routes>
                <Route path='/myJobs' element={<MyJobs/>}/>
                <Route path='/contactUs' element={<ContactUs/>}/>
                <Route path='/Login' element={<LogIn/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profileInfo' element={<ProfileInfo2/>}/>
            </Routes>
            <Box sx={{backgroundColor: '#00637A'}}>
                <Footer/>
            </Box>
        </BrowserRouter>
    )
}

export default App;