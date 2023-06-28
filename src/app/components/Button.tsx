"use client"
import { Button } from "@material-tailwind/react";
 
interface PropsButton {
    text: string;
}

export default function Example({text}: PropsButton) {
  return <Button onClick={()=>console.log(text)} size="sm" className="font-[default] text-[16px] self-baseline">{text}</Button>;
}