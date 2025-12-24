import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen spa">
      <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">Welcome to the Mugdhos Blog</h1>
      <p>Your go-to place for insightful articles and updates.</p>
      </div>
      <Image
        src="/image.png"
        alt="Blog Image"
        width={600}
        height={400}
      />
    </div>
  );
}
