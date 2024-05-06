import Card from "../Card";

const Jewelry = () => {
    return (
        <>
            <h1>Jewelry</h1>
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

export default Jewelry;