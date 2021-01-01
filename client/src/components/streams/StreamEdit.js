import { Component } from 'react';
import { connect } from 'react-redux';
import utils from 'zv-utils';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component
{
  componentDidMount()
  {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = formValues =>
  {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render()
  {
    if (!this.props.stream) return <div>Loading...</div>;

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={ utils.pick(this.props.stream, 'title', 'description') } onSubmit={ this.onSubmit } />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) =>
{
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);