import Date from '@/components/Date'
import AppLayout from '@/components/Layouts/AppLayout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Head from 'next/head'
import utilStyle from '@/styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <AppLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className={utilStyle.headingXl}>{postData.title}</h1>
            <div className={utilStyle.lightText}>{[postData.id]} </div>
            <div className={utilStyle.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </AppLayout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}
