import { getAllItems } from '../../src/lib/items-util';
import Breadcrumb from '../../src/components/breadcrumb';
import HeaderTwo from '../../src/components/header/header-2';

import AllItems from '../../src/components/posts/all-items';
import { Fragment } from 'react';
import Head from 'next/head';
import { getPostTags } from '../../src/lib/getPostTags';
import { getPostCategories } from '../../src/lib/getPostCategories';

const popularTagPage = ({ posts, tags, categories }) => {
    return (
        <Fragment>
            <Head>
                <title>Popular Tags</title>
                <meta name='description' content='Rustic posts!' />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage={'Posts'} pageTitle={'Our Posts'} />
            <AllItems posts={posts} categories={categories} tags={tags} />
        </Fragment>
    );
};

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const posts = getAllItems('posts');
    const filteredPosts = posts
        .map((post) => ({
            ...post,
            uniqueTag: post.postTags.find((tag) => tag === slug),
        }))
        .filter((post) => post.uniqueTag === slug);
    const tags = getPostTags();
    const categories = getPostCategories();

    return {
        props: {
            posts: filteredPosts,
            tags,
            categories,
        },
    };
};

export const getStaticPaths = () => {
    const tags = getPostTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

export default popularTagPage;
