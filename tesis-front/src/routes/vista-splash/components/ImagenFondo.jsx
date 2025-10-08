import Fondo from "../../../assets/images/fondo-bienvenida.png";


export default function ImagenFondo() {
    return (
        <img
            src={Fondo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
    );
}