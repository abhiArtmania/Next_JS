import Image from "next/image";
import VercelImage from "../../../public/vercel.svg";
import style from "../../styles/custom.module.css";
// import generateMetaData from ""

export function generateMetadata() {
  return {
    title: "Image Optimization",
    description: "Image Optimization",
  };
}

export default function ImageComponent(){
    const { image } = style;
  return (
    <div>
      <h1>Image Optimization</h1>
      {/* <Image 
        className={image}
        src={VercelImage} 
        alt="Vercel Logo" 
        width={50} 
        height={50}
      />
      <img
        className={image}
        src={VercelImage.src}
      /> */}
      <Image
      alt="Pexels Image"
      width={300}
      height={250}
        src={"https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
      />
    </div>
  );
}