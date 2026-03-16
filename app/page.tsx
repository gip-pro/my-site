import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

                <Image
                    src="/photo.jpg"
                    width={160}
                    height={160}
                    alt="Igor Pronkin"
                    className="rounded-full mb-6"
                />

                <h1 className="text-5xl font-bold mb-4">
                    Игорь Пронькин
                </h1>

                <p className="text-xl max-w-2xl mb-8">
                    Инженер-проектировщик. Разработка проектов организации строительства (ПОС)
                    и проектов производства работ (ППР). Более 11 лет опыта в строительном
                    планировании и инженерной документации.
                </p>

            </section>


            {/* ABOUT */}
            <section className="py-24 px-6 max-w-4xl mx-auto">

                <h2 className="text-3xl font-bold mb-6">
                    Обо мне
                </h2>

                <p className="text-lg leading-relaxed">
                    Construction Project Engineer с опытом более 11 лет в разработке
                    организационно-технологической документации для строительных
                    и инфраструктурных проектов. Специализация — разработка ПОС,
                    ППР, подготовка графиков строительства, координация инженерных
                    команд и обеспечение соответствия проектной документации
                    строительным нормативам.
                </p>

            </section>


            {/* SERVICES */}
            <section className="py-24 px-6 bg-gray-50">

                <h2 className="text-3xl font-bold text-center mb-16">
                    Услуги
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <div className="border p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Проект организации строительства
                        </h3>
                        <p>
                            Разработка раздела ПОС для проектной документации
                            в соответствии с требованиями нормативных документов.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Проект производства работ
                        </h3>
                        <p>
                            Подготовка ППР для строительных и монтажных работ,
                            включая технологические решения и графики.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Исполнительная документация
                        </h3>
                        <p>
                            Подготовка исполнительных схем, актов и комплектов
                            технической документации.
                        </p>
                    </div>

                </div>

            </section>


            {/* SKILLS */}
            <section className="py-24 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-16">
                    Навыки
                </h2>

                <div className="grid md:grid-cols-2 gap-8 text-lg">

                    <ul className="space-y-3">
                        <li>Construction Planning (POS / PPR)</li>
                        <li>Construction Scheduling</li>
                        <li>Engineering Documentation</li>
                        <li>Project Coordination</li>
                    </ul>

                    <ul className="space-y-3">
                        <li>AutoCAD</li>
                        <li>MS Office</li>
                        <li>Adobe Acrobat</li>
                        <li>Client Communication</li>
                    </ul>

                </div>

            </section>


            {/* EXPERIENCE */}
            <section className="py-24 px-6 bg-gray-50">

                <h2 className="text-3xl font-bold text-center mb-16">
                    Опыт работы
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">

                    <div>
                        <h3 className="text-xl font-semibold">
                            Индивидуальный предприниматель
                        </h3>

                        <p className="text-gray-600 mb-2">
                            2018 – настоящее время
                        </p>

                        <p>
                            Разработка проектов организации строительства (ПОС),
                            подготовка ППР, планирование строительных процессов
                            и координация инженерных специалистов.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold">
                            ООО «Трансэлектропроект»
                        </h3>

                        <p className="text-gray-600 mb-2">
                            2014 – 2018
                        </p>

                        <p>
                            Подготовка проектов организации строительства для
                            инфраструктурных объектов и координация инженерных
                            команд.
                        </p>
                    </div>

                </div>

            </section>


            {/* CONTACT */}
            <section className="py-24 px-6 text-center bg-gray-900 text-white">

                <h2 className="text-3xl font-bold mb-6">
                    Контакты
                </h2>

                <p className="text-lg mb-2">
                    Email: igor.g.pronkin@gmail.com
                </p>

                <p className="text-lg">
                    proekt-ppr.ru
                </p>

            </section>

        </main>
    );
}