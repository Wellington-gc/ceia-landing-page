import NavBar from "./NavBar";

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <div className="min-h-screen text-white"
            style={{ backgroundImage: "url('/background.png')" }}>
            <NavBar />
            {children}
        </div>
    );
}