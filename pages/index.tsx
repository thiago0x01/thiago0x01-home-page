import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

import Model from '../components/Model';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-[100px] w-full h-[300px]">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight color={0xcccccc} intensity={1} />

            <Model />

            <OrbitControls
              enablePan
              enableZoom={false}
              enableRotate
              autoRotate={true}
              autoRotateSpeed={10}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-[36px]">Thiago Machado</h1>
          <h2 className="text-[18px]">Developer</h2>
        </div>

        <div className="w-[100px] h-[100px] rounded-full border-[4px] border-orange relative">
          <img
            src="/images/unnamed.png"
            className="rounded-full"
            alt="profile image"
          />
        </div>
      </div>

      <div className="mt-[30px]">
        <div className="relative w-fit">
          <h3 className="font-bold text-[24px] relative z-20">Works</h3>

          <div className="absolute bottom-2 right-0 h-[5px] w-[35px] bg-orange z-10"></div>
        </div>

        <p className="text-[18px]">
          Thiago is a “
          <span className="text-orange font-bold">Professional on T</span>” with
          expertise on <span className="text-orange font-bold">front end</span>{' '}
          development using TypeScript, React and NextJS. Too have embracing
          knowledge on back end development with{' '}
          <span className="text-orange font-bold">
            TypeScript, Node.js, PostgreSQL and MongoDB, UI Design
          </span>{' '}
          with <span className="text-orange font-bold">Figma</span> and too
          having <span className="text-orange font-bold">exploring</span> the
          smart contract development with{' '}
          <span className="text-orange font-bold">Solidity</span>.
        </p>
      </div>

      <div className="mt-[20px]">
        <div className="relative w-fit">
          <h3 className="font-bold text-[24px] relative z-20">Bio</h3>

          <div className="absolute bottom-2 right-0 h-[5px] w-[18px] bg-orange z-10"></div>
        </div>

        <p className="text-[18px]">
          <span className="font-bold">2000</span> Born in Juiz de Fora, Minas
          Gerais, Brazil
        </p>

        <p className="text-[18px]">
          <span className="font-bold">2019</span> Worked at{' '}
          <span className="text-orange font-bold">Brazilian Army</span> as a
          Soldier on technology section
        </p>

        <p className="text-[18px]">
          <span className="font-bold">2021</span> Worked at{' '}
          <span className="text-orange font-bold">Ligg Contact Services</span>{' '}
          as a Computer Support Analyst & Full Stack Developer
        </p>

        <p className="text-[18px]">
          <span className="font-bold">2022</span> 2022 to present Working at{' '}
          <span className="text-orange font-bold">Cobogo</span> as a Full Stack
          Developer
        </p>
      </div>

      <div className="mt-[20px]">
        <div className="relative w-fit">
          <h3 className="font-bold text-[24px] relative z-20">On the web</h3>

          <div className="absolute bottom-2 right-0 h-[5px] w-[62px] bg-orange z-10"></div>
        </div>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/thiago0x01/"
          className="text-[18px] text-orange flex justify-start items-center"
          rel="noreferrer"
        >
          <ImLinkedin />
          @thiago0x01
        </a>

        <a
          target="_blank"
          href="https://twitter.com/thiago0x01"
          className="text-[18px] text-orange flex justify-start items-center"
          rel="noreferrer"
        >
          <ImTwitter />
          @thiago0x01
        </a>

        <a
          target="_blank"
          href="https://github.com/thiago0x01"
          className="text-[18px] text-orange flex justify-start items-center"
          rel="noreferrer"
        >
          <ImGithub />
          @thiago0x01
        </a>
      </div>
    </div>
  );
};

export default Home;
