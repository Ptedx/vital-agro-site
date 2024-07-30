import LocStyle from "../../styled-components/body/LocStyle"

const Loc = ()=>{

    return(
        <LocStyle >
            <h1 id="loc">Onde nos encontrar?</h1>
            <iframe
                title="maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyzxni1QtWpMRFYNcHYgeeoM&key=AIzaSyB5ozTcwL2Q4Z4Vnm9qGTgpjR8j9__Icd4">
            </iframe>
        </LocStyle>
    )
}

export default Loc