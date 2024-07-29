import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <>
      <section className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-6 md:mb-0 text-[14px] ">
            <Link href="/">
              <p className="text-white font-bold text-lg pb-2 ">
                Road<span className="text-[#70ABBB]">Ahead</span>
              </p>
            </Link>
            <p>Mirpur, Dhaka </p>
            <p>Bangladesh</p>
            <p> roadAhead@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-md font-semibold mb-2">Visit Us</h2>
            <ul>
              <li className="mb-1">
                <Link
                  className="text-[14px]
                    text-white"
                  href="/sign-in"
                >
                  <div className="text-white">Log in</div>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-[14px]
                    text-white"
                  href="/sign-up"
                >
                  <div className="text-white"> Sign up</div>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-[14px]
                    text-white"
                  href="/map"
                >
                  <div className="text-white"> Map</div>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-[14px]
                    text-white"
                  href="/contact"
                >
                  <div className="text-white"> Contact </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-md font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:underline">
                <CiFacebook size={22} color="white" />
              </a>
              <a href="#twitter" className="hover:underline">
                <CiTwitter size={22} color="white" />
              </a>
              <a href="#linkedin" className="hover:underline">
                <CiLinkedin size={22} color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mr-5 text-right">
          <p className="text-[14px]">© 2024 RoadAhead. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
