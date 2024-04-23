import NavBar from "./NavBar";

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <div className="h-screen w-screen" style={{ backgroundImage: "url('/background.png')" }}>
            <NavBar />
            {children}
        </div>
    );
}