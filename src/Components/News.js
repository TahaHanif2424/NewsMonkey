import React,{useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=>{


  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  

 useEffect(() => {
   updateNews();
 }, [])
 

  const updateNews =  async() => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=75c041d360cb47f7957678af280ccf96&pageSize=${props.pageSize}&page=${page}`;
    const data = await fetch(url);
    const finalData = await data.json();
    setArticles(finalData.articles);
    setLoading(false);
    setTotalResults(finalData.totalResults);
  };

 const fetchData =  async  () => {
    const { country, category, pageSize } = props;

    if (articles.length >= totalResults) {
      return; 
    }
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=75c041d360cb47f7957678af280ccf96&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page+1);
    const data = await fetch(url);
    const finalData = await data.json();
    setArticles(articles.concat(finalData.articles));
    setTotalResults(finalData.totalResults);
  };


    return (
      <>
        <h2 className="my-3 text-center" style={{marginTop:"90px"}}>News Monkey - Top {props.headings} headlines</h2>

        {loading && <Spinner />}
       {!loading && <InfiniteScroll
          dataLength={articles.length} // This is important field to render the next data
          next={fetchData}
          hasMore={articles.length <= totalResults}
          loader={<Spinner />}
        >
      <div className="container my-3">
  
          <div className="row">
            {!loading &&
              articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={element.url + index}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.sourceName}
                    />
                  </div>
                );
              })}
          </div>
      </div>

        </InfiniteScroll>}
      </>
    );
  }

News.defaultProps = {
  country: 'in',
  pageSize: 25,
  category: 'general',
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;