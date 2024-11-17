import Image from "next/image";
import Button from "./tailwindTypeSafe/Button";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <button >button from tailwind</button>
      <Button />
    </div>
  );
}
