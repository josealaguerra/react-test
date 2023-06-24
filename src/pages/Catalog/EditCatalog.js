import React from 'react'
import './styles/Form.css'
import { connect } from 'react-redux'
import { updateCatalog } from '../redux/actions'
import { withRouter } from 'react-router-dom'

class EditCatalog extends React.Component {
  state = {
    idCatalog: '',
    name: ''
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { idCatalog, name } = this.props.location.state
      this.setState({
        idCatalog: idCatalog,
        name: name
      })
    }
  }

  render() {
    const { id } = this.props.match.params
    const { idCatalog, name } = this.state
    const { onUpdate, history } = this.props
    return (
      <div>
        <form
          id='form-edit'
          className='form-container'
          onSubmit={e => {
            e.preventDefault()
            const data = {
              idCatalog: idCatalog,
              name: name
            }
            onUpdate(Number(id), data)
            history.push('/')
          }}
        >
          <label htmlFor='name'>ID Catalog</label>
          <input
            id='idCatalog'
            type='text'
            value={idCatalog}
            onChange={e => this.setState({ idCatalog: e.target.value })}
          />
          <label htmlFor='name'>Name</label>
          <textarea
            id='name'
            cols={40}
            rows={5}
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <button type='submit'>Edit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdate: (catalogID, catalog) => dispatch(updateCatalog(catalogID, catalog))
})

export default withRouter(connect(null, mapDispatchToProps)(EditCatalog))
