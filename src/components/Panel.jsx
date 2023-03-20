export const Panel = ({children}) => {
    return (
        <section
            style={{
                width: 300,
                textAlign:'center',
                padding: 40,
                backgroundColor: 'white',
                height: 400,
                padding: 0,
                paddingTop:30,
                margin: 0,
            }}
        >
            {children}
        </section>
    );
};