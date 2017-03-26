// import { connect } from 'react-redux'
// // import { fetchSubjectIfNeed, unmountSubject } from '../store/actions'
// import React, { PropTypes } from 'react'
// import LazyImage from '../lib/components/LazyImage'
// import { Link } from 'react-router'
// import { join } from '../utils'

// import "../sass/subject.scss"

// class Subject extends React.Component {
//   static propTypes = {
//     title: PropTypes.string,
//     images: PropTypes.object,
//     directors: PropTypes.array,
//     casts: PropTypes.array
//   }

//   componentWillMount () {
//     this.props.fetchSubjectIfNeed(this.props.params.id)
//   }

//   componentWillReceiveProps (nextProps) {

//   }

//   componentWillUnmount () {

//   }

//   static getCasts (casts) {
//     return join(casts.map((cast, i) => <Link key={i} to={`/celebrity/${cast.id}`}>{cast.name}</Link>), ' / ')
//   }

//   render () {
//     if (this.props.isFetching) {
//       return <div>加载中...</div>
//     }
//     return (
//       <div className="subject-page">
//         <h2 className="subject-title">{this.props.title}({this.props.year})</h2>
//         <div className="clearfix">
//           <div className="avatar"><LazyImage src={this.props.images.medium} /></div>
//           <div className="detail">
//             <ul>
//               <li>导演：{Subject.getCasts(this.props.directors)}</li>
//               {/* <li>编剧：{Subject.getCasts(this.props.writers)}</li> */}
//               <li>主演：{Subject.getCasts(this.props.casts)}</li>
//               <li>类型：{this.props.genres.join(' / ')}</li>
//               <li>国家/地区：{this.props.countries.join(' / ')}</li>
//               <li>上映日期：</li>
//               <li>片长：</li>
//             </ul>
//           </div>
//           <div className="rating">
//             <h4>豆瓣评分</h4>
//             <div>
//               <span className="grade">{this.props.rating.average}</span>
//               <span className="rating-count">{this.props.ratings_count}人评价</span>
//             </div>
//             <div>{this.props.reviews_count}看过</div>
//           </div>
//         </div>
//         <div className="summary">
//           <h5>简介：</h5>
//           {
//             (this.props.summary).split(/\n/g).map((s, i) => {
//               return <p key={i}>&#12288;&#12288;{s}</p>
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }


// function mapStateToProps (state, ownProps) {
//   return state.subject
// }

// function mapDispatchToProps (dispatch, ownProps) {
//   return {
//     fetchSubjectIfNeed (id) {
//       dispatch(fetchSubjectIfNeed(id))
//     },
//     unmount () {
//       dispatch(unmountSubject())
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Subject)
