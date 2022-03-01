import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import { extend, useFrame, useLoader, useThree} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, useCamera, shaderMaterial, Box,  Text, Image, Center} from '@react-three/drei';
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


export function Pointer(props) {

    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap,  EarthSpecularMap, EarthCloudsMap]);
    const pointerRef = useRef();

    return <>
        <mesh ref={pointerRef} {...props}  onClick={(e) => alert(props.name)} >
            <sphereBufferGeometry args={[0.01]}/>
            <meshPhongMaterial specularMap={specularMap}/>
        </mesh>
    </>;
}