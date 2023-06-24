import React from 'react'
import './styles/ProductCard.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCatalog } from '../redux/actions'

class CatalogList extends React.Component {
  state = {
    limit: 5
  }

  componentDidMount() {
    window.addEventListener('scroll', this.loadMore)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.loadMore)
  }

  loadMore = () => {
    setTimeout(() => {
      this.setState({ limit: this.state.limit + 5 })
    }, 1500)
  }

  render() {
    const { catalogs, onDelete } = this.props
    const { limit } = this.state
    
    /**
     * sort catalogs by new added
     * but conflict with scroll load more
     */
    // catalogs.sort((a, b) => {
    //   if (a.id - b.id) return 1
    // })

    return (
      <div>
        {catalogs.length === 0 && <p>No catalogs available on list.</p>}
        {catalogs.slice(0, limit).map(item => (
          <div key={item.id} className='card-container'>
            <img alt='thumb' src={item.thumb} className='product-image' />
            <div className='product-data'>
              <div className='row-data'>
                <h5>ID</h5>
                <h5>{item.id}</h5>
              </div>
              <div className='row-data'>
                <h5>Name</h5>
                <h5>{item.payload.id}</h5>
              </div>
            </div>
            <div className='catalog-action'>
              <button className='btn-edit'>
                <Link
                  to={{
                    pathname: `/edit/${item.id}`,
                    id: item.id,
                    state: {
                      id: item.payload.id,
                      name: item.payload.name
                    }
                  }}
                >
                  Edit
                </Link>
              </button>
              <button
                className='btn-delete'
                type='button'
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  catalogs: state
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteCatalog(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList)
