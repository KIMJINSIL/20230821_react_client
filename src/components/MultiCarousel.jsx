import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function MultiCarousel() {
 return (
    <Carousel responsive={responsive}>
        <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" 
                    src="https://plus.unsplash.com/premium_photo-1669559809077-52f963b1ea7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                    alt="carousel1"/>
        </div>
        <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1634213706953-d98bcabceb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoaXBzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                    alt="carousel2"/>
        </div>
        <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNoaXBzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                    alt="carousel3"/>
        </div>
    </Carousel>
 )
}