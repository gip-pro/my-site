import Image from "next/image"

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">

            {/* HEADER */}
            <section className="flex items-center gap-6 mb-12">

                <Image
                    src="/avatar.jpg"
                    width={80}
                    height={80}
                    alt="Igor Pronkin"
                    className="rounded-full"
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        Igor Pronkin
                    </h1>

                    <p className="text-gray-600">
                        Construction Planning Engineer (POS / PPR)
                    </p>
                </div>

            </section>


            {/* INTRO */}
            <section className="mb-12 text-lg leading-relaxed">

                <p>
                    Construction Project Engineer with 11+ years of experience
                    in construction planning, development of Construction Organization
                    Projects (POS) and Work Execution Plans (PPR).
                </p>

            </section>


            {/* LINKS */}
            <section className="mb-16 space-y-3">

                <a
                    href="mailto:igor.g.pronkin@gmail.com"
                    className="block underline"
                >
                    Email
                </a>

                <a
                    href="https://proekt-ppr.ru"
                    className="block underline"
                >
                    Website
                </a>

                <a
                    href="#projects"
                    className="block underline"
                >
                    Projects
                </a>

            </section>


            {/* PROJECTS */}
            <section id="projects">

                <h2 className="text-2xl font-semibold mb-6">
                    Projects
                </h2>

                <div className="space-y-6">

                    <div className="border rounded-lg p-6 hover:bg-gray-50">
                        <h3 className="font-semibold text-lg">
                            Construction Organization Project
                        </h3>

                        <p className="text-gray-600">
                            Development of POS documentation for infrastructure
                            construction projects.
                        </p>
                    </div>


                    <div className="border rounded-lg p-6 hover:bg-gray-50">
                        <h3 className="font-semibold text-lg">
                            Work Execution Plan (PPR)
                        </h3>

                        <p className="text-gray-600">
                            Preparation of PPR for construction and installation works.
                        </p>
                    </div>


                    <div className="border rounded-lg p-6 hover:bg-gray-50">
                        <h3 className="font-semibold text-lg">
                            Engineering Documentation
                        </h3>

                        <p className="text-gray-600">
                            Preparation of engineering documentation and construction
                            schedules.
                        </p>
                    </div>

                </div>

            </section>


            {/* EXPERIENCE */}
            <section className="mt-16">

                <h2 className="text-2xl font-semibold mb-6">
                    Experience
                </h2>

                <div className="space-y-6">

                    <div>
                        <p className="font-semibold">
                            Individual Entrepreneur
                        </p>

                        <p className="text-gray-600">
                            2018 — Present
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            Transelectroproject
                        </p>

                        <p className="text-gray-600">
                            2014 — 2018
                        </p>
                    </div>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="mt-20 text-gray-500 text-sm">

                © 2026 Igor Pronkin

            </footer>

        </main>
    )
}