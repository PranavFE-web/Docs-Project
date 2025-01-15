import React from "react";
import Card from "./Card";
import { motion } from "framer-motion"
function Foreground() {
  const ref = React.useRef(null);
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".12mb",   
      close: true,
      tag: { isopen:true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",   
      close: false,
      tag: { isopen:true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",   
      close: false,
      tag: { isopen:true, tagTitle: "Download Now", tagColor: "green" },
    },{
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",   
      close: false,
      tag: { isopen:true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-fill h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
