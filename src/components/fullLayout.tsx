import Image from "next/image";

export default function FullLayout(
    {name, imagePath}: {name: string; imagePath: string}
) {
    return <div className="relative flex flex-col items-center gap-5">
        <h1 className="font-bold text-4xl">{name}</h1>
        <Image
            src={imagePath}
            alt="Main image"
            width={900}
            height={400}
        />
    </div>
}