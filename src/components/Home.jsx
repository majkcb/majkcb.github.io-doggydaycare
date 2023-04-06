const Home = (props) => {
    return (
        <section className="home">
            <h2>Välkommen till Doggy Daycare!</h2>
            <p>Hos oss kan du lita på att ditt pälsbarn är i trygga händer. Vi erbjuder professionell hundvård och omsorgsfull passning i en avslappnad miljö.
                Ta en titt i vår katalog och se vilka fyrbenta vänner som väntar på att träffa dig.
                Vi ser fram emot att få träffa dig och din hund!</p>
            <button onClick={props.catalogScreen}>Katalog</button> 
        </section>

    )
}

export default Home;