import { Navbar } from "@/components";
import dynamic from "next/dynamic";
import Image from "next/image";
import Sidebar from "../components/Sidebar/Sidebar";
import Welcome from "../components/Welcome/Welcome"

const MyCharts = dynamic(() => import("../components/MyCharts/MyCharts"), {
  ssr: false,
});

const Example1 = dynamic(() => import("../components/Example/Example1"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-4 ">
      {" "}
      <div className="col-span-1 bg-white h-screen w-full ">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        <div className="bg-[#f4f7fb] rounded-2xl h-auto mx-5  p-7 grid gap-8">
          <div className=" grid grid-cols-5  gap-6 h-96">
            <div className="col-span-2 grid grid-rows-2 gap-4  ">
              <div className="col-span-2 bg-[#635bff] rounded-2xl">
                {/* <Welcome/> */}
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-[#a6f7f5] rounded-xl"></div>
                <div className="col-span-1 bg-[#ffccdb] rounded-xl "></div>
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-xl"></div>
          </div>
          <div className=" grid grid-cols-5  gap-6 h-80">
            <div
              className="col-span-2 bg-white 
             rounded-xl"
            ></div>
            <div className="col-span-3 grid grid-cols-2 gap-5">
              <div className=" bg-white rounded-xl"></div>
              <div className=" bg-white rounded-xl "></div>
            </div>
          </div>

          <div className=" grid grid-cols-3  gap-6 h-96">
            <div className="col-span-2 bg-white rounded-xl"></div>
            <div className="col-span-1 bg-[#dddbff] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
