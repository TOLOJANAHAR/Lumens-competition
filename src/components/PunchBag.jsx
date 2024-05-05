import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function PunchBag(props) {
    const { nodes, materials } = useGLTF('/models/PunchBag.glb');
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));

    let inc = 1;

    const applyForce = (event) => {
        // Calculate the direction of the force
        const direction = event.intersections[0].face.normal;
        // Apply the force
        api.applyForce([direction.x * 60, direction.y * 60, direction.z * 60], [0, 0, 0]);
        // api.applyForce([direction.x * 100, direction.y * 100, direction.z * 100], [0, 0, 0]);

        console.log(inc++);
    };

    return (
        <group {...props} dispose={null} ref={ref} onClick={applyForce}>
            <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.lambert4SG} position={[0, -1, 0]} />
            <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.lambert3SG} position={[0, -1, 0]} />
            <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.lambert2SG} position={[0, -1, 0]} />
        </group>
    );
}

