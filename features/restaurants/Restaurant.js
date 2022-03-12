import Head from 'next/head';
import { Grid } from '@mui/material';
import { ItemCardWrapper } from './Restaurants.styled'
import ItemCard from './component/ItemCard';
import Paginations from '../../share/components/paginations';
import RestaurantList from './component/RestaurantList';
import RestaurantListMobile from './component/RestaurantListMobile';
import useSWR from 'swr';
import { useState } from 'react';
import styled from 'styled-components'

const Restaurant = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(data && data.length / 13);
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data && data.slice(indexOfFirstPost, indexOfLastPost)

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <title> Restaurant | Foody Delivery</title>
            </Head>
            <>
                <Grid container spacing={2} mt={5}>
                    <Grid lg={2} md={3} sm={12}>
                        <RestaurantList />
                    </Grid>

                    <Grid lg={10} md={9} sm={12}>
                        <RestaurantListMobile />
                        <ItemCardWrapper>
                            <ItemCard data={currentPosts} />
                        </ItemCardWrapper>
                        <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} />
                    </Grid>
                </Grid>
            </>
        </>
    );
};

export default Restaurant;