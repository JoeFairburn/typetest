import React from 'react';

const TextList = (props) => {
	
	const currentWord = (index) => {
		if (props.pointer === index && props.currentlyCorrect !== -1 ) {
			return true;
		}
		else {
			return false;
		}
	}
	
	const listItems = props.text.map((word, index) =>
		<div className='words'>
			{currentWord(index) ? <p key={index} className='words'><span className='text-correct'>{word.substring(0, props.textLength)}</span><span>{word.substring(props.textLength, props.text.length)}</span></p>
		: <span key={index}>{word}</span>}
		&#160;
		</div>);
	
	return(
		<div className="list">
			{listItems}
		</div>
		);
}

export default TextList;