import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Bio from '../components/Bio';
import Header from '../components/Header';
import Model from '../components/Model';
import OnTheWeb from '../components/OnTheWeb';
import Works from '../components/Works';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <>
      <div className="mt-[100px] w-full h-[300px]">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight color={0xcccccc} intensity={50} />

            <Model />

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate
              autoRotate={true}
              autoRotateSpeed={10}
            />
          </Suspense>
        </Canvas>
      </div>

      <Header />

      <Works />

      <Bio />

      <OnTheWeb />
    </>
  );
};

export default Home;
