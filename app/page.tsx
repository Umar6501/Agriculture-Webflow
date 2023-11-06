import Link from "next/link";
import "./header/Home.scss";
export default function Home() {
  return (
    <main className="mt-8">
      <section>
        <img src="./bgimg.png" alt="" className="absolute z-[-10]" />
        <div className="container">
          <div className="home-content flex w-full justify-center items-start flex-col h-[96vh]">
            <p className="i-1">100% Natural Food lore</p>
            <h1 className="i-2">
              Choose the best <br /> healthier way <br /> of life
            </h1>
            <Link href="#" className="i-3">
              <p>Explore Now</p>
              <img src="./rightarrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
