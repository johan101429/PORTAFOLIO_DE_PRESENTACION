
import Title from "./shared/title";
import { dataPortfolio } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (  
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portafolio" subtitle=" Proyectos Realizados 💼 "/>
            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{data.title}</h3>
                        <Image 
                            src ={data.image}
                            alt="Image"
                            width={300} height={300} className="rounded-2xl w-full"  // tomar imagenes de los proyectos desplegados 
                         />
                        

                         <div className="mt-5 flex gap-5">
                            <Link className={buttonVariants({ variant: "outline" })} 
                            href={data.urlGithub}
                            target="_blank">
                            Github
                            </Link>
                            <Link className={buttonVariants()} 
                            href={data.urlDemo}//cambiar  url en data con la url del proyecto desplegado
                            target="_blank">
                                
                            Live Demo
                            </Link>

                         </div>





                    </div>

                  
                    
                ))}
            </div>

        </div>
    );
}
 
export default Portfolio ;