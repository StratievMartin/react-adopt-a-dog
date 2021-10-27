const DogDesc = (dogInfo) => {
    return (
        <div>
            <div>Temperament: {dogInfo.props.temperament[0]}</div>
            <div>Located at: {dogInfo.props.location}</div>
        </div>
    )
}
export default DogDesc