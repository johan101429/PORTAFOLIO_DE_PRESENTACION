


import { Separator } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const Footer = () => {
    return ( 
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0"> Johan Gil </h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me"> Sobre Mi </Link>
                    <Link href="#skills"> Skills </Link>
                    <Link href="#services"> Servicios </Link> 
                    <Link href="#portfolio"> Portafolio</Link>
                    <Link href="#contact"> Contacto </Link>


                </div>
            </div>
            <Separator className="my-6" />
            <div className="text-center text-sm text-gray-500">
                <p>© 2024 Johan Gil. Todos los derechos reservados.</p>
                <p>Diseñado y desarrollado por Johan Gil</p>
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
                <p>Powered by Next.js and Radix UI</p>
            </div>
           


        </footer>
     );
}
 
export default Footer;