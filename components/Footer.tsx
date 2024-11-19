"use client";

import { useState } from "react";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(text);

        setTimeout(() => setCopied(null), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  // Address for Google Maps
  const address = "Orangi Town, Sector 14-a, Karachi, Pakistan";
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="bg-[#0D1F2D] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="text-left max-w-md space-y-4">
          <h2 className="text-3xl font-bold ">Let&apos;s Talk</h2>
          <p className="text-sm">
            &quot;Taking care of plants is easier than you think! At [ Green
            E-Shop ], we not only provide you with stunning plants but also
            offer helpful tips and resources to ensure they thrive. Whether
            it&apos;s advice on how to water, when to repot, or how to deal with
            common pests, we&apos;re here to support you every step of the way.
            Our plant care guides are designed for all experience levels, so you
            can confidently grow and maintain a beautiful indoor garden. Join
            our community of plant lovers and let&apos;s grow together!&quot;
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 space-y-2">
          <div className="space-y-1">
            <p className="font-semibold">Email</p>
            <div className="flex items-center space-x-2">
              <Link
                href="mail to:faaizahmed488@gmail.com"
                className="text-blue-400 cursor-pointer"
                onClick={() => handleCopy("faaizahmed488@gmail.com")}
              >
                faaizahmed488@gmail.com
              </Link>
              {copied === "faaizahmed488@gmail.com" && (
                <span className="text-green-400">Copied!</span>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Contact on whatsapp </p>
            <div className="flex items-center space-x-2">
              <Link
                href="tel:03102289592"
                className="text-blue-400 cursor-pointer"
                onClick={() => handleCopy("03102289592")}
              >
                03102289592
              </Link>
              {copied === "03102289592" && (
                <span className="text-green-400">Copied!</span>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Our Address</p>
            <div className="flex items-center space-x-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 cursor-pointer"
              >
                Orangi Town <br />
                Sector 14-a <br />
                Karachi, Pakistan
              </a>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 ">
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaDiscord size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100095372565537"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/faaizkhanswati789/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/faaiz-ahmed-524236305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
