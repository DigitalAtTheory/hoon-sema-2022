import Head from "next/head";
import HeroImage from "../components/HeroImage";
import TitleImage from "../components/TitleImage";
import Lockup from "../components/Lockup";
import Bottle from "../components/Bottle";
import Form from "../components/Form";
import Slash from "../components/Slash";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoonipigasus - SEMA 2022</title>
      </Head>
      <Slash />
      <div className="max-w-5xl px-8 mx-auto flex flex-col align-middle justify-center relative z-20">
        <div className="text-center py-12 md:py-24">
          <HeroImage />
        </div>
        <div className="mb-12">
          <div className="md:w-3/4 mx-auto flex justify-center mb-12">
            <TitleImage />
          </div>
          <div>
            <p className="text-center text-white text-lg md:text-3xl font-light w-3/4 mx-auto">
              {`Starting here at SEMA, we're inviting you dear reader, to experience more content on the Hoonipigasus before it drops anywhere else.`}
            </p>
          </div>
          <Link
            className="text-white text-lg py-4 px-16 bg-[#f51832] font-semibold rounded-lg block text-center md:w-3/4 lg:w-3/12 mx-auto mt-12 cursor-pointer"
            to="formContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Count me in
          </Link>
        </div>
        <div className="md:w-3/4 mx-auto flex justify-center mb-12">
          <Lockup />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 w-3/4 mx-auto">
          <div>
            <Bottle />
            <p className="text-center text-sm text-gray-500 mt-4">
              *Mobil 1 bottle custom label not found elsewhere.
            </p>
          </div>
          <p className="lg:w-11/12 text-white text-center md:text-left text-lg md:text-3xl font-light self-center">{`More than 1,500,000 Porsche engines have been filled with Mobil 1 from day one. That includes the most powerful Porsche engines ever built. While the Hoonipigasus does retain 1,400 of flying pony power, it relies on the same Mobil 1 technology found in the daily drivers coming out of Stuttgart.`}</p>
        </div>
        <div id="formContainer" className="my-24 max-w-2xl mx-auto">
          <h2 className="text-4xl text-white font-bold text-center mb-12">
            Sign up, stay tuned
          </h2>
          <Form formId="134" />
        </div>
      </div>
    </div>
  );
}
