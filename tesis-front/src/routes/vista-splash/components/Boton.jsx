export default function Boton({ children, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="inline-flex items-center justify-center rounded-2xl bg-[#BDD251] px-6 py-3 font-semibold text-gray-900 shadow-md transition-all hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BDD251] focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50"
        >
            {children}
        </button>
    );
}