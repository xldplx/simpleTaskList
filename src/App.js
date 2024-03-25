export default function App() {
    return (
        <section className="h-[80vh] w-[100%] flex justify-center items-center">
            <div className="border px-[10rem] py-[5rem] font-mono space-y-2 rounded-lg shadow-xl">
                <h1>[ use the button below to use the app ]</h1>
                <div className="flex justify-center gap-6">
                    <button className="border-2 rounded-lg text-black px-[1rem] py-[0.2rem] hover:bg-black hover:border-black hover:scale-110 hover:text-white transition-all duration-500">
                        create
                    </button>
                    <button className="border-2 rounded-lg text-black px-[1rem] py-[0.2rem] hover:bg-black hover:border-black hover:scale-110 hover:text-white transition-all duration-500">
                        delete
                    </button>
                    <button className="border-2 rounded-lg text-black px-[1rem] py-[0.2rem] hover:bg-black hover:border-black hover:scale-110 hover:text-white transition-all duration-500">
                        ???
                    </button>
                </div>
            </div>
        </section>
    );
}
