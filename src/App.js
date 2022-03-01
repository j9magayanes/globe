import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth';
import { Pointer } from './components/pointer';
import { OrbitControls,Text } from '@react-three/drei';
import { News } from './components/news';
import * as THREE from 'three';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  let isTrue = false
  return (
    <CanvasContainer>
     {isTrue && <News/>}
      <Canvas>
        <Suspense fallback={null}>
        <Text position={[1.233332819069036, 1.6579254204556254, -0.22750503665938274]}  color="white">Test</Text>
        <Pointer  position={[1.233332819069036, 1.5579254204556254, -0.22750503665938274]} name={"DE"}  />
        <OrbitControls/>
          <Earth  />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
