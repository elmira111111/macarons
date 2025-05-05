import CardTovara from "./CardTovara/cardTovara/CardTovara.jsx";
import InfoSection from "./CardTovara/infoSection/InfoSection.jsx";
import Cards from "./CardTovara/cards/Cards.jsx";
import NaborCards from "./podarkaNabory/NaborCards/NaborCards.jsx";
import Section1 from "./forWeddings/section1/Section1.jsx";
import WeddingCards from "./forWeddings/weddingCards/WeddingCards.jsx";
import Korzina from "./korzina/Korzina.jsx";
import VyborKolich from "./sobratNabor/vyborKolich/VyborKolich.jsx";

const App = () => {
    return (
        <div>
            <ReadySets/>
            <CardTovara />
            <InfoSection />
            <Cards/>
            <NaborCards />
            <Section1/>
            <WeddingCards />
            <Korzina />
            <VyborKolich/>
        </div>
    );
};

export default App;