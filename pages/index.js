import { Component } from 'react'
import Head from 'next/head'
import Total from '../components/Total'
import Selection from '../components/Selection'
import Layout from '../components/Layout'
import Row from '../components/Row'

export default class Index extends Component {
  render () {
    return (
      <>
        <Head>
          <title>ElevPC dashboard</title>
        </Head>
        <Layout>
          <Row>
            <div>
              <Total title='Antall kontrakter' source='https://stats.avtaler.minelev.no/stats/total/elevpc' refresh='10' />
            </div>
            <div>
              <Total title='Antall signerte' source='https://stats.avtaler.minelev.no/stats/signed/elevpc' refresh='10' />
            </div>
            <div>
              <Total title='Antall avbrutte' source='https://stats.avtaler.minelev.no/stats/cancelled/elevpc' refresh='10' />
            </div>
          </Row>
          <Row>
            <div>
              <Total title='Antall parts' source='https://stats.avtaler.minelev.no/stats/parts/elevpc' refresh='10' />
            </div>
            <div>
              <Total title='Antall signerte parts' source='https://stats.avtaler.minelev.no/stats/parts/elevpc/signed' refresh='10' />
            </div>
            <div>
              <Total title='Antall avbrutte parts' source='https://stats.avtaler.minelev.no/stats/parts/elevpc/cancelled' refresh='10' />
            </div>
            <div>
              <Selection title='Antall arkiverte parts' source='https://stats.service.t-fk.no/stats/avtaler-nedlasting' refresh='10' />
            </div>
          </Row>
          <Row>
            <div>
              <Total title='Antall manuelle' source='https://stats.avtaler.minelev.no/stats/manual/elevpc' refresh='10' />
            </div>
            <div>
              <Total title='Antall mulige digitale' source='https://stats.avtaler.minelev.no/stats/canbedigital/elevpc' refresh='10' />
            </div>
          </Row>
          <style jsx>
            {`
            div {
              flex-grow: 1;
              margin: 5px 10px 5px 10px;
            }
          `}
          </style>
        </Layout>
      </>
    )
  }
}
