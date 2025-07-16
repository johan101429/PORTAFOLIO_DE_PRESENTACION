


import {Carousel, CarouselItem} from './ui/carousel';
import Title from './shared/title';
import { dataTestimonials } from '@/data';
import {Avatar} from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

const Testimonials = () => {
    return (
        <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="Testimonios" subtitle='Review de los clientes'/>

            <Carousel className='mx-auto mt-6'>
                {dataTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} 
                    className='md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg'>
                        <Avatar>
                            <AvatarImage src={testimonial.imageUrl} alt="Profile avatar" />

                        </Avatar>
                    </CarouselItem>
                ))}
            </Carousel>



        </div>

      );
}
 
export default Testimonials ;