const PictureImage = ({ src }) => {
    return (
        <div className="imgWrapper">
            <a href={src} target="_blank" rel="noreferrer">
                <img src={src} alt="Astronomy"/>
                <h3>View Full Image ❯</h3>
            </a>
        </div>
    );
};

export default PictureImage;
