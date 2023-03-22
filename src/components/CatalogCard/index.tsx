import './styles.css';
import carImg from '../../assets/car.png';


export default function CatalogCard() {
    return (


        <div className="cartop-card">
            <div>
                <img src={carImg} alt="Carro" />
                <div className='title-h2-catalog'>
                    <h2>Audi Supra TT</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className='cartop-btn-submit'>
                    <button type='submit' className="cartop-btn">Comprar</button>
                </div>
            </div>
        </div>
    );
}