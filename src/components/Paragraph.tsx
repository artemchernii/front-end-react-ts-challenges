export default function Paragraph(props: { content: string }) {
	const { content } = props;
	return <p>{content.length > 0 ? content : 'No content'}</p>;
}
