import React from 'react'
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header'
import requests from '../Requests';
import Row from '../components/row/Row';


function HomePages() {
    return (
      <div>
        <Header />

        <Banner />

        <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
        {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    );
}

export default HomePages
