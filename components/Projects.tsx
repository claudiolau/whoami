export const Projects = () => {
    return (
        <>
            <div id="projects" className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <a href="https://github.com/claudiolau/aldebaran">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body p-6">
                                <h2 className="card-title">aldebran!</h2>
                                <p>Ui library playground for components.</p>
                            </div>
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/tech"
                                    alt="Shoes"
                                />
                            </figure>
                        </div>
                    </a>
                    <a href="https://github.com/claudiolau/MrPeace">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body p-6">
                                <h2 className="card-title">MrPeace!</h2>
                                <p>Perfect cli to sit tight and peace.</p>
                            </div>
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                />
                            </figure>
                        </div>
                    </a>
                    <div className="p-6">
                        <h1 className="text-5xl font-bold">Latest Projects!</h1>
                        <p className="py-6">
                            Repertoire of my best works in Typescript and
                            Python.
                        </p>
                        <a href="#about" className="btn btn-primary">
                            About me
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
