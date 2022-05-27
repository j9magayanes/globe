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
import CanvasMap from './components/canvas';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  
  return (
    <>
    <CanvasMap/>
    </>
  );
}

export default App;
