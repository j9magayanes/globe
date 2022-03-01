import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, useCamera, shaderMaterial} from '@react-three/drei';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

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


export function Earth(props) {

    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap,  EarthSpecularMap, EarthCloudsMap]);
    const earthRef = useRef();
    const cloudsRef = useRef();

    const CameraController = () => {
        const { camera, gl } = useThree();
        useEffect(() => {
          const controls = new OrbitControls(camera, gl.domElement);
      
          controls.minDistance = 3;
          controls.maxDistance = 20;
          return () => {
            controls.dispose();
          };
        }, [camera, gl]);
        return null;
      };

    return <>
        <ambientLight intensity={1} position={[2, 0 ,5]}/>
        <Stars radius={300} depth={60} count={500} factor={7} saturation={0} fade={true}/>

        <mesh ref={cloudsRef} >
            <sphereGeometry attach="geometry" args={[2, 32, 32]} />
            <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        <mesh ref={earthRef}  >
            <sphereGeometry  args={[2, 32, 32]}  />
            <meshPhongMaterial specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
        </mesh>
    </>;

}