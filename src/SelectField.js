var React = require('react');

class SelectField extends React.Component {

  constructor() {
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    var {id, options, label, value} = this.props;
    var mappedOpts =
      options.map((each) => <option key={each} value={each}>{each}</option>);

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={this.onChange}>
          {mappedOpts}
        </select>
      </div>
    );
  }

}

module.exports = SelectField;
