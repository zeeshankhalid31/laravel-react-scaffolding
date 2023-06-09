import Date from '@/components/Date'
import { getSortedPostsData } from '../../lib/posts'
import AppLayout from '@/components/Layouts/AppLayout'
import utilStyles from '@/styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
export default function Posts({ allPostsData }) {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blog List
                </h2>
            }>
            <Head>
                <title>Blog List</title>
            </Head>

            <section>info</section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <div className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </AppLayout>
    )
}
