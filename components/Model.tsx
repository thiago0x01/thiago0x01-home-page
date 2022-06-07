import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const Model = ({ ...props }): JSX.Element => {
  const group = useRef() as any;
  const { nodes, materials } = useGLTF('/scene.gltf') as any;

  return (
    <group ref={group} {...props} dispose={null} scale={8}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-0.55, -0.17, -0.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.BottomPC_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-2.24, 2.45, 13.81]}
            rotation={[-Math.PI / 2, 0.13, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Buttons_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-4.28, 2.27, -21.05]}
            rotation={[-1.71, 0.18, 0.22]}
            scale={100}
          >
            <mesh
              geometry={nodes.Smallbutton_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-9, 4, 0]}
            rotation={[-Math.PI / 2, -0.3, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.MainPC_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-20.09, 10.93, -0.5]}
            rotation={[-Math.PI / 2, -0.3, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.LCD_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-11.39, 6.99, -13.44]}
            rotation={[-Math.PI / 2, 1.28, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.MainButtons_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-11.31, 6.43, 2.2]}
            rotation={[-Math.PI / 2, -0.05, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cable_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-11.72, 6.94, 7.11]}
            rotation={[-Math.PI / 2, -0.28, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cube_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-29.05, 3.86, -11.44]}
            rotation={[-Math.PI / 2, -0.3, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.BackButtons_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-10.99, 9.36, -20.75]}
            rotation={[-1.62, -0.33, 0.28]}
            scale={100}
          >
            <mesh
              geometry={nodes.Latch_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-32.55, 3.83, 1.27]}
            rotation={[-Math.PI / 2, -0.27, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Handle_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-12.16, 8.94, -7.49]}
            rotation={[-Math.PI / 2, 1.25, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Spinner_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-15.5, 17.22, 16.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.CubeTop_low_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Model;
