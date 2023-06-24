import React from 'react'
import './styles/Form.css'
import { connect } from 'react-redux'
import { addCatalog } from '../redux/actions'
import { moneyConverter } from '../shared/Formatter'
import { calcDiscount } from '../shared/CalculateDiscount'
import { withRouter } from 'react-router-dom'

class AddCatalog extends React.Component {
  state = {
    idCatalog: '',
    name: '',
  }

  render() {
    const { idCatalog, name } = this.state
    const { onAddCatalog, history } = this.props
    return (
      <form
        id='form-add'
        className='form-container'
        onSubmit={e => {
          e.preventDefault()
          if (idCatalog === '') return alert('ID Catalog cannot be empty')
          else if (name === '') return alert('Name cannot be empty')
          else {
            const data = {
              idCatalog: idCatalog,
              name: name
            }
            onAddCatalog(data)
            history.push('/')
          }
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
        <button type='submit'>Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddCatalog: payload => dispatch(addProduct(payload))
})

export default withRouter(connect(null, mapDispatchToProps)(AddCatalog))