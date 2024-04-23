import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
    return (
        <PageLayout>
            <div className="flex justify-between items-center p-4">
                <div id="description" className="w-1/2 text-white flex flex-col m-16 pl-10">
                    <div className="w-3/5">
                        <h1 className="text-6xl font-bold pb-2">Sobre o Ceia</h1>
                        <div className="h-2 w-3/4 bg-secondary-light-blue" style={{ borderRadius: "0px 50px" }}></div>
                    </div>
                    <br />
                    <p className="w-3/5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                    <div className="space-x-6 pt-12">
                        <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                        <FontAwesomeIcon icon={faFacebook} size={"2x"} />
                        <FontAwesomeIcon icon={faYoutube} size={"2x"} />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <Image src={"/ceia-large.png"} alt="ceia-large" width={518} height={664}></Image>
                </div>
            </div>
        </PageLayout >
    )
}