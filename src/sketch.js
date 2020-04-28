class ShowInputs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show1: '',
            show2: '',
            show3: '',
            show4: '',
            show5: '',
            show6: '',
            show7: '',
            show8: '',
            show9: '',
            show10: ''
        };

       // this.handelShowChange = this.handelShowChange.bind(this);
    };

    handelShowChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);

    }


    render() {
        return (

            <div className="Input List">
                <div className="header">
                    <h1>Show Streaming Optimizer</h1>
                    <h2>List the next 10 shows you want to stream</h2>
                </div>
                <form>
                    <div className="Input box">
                        <label>
                            1.
                            <input
                                name="show1"
                                type="text"
                                value={this.state.show1}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            2.
                            <input
                                name="show2"
                                type="text"
                                value={this.state.show2}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            3.
                            <input
                                name="show3"
                                type="text"
                                value={this.state.show3}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            4.
                            <input
                                name="show4"
                                type="text"
                                value={this.state.show4}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            5.
                            <input
                                name="show5"
                                type="text"
                                value={this.state.show5}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            6.
                            <input
                                name="show6"
                                type="text"
                                value={this.state.show6}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            7.
                            <input
                                name="show7"
                                type="text"
                                value={this.state.show7}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            8.
                            <input
                                name="show8"
                                type="text"
                                value={this.state.show8}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            9.
                            <input
                                name="show9"
                                type="text"
                                value={this.state.show9}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="Input box">
                        <label>
                            10.
                            <input
                                name="show10"
                                type="text"
                                value={this.state.show10}
                                onChange={this.handelShowChange}
                            />
                        </label>
                    </div>
                </form>
            </div>

        );
    }
}


ReactDOM.render(
    <ShowInputs />,
    document.getElementById('root')
);
