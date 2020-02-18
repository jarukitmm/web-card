import React, {Component} from 'react';
import Card from './card.js'
import '../css/content.css'
const cards = [
    {
      id: "0",
      title: "test0",
      path: 'https://image.freepik.com/vector-gratis/diseno-colorido-banners-promocionales-rebajas_1017-9784.jpg?1',
      // path: require('./../src/images/Promotion/promotion1.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "1",
      title: "test1",
      path: 'https://www.techxcite.com/topics/28200/filemanager/1.jpg',
      // path: require('./../src/images/Promotion/promotion2.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "2",
      title: "test2",
      path: 'https://www.techxcite.com/topics/21424/filemanager/2015-02-20_08-00-07.jpg',
      // path: require('./../src/images/Promotion/promotion3.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "3",
      title: "test3",
      path: 'https://s3-ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/12/05201835/57.jpg',
      // path: require('./../src/images/Promotion/promotion4.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "4",
      title: "test4",
      path: 'https://www.koshidaka.com.sg/wp-content/uploads/2016/11/News-Promotion-3.jpg',
      // path: require('./../src/images/Promotion/promotion5.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "5",
      title: "test5",
      path: 'https://previews.123rf.com/images/dizanna/dizanna1504/dizanna150400189/38372896-promotion-word-cloud-business-concept.jpg',
      // path: require('./../src/images/Promotion/promotion6.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
    {
      id: "6",
      title: "test6",
      path: 'https://img.freepik.com/free-vector/sale-background-template_1361-554.jpg?size=626&ext=jpg',
      // path: require('./../src/images/Promotion/promotion7.jpg'),
      content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
      date: "1/3/62",
    },
  ];

class Content extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            card:null
        }
    }

    componentDidMount(){
        let content = cards.map( (card, index) => {
            return(
                <div className="cardarea">
                    <Card
                        title={card.title}
                        content={card.content}
                    />
                </div>
            );
        })
        this.setState({card: content});
    }

    render(){
        return(
            <div className="content">
                <div className="container">
                    {this.state.card}
                </div>
            </div>
        );
    }
}

export default Content;