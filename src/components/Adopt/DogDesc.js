const DogDesc = (dogInfo) => {
    return (
        <div>
            <div>{dogInfo.props.temperament[0]}</div>
        </div>
    )
}
export default DogDesc