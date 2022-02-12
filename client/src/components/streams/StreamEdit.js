import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }
  
  render() {
    // console.log(this.props.stream)
    return <div>edit</div>
  }
}
//ownProps asıl sayfa nesnemin dışındakii fonksiyonda kullanabilmem için
//props adlandırmasıdır.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
