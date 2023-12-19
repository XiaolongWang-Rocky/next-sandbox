import { Box } from "@mui/material"
import { Carousel, CarouselItem } from "react-bootstrap"

export default function Page() {
    return <Box sx={{width: '20vw', margin: '0 auto'}}>
        <Carousel indicators={false} interval={null}>
            <CarouselItem>
                <video
                className="d-block w-100"
                src="/media/Tacos.mp4"
                controls
                />
            </CarouselItem>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="/media/91HZ1Ng.jpg"
                alt="First slide"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="/media/lotr-the-battle.jpg"
                alt="Second slide"
                />
            </CarouselItem>
        </Carousel>
    </Box>
}