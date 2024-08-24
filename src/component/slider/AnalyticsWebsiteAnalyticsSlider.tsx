
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box } from '@mui/system';
import { getPhotos } from 'src/apis/getPhotos';
import Image from 'next/image';
import { Card, Grid, Typography } from '@mui/material';

const App = () => {
    const [data, setData] = useState([]);

    const [sliderRef, instanceRef] = useKeenSlider<any>({
        loop: true,
        initial: 0,
        mode: 'free',
        slides: {
            perView: 1,
            spacing: 15,
        },
        created: () => {
            // Update the slider on creation
            if (data.length) {
                instanceRef?.current?.update();
            }
        },
    });

    useEffect(() => {
        const res = getPhotos().then(r => {
            setData(r.slice(1, 10))
            console.log(r.slice(0, 10), r.splice(0, 10))
        })
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [])
    useEffect(() => {
        if (instanceRef.current) {
            // Update the slider whenever data changes
            instanceRef.current.update();
        }
    }, [data]);

    return (
        <Card sx={{ height: 600, }} ref={sliderRef} className="keen-slider">
            {data.map((item: any) => (
                <Box className="keen-slider__slide" key={item.id}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={8} lg={8} sm={12}>
                            <div className="grid-element w-full pt-[100%]">
                                <Image alt='' priority={false}
                                    src={item.url}
                                    // fill
                                    width={700} height={400}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    // className="w-full h-auto"
                                    className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                                />
                            </div>

                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sm={12} display={'flex'} alignItems={'center'}>
                            <Typography color={'darkred'} fontSize={24} fontWeight={'bold'} mx={2}>
                                {item.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

            ))
            }
        </Card >
    );
};

export default App;