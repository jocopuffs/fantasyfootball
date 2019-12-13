
class Player extends Component {
    constructor() {
        super()
        this.state = {
            isSelected: false,
        }
    }

    handleClick= () => {
        this.setState(state =>({
        isSelected: !state.isSelected}))
        }

    render() {
        const {name } = this.props;
        const {predicted} = this.props;
        const {isSelected} = this.state;

        return(
            
            <div onClick={this.handleClick} className={'Player_Container'}>
                <h3>{name}</h3>
                {isSelected && <p>{predicted}</p>}
            </div>

     
        )
    }
}

