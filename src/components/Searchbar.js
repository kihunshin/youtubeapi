import React from 'react'

export default class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <>
            <h2 style={{textAlign:"center"}}><img style={{width:'200px', height:'100px' , justifyContent:'center'}} src='http://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"/></h2>
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='field'>
                            <label htmlFor="video-search">Video Search</label>
                            <input onChange={this.handleChange} name='video-search' type="text" placeholder="검색"/>
                        </div>
                    </form>
                </div>
                </>
        ) 
    }
}