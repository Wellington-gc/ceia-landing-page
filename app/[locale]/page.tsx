import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

export default function HomePage() {
    return (
        <PageLayout>
            <div className="flex justify-between space-x-16 items-center">
                <div id="description" className="w-1/2 text-white">
                    <h1>Sobre o Ceia</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                </div>
                <div className='w-1/2'>
                    <Image src={"/ceia-large.png"} alt='ceia-large' width={518} height={664}></Image>
                </div>
            </div>
        </PageLayout>
    )
}