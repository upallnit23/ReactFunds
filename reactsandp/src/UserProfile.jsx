import { Component} from 'react';
import { string } from 'prop-types';

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.initialName
        }
        this.changeName = this.changeName.bind(this)
    }

    // Corrected function
    changeName() {
        this.setState({name: "Sher Cole"})
    }

    render() {

        const name = this.state.name;

        return (
            <div>
                <h1>User Profile</h1> 
                <p>Name: {this.state.name}</p>               
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

UserProfile.propTypes = {
    initialName: string
}

UserProfile.defaultProps = {
    initialName: "Alex"
}

export default UserProfile