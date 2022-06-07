import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Model = ({ ...props }): JSX.Element => {
  const group = useRef() as any;
  const { nodes, materials } = useGLTF('/scene.gltf') as any;

  return (
    <group ref={group} {...props} dispose={null} scale={2.25}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.defaultMat}
          material-color="red"
        />
      </group>
    </group>
  );
};

export default Model;
