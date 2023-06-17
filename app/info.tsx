import React from 'react'
import { Truck } from "lucide-react";
import { Twitter, Facebook, Linkedin } from "lucide-react";


const Info = () => {
  return (
    <div className="container flex pt-12 pb-12 mb-12">
      <div className="w-3/5 pr-12 ">
        <div className="flex pb-8 font-bold">
          <Truck className="h-10 w-11" />
          &nbsp;
          <h4 className="text-4xl">E-Store</h4>
        </div>
        <p className="pb-6">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex">
          <Twitter className="h-9 w-9 fill-black m-2 p-2 bg-gray-100 rounded " />
          <Facebook className="h-9 w-9 fill-black m-2 p-2 bg-gray-100 rounded " />
          <Linkedin className="h-9 w-9 fill-black m-2 p-2 bg-gray-100 rounded " />
        </div>
      </div>
      <div className="w-1/5">
        <h3 className="text-2xl font-bold pb-4">Company</h3>
        <ul>
          <li className="pb-2">About</li>
          <li className="pb-2">Term of Use</li>
          <li className="pb-2">Privacy Policy</li>
          <li className="pb-2">How to Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-1/5">
        <h3 className="text-2xl font-bold pb-4">Support</h3>
        <ul>
          <li className="pb-2">Support Center</li>
          <li className="pb-2">24h Service</li>
          <li className="pb-2">Quick Chat</li>
        </ul>
      </div>
      <div className="w-1/5">
        <h3 className="text-2xl font-bold pb-4">Contact</h3>
        <ul>
          <li className="pb-2">Whatsapp</li>
          <li className="pb-2">Support 24h</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;