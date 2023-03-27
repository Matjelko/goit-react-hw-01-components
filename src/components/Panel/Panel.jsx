import "./Panel.css"

export const Panel = ({children}) => {
    return (
        <section className="panel__section">
            {children}
        </section>
    );
};