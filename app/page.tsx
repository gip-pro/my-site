export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-900">

            <section className="h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl font-bold mb-6">
                    Игорь — инженер-проектировщик
                </h1>

                <p className="text-xl max-w-xl mb-8">
                    Разработка ПОС, ППР и организационно-технологической документации.
                    Опыт 11 лет.
                </p>

                <button className="bg-black text-white px-6 py-3 rounded-xl">
                    Связаться
                </button>
            </section>

            <section className="py-24 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Услуги
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="p-6 border rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">ПОС</h3>
                        <p>Проект организации строительства</p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">ППР</h3>
                        <p>Проект производства работ</p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Исполнительная документация</h3>
                        <p>Подготовка исполнительных схем</p>
                    </div>

                </div>

            </section>
        </main>
    );
}