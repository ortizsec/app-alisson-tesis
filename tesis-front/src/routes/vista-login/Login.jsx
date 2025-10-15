import { useState } from 'react';
import Logo from "../../assets/logos/logo-agro.png";
import FondoNat from "../../assets/images/fondo-nar.jpg";

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // Demo: sólo muestra en consola y alerta
        console.log('login', { usuario, password });
        alert('Login demo: ' + usuario);
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <img src={FondoNat} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />

            <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#BDD251]/80 via-black/40 to-black/80" />

            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col items-center gap-4 text-center">
                    <img src={Logo} alt="logo" className="w-28" />
                    <h1 className="text-2xl font-semibold text-white">Iniciar sesión</h1>
                    <p className="text-sm text-gray-300">Introduce tus credenciales para continuar</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <label className="flex flex-col text-sm text-gray-200">
                        Usuario
                        <input
                            type="text"
                            required
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDD251]"
                            placeholder="administrador"
                        />
                    </label>

                    <label className="flex flex-col text-sm text-gray-200">
                        Contraseña
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDD251]"
                            placeholder="************"
                        />
                    </label>

                    <button type="submit" className="mt-2 rounded-2xl bg-[#BDD251] px-6 py-3 font-semibold text-gray-900 shadow-md hover:brightness-95">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}
