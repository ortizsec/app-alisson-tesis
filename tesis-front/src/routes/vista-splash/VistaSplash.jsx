import ImagenFondo from "./components/ImagenFondo";
import LogoAgro from "./components/LogoAgro";
import Boton from "./components/Boton";
import TextoInicio from "./components/TextoInicio";
import { useNavigate } from 'react-router-dom';


export default function VistaSplash() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo en capa inferior */}
            <ImagenFondo />


            {/* Overlay con el color base para mejorar contraste del texto */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#BDD251]/80 via-black/40 to-black/80" />


            {/* Contenido centrado */}
            <main className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8">
                <section className="flex w-full max-w-3xl flex-col items-center gap-6 text-center sm:gap-8">
                    <LogoAgro />
                    <TextoInicio />
                    <Boton onClick={() => { navigate('/login'); }}>
                        Empezar…
                    </Boton>
                </section>
            </main>
        </div>
    );
}