import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Content from '../components/Content';

import { fetchReview, fetchReviews } from '../dataService/dataService';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.slug);
    this.state = {
      review: null,
      reviews: null,
      reviewDisplay: false,
      multiReviews: true
    }
  }

  retrieveReview(slug) {
    if (slug) {
      fetchReview(slug, this.setReview.bind(this));
    } else {
      this.setState({
        reviewDisplay: false,
        multiReview: false
      })
    }
  }

  retrieveReviews() {
    fetchReviews(this.setReviews.bind(this));
  }

  setReview(data) {
    this.setState({
      slug: '',
      review: data.data,
      reviewDisplay: true,
      multiReview: false
    });
  }

  setReviews(data) {
    console.log('all of them', data);
    this.setState({
      slug: '',
      reviews: data.data,
      reviewDisplay: false,
      multiReview: true
    });
  }

  componentDidMount() {
    if (this.props.match.params.slug) {
      this.retrieveReview(this.props.match.params.slug);
    } else {
      this.retrieveReviews();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      const nextSlug = nextProps.match.params.slug;

      if (nextSlug) {
        this.retrieveReview(nextSlug)
      } else {
        this.retrieveReviews()
      }
    }
  }

  render() {
    const {
      review,
      reviewDisplay
    } = this.state;
    return (
      <div>
        <SectionTitle text={ (reviewDisplay && review) ? 'REVIEW' : 'REVIEWS'} />
        <Content>
          { (reviewDisplay && review) ?
            <h2>{review.title[0].text}</h2> :
            <span>reviews coming soon...</span>
          }
                      <p>This is some general text to start off the review</p><h3>oh man new section!</h3><p>This is some more text in the section. let me list off some cool stuff</p><ul><li>one</li><li>two</li><li>three</li></ul><p>now some numbered</p><ol><li>uno</li><li>dos</li><li>tres</li></ol><p>here's an image for ya</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/2560px-Florida_Box_Turtle_Digon3_re-edited.jpg" alt="This is a random pic of a turtle\" /></p>

        </Content>
      </div>
    )
  }
}
export default Reviews;
