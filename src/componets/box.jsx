export default 

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div className="box" style={styles} onMouseOver={props.handleClick} > </div>
    )
}