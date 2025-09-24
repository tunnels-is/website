import React from "react";

const TextBanner = (props) => {
	return (
		<div className={`textbanner viewport-hide ${props.tag1 || ''}`}>
			<div className="top-text">
				<h1 className="title">{props.title}</h1>
				{props.subtitle && (
					<p className="subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}>
					</p>
				)}
				{props.text && (
					<p className="text-content" dangerouslySetInnerHTML={{ __html: props.text }}>
					</p>
				)}
				{props.link && (
					<div className="cta-actions">
						<a
							href={props.link}
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button primary"
						>
							{props.linkText || "Learn More"}
						</a>
					</div>
				)}
			</div>
		</div>
	)
}

export default TextBanner;