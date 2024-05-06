import Card from "../Card";
// import Carousel from "../Carousel";

const HomePage = () => {
    return (
        <>
            {/* <Carousel /> */} {/**The Carousel component covers the DropdownMenu componente and doesn't allow it work well (fix) */}
            <div className="flex justify-center mb-8">
                <div className="p-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="p-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="p-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default HomePage;