import { Component } from 'react'
import Card from './Card'
import getData from '../lib/get-data'

export default class Status extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: { total: 0 }
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    const value = { total: data[0].archive.done.count }
    this.setState({ data: value })
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const data = await getData(this.props.source)
    const value = { total: data[0].archive.done.count }
    this.setState({ data: value })
  }

  render () {
    return (
      <Card title={this.props.title} number={this.state.data.total || 0} />
    )
  }
}
