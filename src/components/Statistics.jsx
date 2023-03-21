import "./Statistics.css"

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics__section">
            <h2 className="statistics__h2">{title}</h2>

            <ul className="statistics__unordered-list">
                {stats.map(stat => (
                    <li key={stat.id}>
                        <span className="statistics__unordered-list--list-item">{stat.label}</span>
                        <span className="statistics__span--font-size">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}