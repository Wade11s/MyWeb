type Props = {
  href: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export default function PostCard({ href, title, summary, date, tags }: Props) {
  return (
    <article className="card post-card">
      <p className="date">{date}</p>
      <h3>
        <a href={href}>{title}</a>
      </h3>
      <p>{summary}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span className="pill" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
