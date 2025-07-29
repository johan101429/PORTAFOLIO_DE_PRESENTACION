import Title from "./shared/title";
import styles from "./about-me.module.css";
import { dataAboutMe, dataSlider } from "@/data";
import { FiPhone as Phone } from "react-icons/fi";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className={styles.container} id="about-me">
            <Title title="Sobre mi" subtitle="Conoceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex itenms-center justify-center">
                    {/*carousel*/}
                    <Carousel
                        opts={{
                            align:"start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                               <CarouselItem key={data.id}>
                                    <div className="flex  items-center justify-center">
                                        <Image 
                                        src={data.url} 
                                        alt="Image"
                                         width={400} 
                                         height={400} 
                                         className="w-full h-auto rounded-lg" />
                                        
                                    </div>

                               </CarouselItem> 
                            ))}

                         </CarouselContent>  
                         <CarouselPrevious/>
                         <CarouselNext/> 
                    </Carousel>    

                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}

                    </div>
                    <p className="my-8">
                        Desarrollador con experiencia básica en el uso de diversos lenguajes de programación para la creación de aplicaciones web y móviles.
                        Poseo sólidas habilidades para la solución de problemas, la colaboración y el aprendizaje continuo. </p>
                    <button className={styles.contactButton}>
                      <Phone size={20} className={styles.phoneIcon} /> Hablamos
                    </button>

                </div>
            </div>



        </div>
    );
}

export default AboutMe;