export const Statistics = ({title, stats}) => {
    return (
        <section
            style={{
                marginTop:50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'yellow',
                width: 500
            }}
        >
            <h2>{title}</h2>

            <ul
                style={{
                    padding: 0,
                    margin: 0,
                    width: 500,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {stats.map(stat => (
                    <li key={stat.id}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}