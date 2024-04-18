import PageLayout from '@/components/PageLayout';

export default function HomePage() {
    return (
        <PageLayout>
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">Sobre o CEIA</h1>
                    <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                    <div className="mt-8">
                        <div className="flex mt-4">
                            <div className="mr-4">
                                <a href="https://www.facebook.com/ceia" target="_blank" rel="noopener noreferrer">
                                    <img src="/facebook-icon.png" alt="Facebook Icon" className="w-6 h-6" />
                                </a>
                            </div>
                            <div className="mr-4">
                                <a href="https://www.twitter.com/ceia" target="_blank" rel="noopener noreferrer">
                                    <img src="/twitter-icon.png" alt="Twitter Icon" className="w-6 h-6" />
                                </a>
                            </div>
                            <div className="mr-4">
                                <a href="https://www.instagram.com/ceia" target="_blank" rel="noopener noreferrer">
                                    <img src="/instagram-icon.png" alt="Instagram Icon" className="w-6 h-6" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/ceia" target="_blank" rel="noopener noreferrer">
                                    <img src="/linkedin-icon.png" alt="LinkedIn Icon" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4">Saiba mais</button>
                </div>
                <div className="w-1/2">
                    <img src="/ceia-large.png" alt="CEIA Large Image" className="w-1/2" />
                </div>
            </div>
        </PageLayout>
    )
}