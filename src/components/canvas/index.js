import * as THREE from 'three';
import styled from 'styled-components';
import React, {useState, Suspense}from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '../card';
import { Earth } from '../earth';
import { Pointer } from '../pointer';
import { OrbitControls,Text } from '@react-three/drei';
import { News } from '../news';
import  Header  from '../header';
/* import Nestedmodal from '../nestedmodal'; */
import "./index.css";
import { Canvas } from '@react-three/fiber';
import { display } from '@mui/system';


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Nestedmodal(props) {

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false) 
  }

  return (
    <div>
    <Modal
      open={true}
      onClick={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}    >
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Box>
    </Modal>
  </div>
  )
}

function CanvasMap() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
      <>
   
    <Header  />
    <div className='card'>
    <Card  />
    </div>
 
    <CanvasContainer>  
      <Canvas className='canvas'>
        <Suspense fallback={null}>
        {/* <Pointer  position={[1.233332819069036, 1.5579254204556254, -0.22750503665938274]} name={"DE"}  color={0xffff00} onClick={handleOpen} /> */}
        <OrbitControls/>
          <Earth  />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    
      </>
  );
}

export default CanvasMap;
