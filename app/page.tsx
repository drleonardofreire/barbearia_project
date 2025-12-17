// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Button variant="destructive">Click Me</Button>
    <Input placeholder="Type here..."  />
  </div>
  );
}
