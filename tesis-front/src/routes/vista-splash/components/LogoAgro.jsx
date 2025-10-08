import Logo from "../../../assets/logos/logo-agro.png";


export default function LogoAgro() {
    return (
        <img
            src={Logo}
            alt="Agro CSN Company"
            loading="lazy"
            className="h-auto w-32 sm:w-40 md:w-48 drop-shadow"
        />
    );
}