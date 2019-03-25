import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {text} = this.state

        this.props.dispatch(handleAddTweet(text, this.props.id))
        this.setState({text:''})
    }

    render() {
        const tweetLeft = 280 - this.state.text.length
        return (
            <div>
                <h3 className='center'>Twiti mpya</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea placeholder='Mambo?'
                              value={this.state.text}
                              onChange={this.handleChange}
                              className='textarea'
                              maxLength={280}/>
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button className='btn' type='submit'  disabled={this.state.text === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)