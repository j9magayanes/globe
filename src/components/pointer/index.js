import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three';
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import { extend,  useLoader,} from '@react-three/fiber';
import { shaderMaterial, } from '@react-three/drei';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';
import { News } from '../news';

const WaveShaderMaterial = shaderMaterial(
    {},
    glsl`
        void main() {
            gl_Position = projectMatrix * modelViewMatrix * vec4 (position, 1.0)
        }
    `,
    glsl`
        void main() {
            gl_FragColor = vec4(0.0,0.4,1.0,1.0);
        } 
    `
);

extend({ WaveShaderMaterial});

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
  
export function Pointer(props) {

    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap,  EarthSpecularMap, EarthCloudsMap]);
    const pointerRef = useRef();
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      setOpen(false) 
    }
  

    return <>
        <mesh ref={pointerRef} {...props}  onClick={() => {alert("jin")}}   >
            <sphereBufferGeometry args={[0.1]}  />
            <meshBasicMaterial color={props.color} attach="material" />
        </mesh>

    </>;
}