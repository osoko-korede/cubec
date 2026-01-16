"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your message! We'll be in touch soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6">Let's Talk</h1>
            <p className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you soon.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in touch</h2>
                  <p className="text-xl text-gray-400 mb-8">
                    If you'd like to talk about a project or learn more about our work, we're always happy to connect.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                      <a
                        href="mailto:reachout@cuebec.com"
                        className="text-xl hover:text-primary transition-colors underline decoration-primary"
                      >
                        reachout@cuebec.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Location</h3>
                      <p className="text-xl text-gray-400">11 bis, Hughes Avenue, Alexandria, NSW, Virginia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-8 text-black">
                  <h3 className="text-2xl font-bold mb-4">Looking for career opportunities?</h3>
                  <p className="mb-6">We're always interested in hearing from talented creatives and developers.</p>
                  <a href="mailto:careers@cuebec.com" className="text-lg font-medium underline">
                    View open positions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
