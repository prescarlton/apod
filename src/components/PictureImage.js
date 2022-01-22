const PictureImage = ({ src }) => {
    return (
        <div className="imgWrapper">
            <a href={src} target='_blank'>
                <img src={src} />
                <h3>View Full Image ❯</h3>
            </a>
        </div>
    )
}

export default PictureImage;