// import React, { useContext, useState } from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { MyContext } from '../utils/contextProvider';

// export function Popover() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [products, setProducts,users,setUsers] = useContext(MyContext);


//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;

//     return (
//         <div>
//             <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//                 Open Popover
//             </Button>
//             <Popover
//                 id={id}
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//             >
//                 <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
//             </Popover>
//         </div>
//     );
// }