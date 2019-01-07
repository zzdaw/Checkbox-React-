const PositiveMessage = () => <p>You can buy ticket.</p>
const NegativeMessage = () => <p>You can't buy ticket.</p>

class Checkbox extends React.Component {
    state = {
        isConfirmed: false
    }
    handleChecked = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }
    displayMessage = () => {
        if (this.state.isConfirmed) {
            return <PositiveMessage />
        } else {
            return <NegativeMessage />
        }
    }
    render() {
        const { isConfirmed } = this.state
        return (
            <>
                <h1>Confirms your age.</h1>
                <input type="checkbox" id='age' checked={isConfirmed} onChange={this.handleChecked} />
                <label htmlFor="age">I have at least 16 years old.</label>
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<Checkbox />, document.getElementById('root'))