import Image from "next/image"
import { Mail, Globe, Linkedin } from "lucide-react"

export default function Home() {
    return (
        <main className="max-w-[720px] mx-auto px-6 py-20 font-sans text-[#37352f]">

            {/* HEADER */}

            <section className="flex items-center gap-5 mb-12">

                <Image
                    src="/avatar.jpg"
                    width={72}
                    height={72}
                    alt="Igor Pronkin"
                    className="rounded-full"
                />

                <div>

                    <h1 className="text-[40px] font-semibold leading-tight">
                        Igor Pronkin
                    </h1>

                    <p className="text-[#787774] text-[16px]">
                        Construction Planning Engineer (POS / PPR)
                    </p>

                </div>

            </section>


            {/* DESCRIPTION */}

            <section className="mb-14 text-[16px] leading-7 text-[#37352f]">

                <p>
                    Construction Project Engineer with more than 11 years of experience
                    in construction planning and development of Construction Organization
                    Projects (POS) and Work Execution Plans (PPR).
                </p>

            </section>


            {/* LINKS */}

            <section className="space-y-3 mb-16">

                <a
                    href="mailto:igor.g.pronkin@gmail.com"
                    className="flex items-center gap-3 text-[#37352f] hover:bg-gray-100 px-2 py-1 rounded"
                >
                    <Mail size={16} />
                    Email
                </a>

                <a
                    href="https://proekt-ppr.ru"
                    className="flex items-center gap-3 text-[#37352f] hover:bg-gray-100 px-2 py-1 rounded"
                >
                    <Globe size={16} />
                    Website
                </a>

                <a
                    href="#projects"
                    className="flex items-center gap-3 text-[#37352f] hover:bg-gray-100 px-2 py-1 rounded"
                >
                    <Linkedin size={16} />
                    LinkedIn
                </a>

            </section>


            {/* PROJECTS */}

            <section id="projects" className="mb-20">

                <h2 className="text-[28px] font-semibold mb-6">
                    Projects
                </h2>

                <div className="space-y-2">

                    <div className="p-3 rounded hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">
                            Construction Organization Project
                        </p>
                    </div>

                    <div className="p-3 rounded hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">
                            Work Execution Plan (PPR)
                        </p>
                    </div>

                    <div className="p-3 rounded hover:bg-gray-100 cursor-pointer">
                        <p className="font-medium">
                            Engineering Documentation
                        </p>
                    </div>

                </div>

            </section>


            {/* EXPERIENCE */}

            <section className="mb-20">

                <h2 className="text-[28px] font-semibold mb-6">
                    Experience
                </h2>

                <div className="space-y-4">

                    <div>
                        <p className="font-medium">
                            Individual Entrepreneur
                        </p>

                        <p className="text-[#787774] text-[14px]">
                            2018 — Present
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">
                            Transelectroproject
                        </p>

                        <p className="text-[#787774] text-[14px]">
                            2014 — 2018
                        </p>
                    </div>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="text-[#9b9a97] text-[14px]">

                © 2026 Igor Pronkin

            </footer>

        </main>
    )
}