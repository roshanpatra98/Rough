import React from 'react';
// import NavOption from './NavOption';
import NavOptions from './NavOptions';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import DLMode from './DLMode';
// import SearchBar from './Search/SearchBar';
// import Logo_Dark from '../../pictures/Job-Stream-Logo-dark.png';
import Logo_Light from '../../pictures/Job-Stream-Logo-light.png';
// import { useState } from 'react';

const Navbar = () => {
    // const [image, setImage] = useState(false)

  return (
    <div>
        <Stack
            direction='row'
            alignItems='right'
            p={2}
            sx={{position:'sticky', background:'#183642', top:0, justifyContent:'space-between'}}
        >
            <Link to='/' style={{display:'flex', alignItems:'center'}}>
            {/* // onMouseOver={() => setImage(true)}
            // onMouseOut={() => setImage(false)}> */}
                    <img 
                    // src={image ? Logo_Dark : Logo_Light}
                    src={Logo_Light}
                     alt='Job Streamers' height={55}/>
            </Link>

            <Stack
                direction={{xs:'column', sm:'row'}}
                spacing={{xs:1}}
            >
                {/* <NavOption/> */}
                <NavOptions/>
                <DLMode/>
            </Stack>
        </Stack>
    </div>
  )
}

export default Navbar;