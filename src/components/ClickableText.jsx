import {useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";
import {Text} from "@react-three/drei";
import {degToRad} from "maath/misc";

export function ClickableText({newZPos,setZPos, zPos, position=[]}) {
    const {camera} = useThree(); // Access the camera
    const camRef = useRef(camera); // Create a reference to the camera

    let actualZPos = newZPos

    const handleClick = async () => {
         // Increment z position
        setZPos(actualZPos);
        camRef.current.dolly(-22);
        camRef.current.smoothTime = 1.6;
        await camRef.current.dolly(22, true);
    };

    useFrame(() => {
        // Smoothly interpolate camera position
        camRef.current.position.z += (zPos - camRef.current.position.z) * 0.03;
    });

    return (
        <Text position={position} fontSize={1} rotation={[degToRad(-90), 0, degToRad(-90)]}
              onClick={handleClick}>
            >>
        </Text>
    );
}