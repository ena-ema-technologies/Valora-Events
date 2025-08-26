"use client";

import { images } from "@/assets";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function Hero() {
  const [formData, setFormData] = useState({
    eventType: "",
    name: "",
    email: "",
    date: "",
  });

  const dateInputRef = useRef<HTMLInputElement>(null);

  const { brand1, brand2, brand3, brand4 } = images;
  const brands = [brand1, brand2, brand3, brand4];

  return (
    <div className="min-h-screen relative pt-[100px] pb-14">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.heroBg}
          alt="Elegant dining room setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pb-4 text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-2 border border-white/30">
            <span className="text-white text-sm font-medium">
              100% event success rate
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-[88px] font-bold text-white my-3 leading-tight font-montserrat">
            We Plan, You Shine
          </h1>
          <p className="text-white/90 font-medium text-base max-w-2xl mb-12 leading-relaxed">
            Corporate launch or private party — we make it memorable,
            stress-free, and flawlessly managed from first call to final toast.
          </p>

          {/* Booking Form */}
          <div className="w-full max-w-6xl bg-black/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <p className="text-white font-montserrat text-2xl font-bold mb-2 text-center">
              Quick event booking
            </p>
            <p className="text-white text-base font-medium text-center mb-8">
              Just complete the form and we'll handle the rest
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
              {/* Event Type Dropdown */}
              <div className="relative">
                <Select
                  value={formData.eventType}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, eventType: value })
                  }
                >
                  <SelectTrigger className="bg-black/20 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/20 text-white">
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Your Name */}
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-black/20 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg"
              />

              {/* Email Address */}
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-black/20 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg"
              />

              {/* Date */}
              <div className="relative">
                <Input
                  ref={dateInputRef}
                  type="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-black/20 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg w-full pr-10 
                             [&::-webkit-calendar-picker-indicator]:hidden" // ✅ Hide default browser icon
                />

                {/* Calendar Icon clickable */}
                <button
                  type="button"
                  onClick={() => dateInputRef.current?.showPicker()}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
                >
                  <Calendar className="w-5 h-5" />
                </button>
              </div>

              <Button className="bg-[#FF982F] hover:bg-[#ff972fdc] text-white px-8 py-3 rounded-lg font-semibold text-lg h-12 min-w-[200px] cursor-pointer">
                Get a free quote
              </Button>
            </div>

            <div className="text-center">
              <p className="text-white text-sm mt-4">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-16">
          <div className=" bg-white/10 backdrop-blur-xs text-center py-5">
            <p className="text-black mb-4 font-montserrat shadow-2xl">
              Our trusted partners
            </p>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {brands?.map((brand, idx) => (
                <Image key={idx} src={brand} alt="brand" width={120} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
