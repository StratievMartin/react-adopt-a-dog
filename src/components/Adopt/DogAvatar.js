const DogAvatar = (dogInfo) => {
    return (
        <div>
            <img src={dogInfo.props.img} alt={dogInfo.props.breed} />
            <div><b>{dogInfo.props.breed}</b></div>
        </div>
    )
}
export default DogAvatar