import type { NextPage } from 'next'
import Author from '../../components/_child/Author'
import Format from '../../layout/format'

const Page: NextPage = () => {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author />
                </div>
            </section>
        </Format>
    );
}

export default Page