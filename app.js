const SelectionMessages = (props) => <p>{props.txt}</p>

// const PositiveMessage = () => <p>You can buy ticket.</p>
// const NegativeMessage = () => <p>You can't buy ticket.</p>

class Checkbox extends React.Component {
    state = {
        isConfirmed: false,
        isSubmitted: false
    }
    handleChecked = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isSubmitted: false
        })
    }
    displayMessage = () => {
        if (this.state.isSubmitted) {
            if (this.state.isConfirmed) {
                return <SelectionMessages txt='You can buy ticket.' />
            } else {
                return <SelectionMessages txt="You can't buy ticket." />
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isSubmitted: true
        })
    }
    render() {
        const { isConfirmed } = this.state
        return (
            <>
                <h1>Confirms your age.</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="checkbox" id='age' checked={isConfirmed} onChange={this.handleChecked} />
                    <label htmlFor="age">I have at least 16 years old.</label><br />
                    <button>Click</button>
                    {this.displayMessage()}
                </form>
            </>
        )
    }
}

ReactDOM.render(<Checkbox />, document.getElementById('root'))