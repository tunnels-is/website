import React from "react";

const TextCenter = (props) => {
	return (
		<div className={`${props.className || ''} textcenter-component`}>
			<div className={`content text ${props.tag1 || ''} viewport-hide`}>
				{props.link &&
					<a href={props.link} className="title link">{props.title}</a>
				}
				{!props.link &&
					<div className="title">{props.title}</div>
				}
				<div className="section-text" dangerouslySetInnerHTML={{ __html: props.content }}>
				</div>
			</div>
		</div>
	)
}

export default TextCenter;