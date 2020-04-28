var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowInputs = function (_React$Component) {
    _inherits(ShowInputs, _React$Component);

    function ShowInputs(props) {
        _classCallCheck(this, ShowInputs);

        var _this = _possibleConstructorReturn(this, (ShowInputs.__proto__ || Object.getPrototypeOf(ShowInputs)).call(this, props));

        _this.handelShowChange = function (event) {
            _this.setState(_defineProperty({}, event.target.name, event.target.value));
            console.log(event.target.value);
        };

        _this.state = {
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
        return _this;
    }

    _createClass(ShowInputs, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'Input List' },
                React.createElement(
                    'div',
                    { className: 'header' },
                    React.createElement(
                        'h1',
                        null,
                        'Show Streaming Optimizer'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        'List the next 10 shows you want to stream'
                    )
                ),
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '1.',
                            React.createElement('input', {
                                name: 'show1',
                                type: 'text',
                                value: this.state.show1,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '2.',
                            React.createElement('input', {
                                name: 'show2',
                                type: 'text',
                                value: this.state.show2,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '3.',
                            React.createElement('input', {
                                name: 'show3',
                                type: 'text',
                                value: this.state.show3,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '4.',
                            React.createElement('input', {
                                name: 'show4',
                                type: 'text',
                                value: this.state.show4,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '5.',
                            React.createElement('input', {
                                name: 'show5',
                                type: 'text',
                                value: this.state.show5,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '6.',
                            React.createElement('input', {
                                name: 'show6',
                                type: 'text',
                                value: this.state.show6,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '7.',
                            React.createElement('input', {
                                name: 'show7',
                                type: 'text',
                                value: this.state.show7,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '8.',
                            React.createElement('input', {
                                name: 'show8',
                                type: 'text',
                                value: this.state.show8,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '9.',
                            React.createElement('input', {
                                name: 'show9',
                                type: 'text',
                                value: this.state.show9,
                                onChange: this.handelShowChange
                            })
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'Input box' },
                        React.createElement(
                            'label',
                            null,
                            '10.',
                            React.createElement('input', {
                                name: 'show10',
                                type: 'text',
                                value: this.state.show10,
                                onChange: this.handelShowChange
                            })
                        )
                    )
                )
            );
        }
    }]);

    return ShowInputs;
}(React.Component);

ReactDOM.render(React.createElement(ShowInputs, null), document.getElementById('root'));