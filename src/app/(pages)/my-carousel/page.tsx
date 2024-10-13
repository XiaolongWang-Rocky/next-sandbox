import { Box } from "@mui/material"
import { Carousel, CarouselItem } from "react-bootstrap"
import VideoJSPlayer from "../videojs-demo/VideoJS"

export default function Page() {
    return <Box sx={{ padding: '5px', width: {xs: '63vw', sm: '413px'} }}>
        <Carousel indicators={false} interval={null}>
            {/* <CarouselItem>
                <img
                // className="d-block w-100"
                src="/media/91HZ1Ng.jpg"
                alt="First slide"
                />
            </CarouselItem>
            <CarouselItem>
                <VideoJSPlayer videoUrl='https://stream.mux.com/8JIGyiUlSjTaNmEY2IFDbh6Grq5fGTP5KH2QPrvJNkM.m3u8?token=eyJraWQiOiJaMDEyeTJHZFQxVmJwTEJuaFVGTTJUT1JIMDFMTHk1YjAwMDBKbU5HbFpNMDA4NkUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4SklHeWlVbFNqVGFObUVZMklGRGJoNkdycTVmR1RQNUtIMlFQcnZKTmtNIiwiYXVkIjoidiIsImV4cCI6MTcxNjQxOTQ2OX0.lDEWo6VfqwocWmXlU-977B2_h-dDhRv2szItKbQ2JsJ2V7uUwMcUOh6YZp5FyyaF087QGfFQGTTwdM8KOt7gM5JoEaR1hIltiUBD0Ca2B3J962s1jH998KihrXWjf8dr_HF7c4orjygLdTbCxdvkcWxnHucJFt9cSmf1TypVprqv700HN4RTA8hZJIXtzndTVE2pWfJziVTS-rMDUz3RNxP8gl-7r0L7FOkjOuSEiu0bgFZMp0fwiWU7tt7ck5T06XA-G6g1eISOhsn2uwQ1zGT0LZ2QZRSOgZrkoJKdNBdL9sXdOjwv0oV5b3D5SSaxdvnYT9dhnXngJUc6SUIPfQ' />
            </CarouselItem>
            <CarouselItem>
                <img
                // className="d-block w-100"
                src="/media/lotr-the-battle.jpg"
                alt="Second slide"
                />
            </CarouselItem>
            <CarouselItem>
                <video
                // className="d-block w-100"
                src="/media/Tacos.mp4"
                controls
                />
            </CarouselItem> */}
            <CarouselItem>
                <VideoJSPlayer videoUrl='https://stream.mux.com/QRH7Em6lbuUMgMtw200m2ILaRz01U3P9BykOqcUBakuP00.m3u8?token=eyJraWQiOiJaMDEyeTJHZFQxVmJwTEJuaFVGTTJUT1JIMDFMTHk1YjAwMDBKbU5HbFpNMDA4NkUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJRUkg3RW02bGJ1VU1nTXR3MjAwbTJJTGFSejAxVTNQOUJ5a09xY1VCYWt1UDAwIiwiYXVkIjoidiIsImV4cCI6MTcxNjUxMTAwNH0.CaqWKz9Ycnqg1btQwF1ESDkqdDGBwDh7qPIvPhIrfJeZr372jvSnNm_56asJ1Nk3EHXIFv9TYZ6EWl7u_MrVmbo7wyyYQtixlbFyaVfE8cqWuQRvtd_Xjhp-jA-rSvKbJMj6qEMMJ6SydupTcKkg8Vzo33PY1BSi_6KKREATgQVnK7EU-WYfmtwkB6Vz9QlujSTXrxELuFcmw9F5WreS73W31Kvt71aWrvC6ukuhppRdyMEeNvtFd5-v3W-KmhERWe5etqCbz4Z9o2I-DQ9R752k0DcTlPv1gTUjcGGfkv0bBxGQmf4w75j508XAAnmDzhk0Gvs6EHFQ2glUFDBg9w' />
            </CarouselItem>
            <CarouselItem>
                <VideoJSPlayer videoUrl='https://stream.mux.com/FxsIlocVLATEJb7B36Y302yFJvtU9wFX02UjBCbngNBBo.m3u8?token=eyJraWQiOiJaMDEyeTJHZFQxVmJwTEJuaFVGTTJUT1JIMDFMTHk1YjAwMDBKbU5HbFpNMDA4NkUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJGeHNJbG9jVkxBVEVKYjdCMzZZMzAyeUZKdnRVOXdGWDAyVWpCQ2JuZ05CQm8iLCJhdWQiOiJ2IiwiZXhwIjoxNzE2NDQ1MzU4fQ.CIq3b2_Y2zxvSkPPnl62237XxiPkv2DLjdJ8rt3qEoPF67hvIvtaLPk976biU0oCrkvJeFxZIxFW3Jiz04oKJIw0kuoGIr4S26uMWVl8Ox_2NwStotgpf54XfUCISiKvnTNrTwgzKOyoqimvVNHUanxke5qBwvz1IeraHWxH2mWtAlm0rm_XSsgA5UD6n5AGNnXKVbx47XqM7AKwSdd1pKjuYiBIIfXcOzpgAH2reIZ_rdc4WaTxShmbQyKJGYkbRijEfzQVA_ZMbkqvLEiPqanYfNDfT0SB6GT0yLrdjCVNhR__3RwfHnqLkQbSy2Q4fafFFm216QeqQVm5gMgKuQ' />
            </CarouselItem>
            <CarouselItem>
                <VideoJSPlayer videoUrl='https://stream.mux.com/ju5zwaD009ExdvBvfTJgzGipywZfauOH7HQG8AWJWetc.m3u8?token=eyJraWQiOiJaMDEyeTJHZFQxVmJwTEJuaFVGTTJUT1JIMDFMTHk1YjAwMDBKbU5HbFpNMDA4NkUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJqdTV6d2FEMDA5RXhkdkJ2ZlRKZ3pHaXB5d1pmYXVPSDdIUUc4QVdKV2V0YyIsImF1ZCI6InYiLCJleHAiOjE3MTY1MTA3MzR9.A4keLuB9nq4A-n-JbETjgXcv07lqJwD3J77S0UY_TVDxd6X_ci-4opX7dpa5yQomQa0lI3LSzIKbQdOB346Qrla8J7hsQntwNkKXj8mOxlJj8tAsPr-CFRG-CiH42SXFa6tNAsPR-pYJEGjzaUCAJRLhVycTquPTFwysKtmBq41IjAiKGTPe2zhCATza2cAlyQT0GGluXVM_eXHlq9bHC57H0JISADyg-C23MLngb_dG3hiYjHpAiDx4wJOrOMBBlMjjlSEVf7GDiof5FEL03USPUWWNaPZrq1gBfu-kQWiK0oARGu8yDlRdlbpdoLTZwHDPdkjQMx9zBULeB4I0Qw' />
            </CarouselItem>
        </Carousel>
    </Box>
}